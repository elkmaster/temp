/**
 * Example of async redux action with a real API request
 */

import fetchWeatherService from '../services/weather';
import types from '../constants/actionTypes';

export const fetchWeatherRequest = () => ({ type: types.FETCH_WEATHER_REQUEST });

export const fetchWeatherFailure = err => ({
  type: types.FETCH_WEATHER_FAILURE,
  payload: err,
});

export const fetchWeather = () => async (dispatch) => {
  dispatch(fetchWeatherRequest());

  try {
    const { name: city, main: { temp } } = await fetchWeatherService();
    dispatch({
      type: types.FETCH_WEATHER_SUCCESS,
      payload: { city, temp },
    });
  } catch (err) {
    // ...your error handler
    dispatch(fetchWeatherFailure(err));
  }
};
