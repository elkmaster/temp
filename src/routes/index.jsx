import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DefaultRoute from '../routes/DefaultRoute';

import Home from '../containers/Home';
import Comments from '../containers/Comments';
import NotFoundPage from '../components/NotFound';

const Router = () => (
  <div>
    <Switch>
      <DefaultRoute exact path="/" component={Home} />
      <DefaultRoute path="/comments" component={Comments} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default Router;
