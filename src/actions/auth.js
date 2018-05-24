import authService from '../services/auth';
import types from '../constants/actionTypes';

export const login = form => async (dispatch) => {
  dispatch(() => ({ type: types.LOGIN_REQUEST }));

  try {
    const payload = await authService.login(form);
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
