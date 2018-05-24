import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
// TODO: validation
export const RegForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="first_name"
      component="input"
      type="text"
      placeholder="First name"
    />
    <Field
      name="last_name"
      component="input"
      type="text"
      placeholder="Last name"
    />
    <Field
      name="email"
      component="input"
      type="email"
      placeholder="email"
    />
    <Field
      name="password"
      component="input"
      type="password"
      placeholder="pass"
    />
    <button type="submit">Sign Up</button>
  </form>
);

RegForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'regForm', // a unique identifier for this form
  touchOnBlur: false,
})(RegForm);
