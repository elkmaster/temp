import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const PrivateRoute = ({ component: Component, ...rest, loggedIn }) => (
  loggedIn ?
    <Route
      {...rest}
      render={props => (
        <div>
          <Header />
          <Component {...props} />
          <Footer />
        </div>
    )}
    /> :
    <Redirect to={{
      pathname: '/login',
      // state: { from: location },
    }}
    />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  loggedIn: false,
};

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn });
export default connect(mapStateToProps)(PrivateRoute);
