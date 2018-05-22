/**
 * Example of async redux action with mock data
 */

import addCommentService from '../services/comments';
import types from '../constants/actionTypes';

export const addCommentRequest = () => ({ type: types.ADD_COMMENT_REQUEST });

export const addCommentFailure = err => ({
  type: types.ADD_COMMENT_FAILURE,
  payload: err,
});

export const addComment = comment => async (dispatch) => {
  dispatch(addCommentRequest());

  try {
    const payload = await addCommentService(comment);
    dispatch({
      type: types.ADD_COMMENT_SUCCESS,
      payload,
    });
  } catch (err) {
    // ...your error handler
    dispatch(addCommentFailure(err));
  }
};
