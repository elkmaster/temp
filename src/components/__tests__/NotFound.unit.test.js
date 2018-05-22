import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';

describe('NotFoundPage component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot()
  });
});

