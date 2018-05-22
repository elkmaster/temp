import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import DefaultRoute from '../DefaultRoute';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const setup = (propsOverrides) => {
  const props = Object.assign({
      component: jest.fn(() => <p>Hello World</p>),
    },
    propsOverrides);

  const wrapper = mount(
    <MemoryRouter>
      <DefaultRoute {...props} />
    </MemoryRouter>,
  );

  return {
    props,
    wrapper,
  };
};

describe('DefaultRoute component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('should render container', () => {
    expect(wrapper.find('div').first()).toHaveLength(1);
  });

  it('should render header', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render passed Component', () => {
    expect(wrapper.find(props.component)).toHaveLength(1);
  });

  it('should render footer', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

});
