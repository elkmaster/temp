import types from '../../constants/actionTypes';
import mockStore from '../../utils/testHelpers/mockStore';
import * as actions from '../auth';

import addCommentService from '../../services/auth';
jest.mock('../../services/auth');

describe('Auth actions', () => {

  it('addCommentRequest should create ADD_COMMENT_REQUEST action', () => {
    const expectedAction = { type: types.ADD_COMMENT_REQUEST };
    expect(actions.addCommentRequest()).toEqual(expectedAction);
  });

  it('addCommentFailure should create ADD_COMMENT_FAILURE action', () => {
    const err = new Error('some error');
    const expectedAction = {
      type: types.ADD_COMMENT_FAILURE,
      payload: err,
    };

    expect(actions.addCommentFailure(err)).toEqual(expectedAction);
  });

  describe('addComment', () => {
    const store = mockStore({
      data: [],
      isProcessing: false,
    });

    afterEach(() => {
      store.clearActions();
    });

    it('should create ADD_COMMENT_SUCCESS action', async () => {
      addCommentService.mockReturnValue(
        Promise.resolve({
          id: '2ds12d15',
          message: 'Test comment',
        }),
      );

      const expectedActions = [
        { type: types.ADD_COMMENT_REQUEST },
        { type: types.ADD_COMMENT_SUCCESS, payload: { id: '2ds12d15', message: 'Test comment' } },
      ];

      expect.assertions(1);
      await store.dispatch(actions.addComment('Test comment'));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create ADD_COMMENT_FAILURE action', async () => {
      addCommentService.mockReturnValue(
        Promise.reject({
          message: 'Some error',
        }),
      );

      const expectedActions = [
        { type: types.ADD_COMMENT_REQUEST },
        {
          type: types.ADD_COMMENT_FAILURE,
          payload: {
            message: 'Some error',
          },
        },
      ];

      expect.assertions(1);
      await store.dispatch(actions.addComment('Test comment'));
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
});
