import React from 'react';
import Router from '../index';
import { shallow } from 'enzyme';

describe('Router component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Router />);
    expect(wrapper).toMatchSnapshot();
  });
});
