import React from 'react';
import { mount } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import flushPromises from '../../utils/testHelpers';
import createNormalStore from '../../utils/testHelpers/normalStore';

import Home from '../Home';
import axios from 'axios/index';

const mock = new MockAdapter(axios);

const setup = () => {
  const store = createNormalStore();
  const wrapper = mount(
    <Home store={store} />,
  );

  return {
    wrapper,
    store,
  };
};

describe('Home container', () => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=Cherkasy&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  mock.onGet(url).reply(200, {
    name: 'Cherkasy',
    main: {
      temp: 22,
    },
  });

  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call `componentDidMount` once', () => {
    const spy = jest.spyOn(Home.prototype, 'componentDidMount');
    setup();
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  it('should fetch data on mount', async () => {
    const { store } = setup();
    await flushPromises();
    expect(store.getState().weather.data).toEqual({
      city: 'Cherkasy',
      temp: 22,
    });
  });

  it('should display fetched data', async () => {
    const { wrapper } = setup();
    await flushPromises();
    wrapper.update();
    expect(wrapper.find('.temp').text()).toBe('22');
    expect(wrapper.find('.city').text()).toBe('Cherkasy');
  });
});


