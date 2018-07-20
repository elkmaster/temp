import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import createNormalStore from '../../utils/testHelpers/normalStore';

import Cabinet from '../Cabinet';

const setup = () => {
  const store = createNormalStore();
  const wrapper = mount(
    <Provider store={store}>
      <Cabinet />
    </Provider>,
  );

  return {
    wrapper,
    store,
  };
};

describe('Cabinet Container', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper);
  });

});


