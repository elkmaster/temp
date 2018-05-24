/**
 * Example of simple reducer
 */

import types from '../constants/actionTypes';

const initialState = {
  loggedIn: false,
  name: '',
  id: '',
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, isFetching: true };

    default:
      return state;
  }
};
