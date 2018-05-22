import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { generateList } from '../../utils/testHelpers/dataGenerators';

import { Comments } from '../Comments';
import CommentsForm from '../../components/forms/CommentsForm';
import CommentsList from '../../components/CommentsList';

const setup = (propsOverrides) => {
  const comments = {
    data: generateList({
      id: faker.random.uuid(),
      message: faker.lorem.sentence(),
    }, 2),
  };

  const props = Object.assign({
    comments,
    addComment: jest.fn(),
    reset: jest.fn(),
  }, propsOverrides);
  const wrapper = shallow(<Comments {...props} />);

  return {
    wrapper,
    props,
    commentsForm: wrapper.find(CommentsForm),
    commentsList: wrapper.find(CommentsList),
  };
};

describe('Comments component', () => {
  it('should render a div container', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.container')).toHaveLength(1);
  });

  it('should render two text paragraphs', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.description')).toHaveLength(2);
  });

  it('should render CommentsForm', () => {
    const { commentsForm } = setup();
    expect(commentsForm).toHaveLength(1);
  });

  it('should render CommentsList', () => {
    const { commentsList } = setup();
    expect(commentsList.prop('comments')).toBeDefined();
  });

  describe('when CommentsForm submitted', () => {
    let commentsForm;
    let props;
    let onSubmit;
    const comment = faker.lorem.sentence();

    beforeEach(async () => {
      ({ commentsForm, props } = setup());
      onSubmit = commentsForm.prop('onSubmit');
      await onSubmit({ comment });
    });

    it('should call addComment', () => {
      expect(props.addComment).toBeCalledWith(comment);
    });

    it('should call reset', () => {
      expect(props.reset).toBeCalledWith('commentsForm');
    });
  });
});


