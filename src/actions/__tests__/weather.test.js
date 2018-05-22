import types from '../../constants/actionTypes';
import mockStore from '../../utils/testHelpers/mockStore';
import * as actions from '../weather';

import fetchWeatherService from '../../services/weather';
jest.mock('../../services/weather');

describe('Weather actions', () => {

  it('fetchWeatherRequest should create FETCH_WEATHER_REQUEST action', () => {
    const expectedAction = { type: types.FETCH_WEATHER_REQUEST };
    expect(actions.fetchWeatherRequest()).toEqual(expectedAction);
  });

  it('fetchWeatherFailure should create FETCH_WEATHER_REQUEST action', () => {
    const err = new Error('some error');
    const expectedAction = {
      type: types.FETCH_WEATHER_FAILURE,
      payload: err,
    };

    expect(actions.fetchWeatherFailure(err)).toEqual(expectedAction);
  });

  describe('fetchWeather', () => {
    const store = mockStore({
      data: {},
      isFetching: false,
    });

    afterEach(() => {
      store.clearActions();
    });

    it('should create FETCH_WEATHER_SUCCESS action', async () => {
      fetchWeatherService.mockReturnValue(
        Promise.resolve({
          name: 'Cherkasy',
          main: {
            temp: '22',
          },
        }),
      );

      const expectedActions = [
        { type: types.FETCH_WEATHER_REQUEST },
        { type: types.FETCH_WEATHER_SUCCESS, payload: { city: 'Cherkasy', temp: '22' } },
      ];

      expect.assertions(1);
      await store.dispatch(actions.fetchWeather());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create FETCH_WEATHER_FAILURE action', async () => {
      fetchWeatherService.mockReturnValue(
        Promise.reject({
          cod: 401,
          message: 'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.',
        }),
      );

      const expectedActions = [
        { type: types.FETCH_WEATHER_REQUEST },
        {
          type: types.FETCH_WEATHER_FAILURE,
          payload: {
            cod: 401,
            message: 'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.',
          },
        },
      ];

      expect.assertions(1);
      await store.dispatch(actions.fetchWeather());
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
});
