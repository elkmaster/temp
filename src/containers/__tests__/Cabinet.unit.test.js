import React from 'react';
import { shallow } from 'enzyme';

import { Cabinet } from '../Cabinet';

const setup = (propsOverrides) => {
  const props = Object.assign({
    auth:{loggedIn: true}
  }, propsOverrides);
  const wrapper = shallow(<Cabinet {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Cabinet component', () => {
  it('should render a div container', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.container')).toHaveLength(1);
  });
});


