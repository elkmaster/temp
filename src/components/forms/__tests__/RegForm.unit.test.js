import React from 'react';
import { shallow,  } from 'enzyme';
import faker from 'faker';

import { RegForm } from '../RegForm';

const setup = (propsOverrides) => {
  const props = Object.assign({
      handleSubmit: jest.fn(),
    },
    propsOverrides);

  const wrapper = shallow(<RegForm {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('RegForm', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  //TODO: check if there is more optimal way to query field types????
  it('should has correct input fields', () => {
    const { wrapper } = setup();
    expect(wrapper.findWhere(n => n.props().name == 'first_name' && n.props().type == 'text')).toHaveLength(1);
    expect(wrapper.findWhere(n => n.props().name == 'last_name' && n.props().type == 'text')).toHaveLength(1);
    expect(wrapper.findWhere(n => n.props().name == 'email' && n.props().type == 'email')).toHaveLength(1);
    expect(wrapper.findWhere(n => n.props().name == 'password' && n.props().type == 'password')).toHaveLength(1);

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
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        },
      };
      wrapper.simulate('submit', payload);

      expect(props.handleSubmit).toBeCalledWith(payload);
    });
  });

});
