import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import authService from '../auth';
import mockUser from '../../mocks/user'

describe('Auth services', () => {
  const mock = new MockAdapter(axios);

  afterAll(() => {
    mock.reset();
    mock.restore();
  });

  describe('authService', () => {
    it('login should return user data', async () => {
      const url = `${process.env.REACT_APP_API_URL}auth/login`;
      mock.onPost(url).reply(200, {...mockUser});

      expect.assertions(1);
      await expect(authService.login({
        email:'dev@test.com',
        password:'pass',
      })).resolves.toEqual({...mockUser});
    });

    it('refreshToken should return user data', async () => {
      const url = `${process.env.REACT_APP_API_URL}auth/refresh-token`;
      mock.onPost(url).reply(200, {...mockUser});

      expect.assertions(1);
      await expect(authService.refreshToken('token')).resolves.toEqual({...mockUser});
    });

    it('register should return user data', async () => {
      const url = `${process.env.REACT_APP_API_URL}auth/register`;
      mock.onPost(url).reply(200, {...mockUser});

      expect.assertions(1);
      await expect(authService.register({
        first_name: 'test',
        last_name: 'test',
        email:'dev@test.com',
        password:'pass',
      })).resolves.toEqual({...mockUser});
    });
  });
});
