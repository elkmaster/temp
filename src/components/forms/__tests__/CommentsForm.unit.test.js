import React from 'react';
import { shallow,  } from 'enzyme';
import faker from 'faker';

import { CommentsForm } from '../CommentsForm';
import Textarea from '../elements/Textarea';

const setup = (propsOverrides) => {
  const props = Object.assign({
      handleSubmit: jest.fn(),
    },
    propsOverrides);

  const wrapper = shallow(<CommentsForm {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CommentsForm', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should has correct input component', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Field').prop('component')).toBe(Textarea);
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
          comment: faker.lorem.sentence(),
        },
      };
      wrapper.simulate('submit', payload);

      expect(props.handleSubmit).toBeCalledWith(payload);
    });
  });

});
