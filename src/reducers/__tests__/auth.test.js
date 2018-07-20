import reducer from '../auth';
import types from '../../constants/actionTypes';
import mockUser from '../../mocks/user'

describe('auth reducer', () => {

  it('should return initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual({
      loggedIn: false,
      isFetching: false,
      user: {},
      error: {},
    });
  });

  it('should handle LOGIN_REQUEST', () => {
    const requestAction = { type: types.LOGIN_REQUEST };
    expect(
      reducer(undefined, requestAction),
    ).toEqual({
      loggedIn: false,
      isFetching: true,
      user: {},
      error: {},
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.LOGIN_SUCCESS,
        payload: { ...mockUser },
      }),
    ).toEqual({
      loggedIn: true,
      isFetching: false,
      user: { ...mockUser.user },
      error: {},
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    const error = new Error('some error');
    expect(
      reducer({
        loggedIn: false,
        isFetching: false,
        user: {},
        error: {},
      }, {
        type: types.LOGIN_FAILURE,
        payload: error,
      }),
    ).toEqual({
      loggedIn: false,
      isFetching: false,
      user: {},
      error: error,
    });
  });

});
