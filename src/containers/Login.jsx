import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reset } from 'redux-form';
import { Redirect } from 'react-router-dom';

import '../styles/components/home.css';

import RegForm from '../components/forms/RegForm';
import LoginForm from '../components/forms/LoginForm';

import { login, register } from '../actions/auth';

export class Login extends Component {

  submitRegForm = async (form) => {
    const { register, reset } = this.props;
    await register(form);
    reset('regForm');
  };

  submitLogin = async (form) => {
    const { login, reset } = this.props;
    await login(form);
    reset('loginForm');
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { loggedIn } = this.props.auth;

    if (loggedIn === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container">
        <p>Login or Register</p>
        <RegForm onSubmit={this.submitRegForm} />
        <LoginForm onSubmit={this.submitLogin} />
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps, { login, register, reset })(Login);
