import React from 'react';
import {MemoryRouter, Redirect} from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockStore from '../../utils/testHelpers/mockStore';
import PrivateRoute from '../PrivateRoute';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';


const setup = (loggedIn, propsOverrides) => {


  const store = mockStore({
    auth: {loggedIn}
  });


  const props = Object.assign({
      component: jest.fn(() => <p>Hello World</p>),
    },
    propsOverrides);

  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <PrivateRoute {...props} />
      </Provider>
    </MemoryRouter>,
  );

  return {
    props,
    wrapper,
  };
};

describe('PublicRoute component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup(true));
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

describe('PublicRoute component not logged in user', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup(false));
  });


  it('should redirect', () => {
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });

});
