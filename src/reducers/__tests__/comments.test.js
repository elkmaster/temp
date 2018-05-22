import reducer from '../comments';
import types from '../../constants/actionTypes';

describe('comments reducer', () => {

  it('should return initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual({
      data: [],
      isProcessing: false,
    });
  });

  it('should handle ADD_COMMENT_REQUEST', () => {
    const requestAction = { type: types.ADD_COMMENT_REQUEST };
    expect(
      reducer(undefined, requestAction),
    ).toEqual({
      data: [],
      isProcessing: true,
    });
  });

  it('should handle ADD_COMMENT_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.ADD_COMMENT_SUCCESS,
        payload: {
          id: '1s2da231s',
          message: 'First comment',
        },
      }),
    ).toEqual({
      isProcessing: false,
      data: [
        {
          id: '1s2da231s',
          message: 'First comment',
        }],
    });

    expect(
      reducer({
        isProcessing: false,
        data: [
          {
            id: '1s2da231s',
            message: 'First comment',
          },
        ],
      }, {
        type: types.ADD_COMMENT_SUCCESS,
        payload: {
          id: '2hs61o231',
          message: 'Second comment',
        },
      }),
    ).toEqual({
      isProcessing: false,
      data: [
        {
          id: '1s2da231s',
          message: 'First comment',
        },
        {
          id: '2hs61o231',
          message: 'Second comment',
        },
      ],
    });
  });

  it('should handle ADD_COMMENT_FAILURE', () => {
    expect(
      reducer({
        data: [],
        isProcessing: true,
      }, {
        type: types.ADD_COMMENT_FAILURE,
      }),
    ).toEqual({
      data: [],
      isProcessing: false,
    });
  });

});
