/**
 * Example HTTP request service
 */

import axios from 'axios'; // should be HTTP client wrapper instead

const fetchWeatherService = async () => {
  // load API key from .env file
  const url = `http://api.openweathermap.org/data/2.5/weather?q=Cherkasy&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};

export default fetchWeatherService;
