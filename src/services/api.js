import axios from 'axios';
// import vars from '../config/vars';
import store from '../store/index';
import { logout } from '../actions/auth';
// import {showNotification} from 'Actions/notification';

const HTTP = (config, authenticated = false) => {
  const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
  });

  const savedConfig = config;

  api.interceptors.request.use((config) => {
    if (authenticated) {
      const authToken = localStorage.getItem('auth_token');
      // eslint-disable-next-line
      config.headers.common['Authorization'] = `Token token=${authToken}`;
    }
    return config;
  })

  api.interceptors.response.use(response => response, (error) => {
    const { name } = error.response.data;
    const { status } = error.response;
    const refreshToken = localStorage.getItem('refresh_token');

    if (name === 'auth_expired' && refreshToken) {
      const refreshToken = localStorage.getItem('refresh_token');
      return api({
        url: '/auth/refresh_token',
        method: 'POST',
        headers: {
          pragma: 'no-cache',
          'cache-control': 'no-cache',
        },
        data: {
          refresh_token: refreshToken,
        },
      }).then(({ data }) => {
        localStorage.setItem('auth_token', data.auth_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        return api(savedConfig);
      });
    }

    if (status === 401 && authenticated) {
      store.dispatch(logout());
    }

    return Promise.reject(error);
  })

  return api(config).catch((error) => {
    if (error.response) {
      if (error.response.status >= 500) {
      // store.dispatch(showNotification({type: 'danger', message: 'Oops! Something went wrong.'}))
      }
    } else {
      // store.dispatch(showNotification({type: 'danger', message: 'Oops! Something went wrong.'}))
    }
    throw error;
  });
}

export default HTTP;
