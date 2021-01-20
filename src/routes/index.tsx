import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/forgot-password" component={ForgotPassword} />

    <Route exact path="/profile" component={Profile} isPrivate />
    <Route exact path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
