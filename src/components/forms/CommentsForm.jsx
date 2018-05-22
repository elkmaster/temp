import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Textarea from './elements/Textarea';

export const CommentsForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="comment"
      component={Textarea}
      placeholder="Enter some comment"
    />
    <button type="submit">Add comment</button>
  </form>
);

CommentsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const validate = ({ comment }) => {
  const errors = {};
  if (!comment) {
    errors.comment = 'This field is required';
  }
  return errors;
};

export default reduxForm({
  form: 'commentsForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  touchOnBlur: false,
})(CommentsForm);
