import React from 'react';
import { shallow } from 'enzyme';
import { generateList } from '../../utils/testHelpers/dataGenerators';
import faker from 'faker';
import CommentsList from '../CommentsList';
import Comment from '../Comment';

const setup = (propsOverrides) => {
  const comments = generateList({
    id: faker.random.uuid(),
    message: faker.lorem.sentence(),
  }, 2);
  const props = Object.assign({
    comments,
  }, propsOverrides);
  const wrapper = shallow(<CommentsList {...props} />);

  return {
    props,
    wrapper,
    comment: wrapper.find(Comment).first(),
  };
};

describe('CommentsList component', () => {
  let wrapper;
  let comment;

  beforeEach(() => {
    wrapper = setup().wrapper;
    comment = setup().comment;
  });

  it('should render a div container', () => {
    expect(wrapper.find('.comments-list')).toHaveLength(1);
  });

  it('should render a list label', () => {
    expect(wrapper.find('.list-label')).toHaveLength(1);
  });

  it('should render a comments list', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  describe('rendered comments list', () => {
    it('should render a `Comment` items', () => {
      expect(wrapper.find(Comment)).toHaveLength(2);
    });

    it('should pass a `comment` prop to list item', () => {
      expect(comment.prop('comment')).toBeDefined();
    });
  });

  describe('when comment is undefined', () => {
    it('should output `no comments` message', () => {
      const { wrapper } = setup({ comments: [] });
      expect(wrapper.text()).toBe('No comments yet.');
    });
  });

});
