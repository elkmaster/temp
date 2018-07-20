/**
 * Example of simple reducer
 */

import types from '../constants/actionTypes';

const initialState = {
  loggedIn: false,
  isFetching: false,
  user: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...initialState, isFetching: true };
    case types.LOGIN_SUCCESS:
      return {
        ...initialState,
        loggedIn: true,
        isFetching: false,
        user: action.payload.user,
      };
    case types.LOGIN_FAILURE:
      return {
        ...initialState,
        error: action.payload,
      };
    case types.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
