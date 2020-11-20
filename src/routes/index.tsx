import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';

import ListItem from '../pages/ListItem';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/ListItem" component={ListItem} />
    </Switch>
  );
};

export default Routes;
