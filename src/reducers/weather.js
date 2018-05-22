/**
 * Example of simple reducer
 */

import types from '../constants/actionTypes';

const initialState = {
  data: {},
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_WEATHER_SUCCESS:
      return { ...state, isFetching: false, data: { ...action.payload } };
    case types.FETCH_WEATHER_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
