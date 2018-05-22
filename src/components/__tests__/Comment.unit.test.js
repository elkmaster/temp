import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../Comment';
import faker from 'faker';

const setup = (propsOverrides) => {
  const props = Object.assign({
    comment: '',
  }, propsOverrides);

  const wrapper = shallow(<Comment {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Comment component', () => {
  describe('`comment` is defined', () => {
    it('should render correctly', () => {
      const comment = faker.lorem.sentence();
      const { wrapper } = setup({ comment });

      expect(wrapper.find('li')).toHaveLength(1);
    });
  });

  describe('`comment` is undefined', () => {
    it('should not render', () => {
      const { wrapper } = setup();
      expect(wrapper.find('li')).toHaveLength(0);
    });
  });

  it('should output a comment passed to props', () => {
    const comment = faker.lorem.sentence();
    const { wrapper } = setup({ comment });

    expect(wrapper.text()).toBe(comment);
  });
});
