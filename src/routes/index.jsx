import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';

import Home from '../containers/Home';
import Comments from '../containers/Comments';
import Login from '../containers/Login';
import Cabinet from '../containers/Cabinet';
import NotFoundPage from '../components/NotFound';

const Router = () => (
  <div>
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute path="/comments" component={Comments} />
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/cabinet" component={Cabinet} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default Router;
