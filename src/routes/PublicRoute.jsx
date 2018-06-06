import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div>
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    )}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
