import React from 'react';
import { Provider } from 'react-redux';
import faker from 'faker';
import { mount } from 'enzyme';
import flushPromises from '../../utils/testHelpers';
import createNormalStore from '../../utils/testHelpers/normalStore';

import Comments from '../Comments';
import CommentsForm from '../../components/forms/CommentsForm';
import CommentsList from '../../components/CommentsList';

const setup = () => {
  const store = createNormalStore();
  const wrapper = mount(
    <Provider store={store}>
      <Comments />
    </Provider>,
  );

  return {
    wrapper,
    store,
    commentsForm: wrapper.find(CommentsForm),
    commentsList: wrapper.find(CommentsList),
  };
};

describe('Comments Container', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper);
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
    let commentsList;
    let store;
    let wrapper;
    const comment = faker.lorem.sentence();

    beforeEach(() => {
      ({ commentsForm, commentsList, wrapper, store } = setup());
    });

    it('should add comment', async () => {
      const textarea = commentsForm.find('textarea');
      textarea.simulate('change', { target: { value: comment } });
      commentsForm.find('form').simulate('submit');
      await flushPromises();
      wrapper.update();

      expect(wrapper.find('.comment').text()).toBe(comment);
    });

    it('should clear form', async () => {
      const textarea = commentsForm.find('textarea');
      textarea.simulate('change', { target: { value: comment } });
      commentsForm.find('form').simulate('submit');
      await flushPromises();
      wrapper.update();

      expect(textarea.text()).toBe('');
    });
  });

  describe('when textarea is empty', () => {
    let commentsForm;
    let commentsList;

    beforeEach(() => {
      ({ commentsForm, commentsList } = setup());
      commentsForm.find('form').simulate('submit');
    });

    it('should display validation error', () => {
      expect(commentsForm.find('.input-invalid').text()).toBe('This field is required');
    });

    it('should not add comment', () => {
      expect(commentsList.text()).toBe('No comments yet.');
    });
  });
});


