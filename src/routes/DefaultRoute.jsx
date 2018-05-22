import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const DefaultRoute = ({ component: Component, ...rest }) => (
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

DefaultRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default DefaultRoute;
