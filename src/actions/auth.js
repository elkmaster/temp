import authService from '../services/auth';
import types from '../constants/actionTypes';

export const login = form => async (dispatch) => {
  dispatch(() => ({ type: types.LOGIN_REQUEST }));

  try {
    const payload = await authService.login(form);
    localStorage.setItem('authToken', payload.tokens.auth);
    localStorage.setItem('refreshToken', payload.tokens.refresh);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload,
    });
  } catch (err) {
    // ...your error handler
    dispatch(err => ({
      type: types.LOGIN_FAILURE,
      payload: err,
    }));
  }
};

export const checkLogin = () => async (dispatch) => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (refreshToken) {
    try {
      dispatch(() => ({ type: types.CHECK_LOGIN_REQUEST }));
      const payload = await authService.refreshToken(refreshToken);
      localStorage.setItem('authToken', payload.tokens.auth);
      localStorage.setItem('refreshToken', payload.tokens.refresh);
      dispatch({
        type: types.CHECK_LOGIN_SUCCESS,
        payload,
      });
    } catch (err) {
      // ...your error handler
      localStorage.setItem('refreshToken', '');
      localStorage.setItem('authToken', '');
      dispatch(err => ({
        type: types.CHECK_LOGIN_FAILURE,
        payload: err,
      }));
    }
  }
};

export const logout = () => {
  localStorage.setItem('authToken', '');
  localStorage.setItem('refreshToken', '');
};

export const register = form => async (dispatch) => {
  dispatch(() => ({ type: types.REGISTER_REQUEST }));

  try {
    const payload = await authService.register(form);
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload,
    });
  } catch (err) {
    // ...your error handler
    dispatch(err => ({
      type: types.REGISTER_FAILURE,
      payload: err,
    }));
  }
};
