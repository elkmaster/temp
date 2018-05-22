import React from 'react';
import { shallow } from 'enzyme';
import Textarea from '../elements/Textarea';

const setup = (propsOverrides) => {
  const props = Object.assign({
      input: {},
      meta: {
        touched: false,
        error: '',
      },
    },
    propsOverrides);

  const wrapper = shallow(<Textarea {...props} />);

  return {
    props,
    wrapper,
    validationMessage: wrapper.find('.input-invalid'),
  };
};

describe('Textarea', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('validation', () => {
    it('should display validation error when touched', () => {
      const { validationMessage } = setup({
        meta: {
          touched: true,
          error: 'Validation error',
        },
      });

      expect(validationMessage.text()).toBe('Validation error');
    });

    it('should not display validation error when untouched', () => {
      const { validationMessage } = setup({
        meta: {
          touched: false,
          error: 'Validation error',
        },
      });

      expect(validationMessage.text()).toBe('');
    });
  });
});
