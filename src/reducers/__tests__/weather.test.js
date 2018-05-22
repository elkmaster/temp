import reducer from '../weather';
import types from '../../constants/actionTypes';

describe('weather reducer', () => {

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})).toEqual({
      data: {},
      isFetching: false,
    });
  });

  it('should handle FETCH_WEATHER_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_WEATHER_REQUEST,
      })).toEqual({
      data: {},
      isFetching: true,
    });
  });

  it('should handle FETCH_WEATHER_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_WEATHER_SUCCESS,
        payload: {
          city: 'Amsterdam',
          temp: '40.2',
        },
      })).toEqual({
      isFetching: false,
      data: {
        city: 'Amsterdam',
        temp: '40.2',
      },
    });

    expect(reducer({
      isFetching: false,
      data: {
        city: 'Amsterdam',
        temp: '40.2',
      },
    }, {
      type: types.FETCH_WEATHER_SUCCESS,
      payload: {
        city: 'Cherkasy',
        temp: '22.2',
      },
    })).toEqual({
      isFetching: false,
      data: {
        city: 'Cherkasy',
        temp: '22.2',
      },
    });
  });

  it('should handle FETCH_WEATHER_FAILURE', () => {
    expect(
      reducer({
        data: {},
        isFetching: true,
      }, {
        type: types.FETCH_WEATHER_FAILURE,
      }),
    ).toEqual({
      data: {},
      isFetching: false,
    });
  });

});
