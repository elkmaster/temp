import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fetchWeatherService from '../weather';

describe('Weather services', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
    mock.restore();
  });

  describe('fetchWeatherService', () => {
    it('fetchWeatherService should return weather data', async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=Cherkasy&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      mock.onGet(url).reply(200, {
        name: 'Cherkasy',
        main: {
          temp: '22',
        },
      });

      expect.assertions(1);
      await expect(fetchWeatherService()).resolves.toEqual({
          name: 'Cherkasy',
          main: {
            temp: '22',
          },
        },
      );
    });
  });
});
