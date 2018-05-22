/**
 * Example of simple reducer
 */

import types from '../constants/actionTypes';

const initialState = {
  data: [],
  isProcessing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_COMMENT_REQUEST:
      return { ...state, isProcessing: true };
    case types.ADD_COMMENT_SUCCESS:
      return { ...state, isProcessing: false, data: [...state.data, payload] };
    case types.ADD_COMMENT_FAILURE:
      return { ...state, isProcessing: false };
    default:
      return state;
  }
};
