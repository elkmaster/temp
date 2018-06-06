import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import { checkLogin } from '../../actions/auth';
import Router from '../../routes';

describe('App component', () => {
  it('should render correctly', () => {
    shallow(<App checkLogin={checkLogin}/>);
  });

  it('should render a Router', () => {
    const wrapper = shallow(<App checkLogin={checkLogin}/>);
    expect(wrapper.find(Router)).toHaveLength(1);
  });
});
