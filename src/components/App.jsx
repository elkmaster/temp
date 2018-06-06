import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Router from '../routes';
import { checkLogin } from '../actions/auth';
import '../styles/global.css';

export class App extends Component {
  static propTypes = {
    checkLogin: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.checkLogin();
  }
  render() {
    return (<Router />);
  }
}

// withRouter is dirty fix, find another solution
export default withRouter(connect(null, { checkLogin })(App));
