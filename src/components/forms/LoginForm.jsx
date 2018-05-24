import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
// TODO: validation
export const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="email"
      component="input"
      type="email"
      placeholder="email"
    />
    <Field
      name="password"
      component="input"
      type="text"
      placeholder="password"
    />
    <button type="submit">Login</button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
  touchOnBlur: false,
})(LoginForm);
