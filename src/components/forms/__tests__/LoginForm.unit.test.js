import React from 'react';
import { shallow,  } from 'enzyme';
import faker from 'faker';

import { LoginForm } from '../LoginForm';

const setup = (propsOverrides) => {
  const props = Object.assign({
      handleSubmit: jest.fn(),
    },
    propsOverrides);

  const wrapper = shallow(<LoginForm {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('LoginForm', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  //TODO: check if there is more optimal way to query field types????
  it('should has correct input fields', () => {
    const { wrapper } = setup();
    expect(wrapper.findWhere(n => n.props().type == 'email')).toHaveLength(1);
    expect(wrapper.findWhere(n => n.props().type == 'password')).toHaveLength(1);
  });

  describe('form submit', () => {
    it('should call handleSubmit on submit', () => {
      const { wrapper, props } = setup();
      wrapper.simulate('submit');
      expect(props.handleSubmit).toBeCalled();
    });

    it('should call handleSubmit with correct params', () => {
      const { wrapper, props } = setup();
      const payload = {
        values: {
          email: faker.internet.email(),
          password: faker.internet.password(),
        },
      };
      wrapper.simulate('submit', payload);

      expect(props.handleSubmit).toBeCalledWith(payload);
    });
  });

});
