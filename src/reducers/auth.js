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
    case types.CHECK_LOGIN_REQUEST:
      return { ...state, isFetching: true };
    case types.LOGIN_SUCCESS:
    case types.CHECK_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isFetching: false,
        user: action.payload.user,
      };
    case types.LOGIN_FAILURE:
    case types.CHECK_LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
