import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Router from '../../routes';

describe('App component', () => {
  it('should render correctly', () => {
    shallow(<App />);
  });

  it('should render a Router', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Router)).toHaveLength(1);
  });
});
