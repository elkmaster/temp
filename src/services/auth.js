import axios from 'axios';

const url = `${process.env.REACT_APP_API_URL}`;

export default {
  login: async (form) => {
    const { data } = await axios.post(`${url}auth/login`, form);
    return data;
  },

  refreshToken: async (refreshToken) => {
    const { data } = await axios.post(`${url}auth/refresh-token`, { refresh_token: refreshToken });
    return data;
  },

  register: async (form) => {
    const { data } = await axios.post(`${url}auth/register`, form);
    return data;
  },
};
