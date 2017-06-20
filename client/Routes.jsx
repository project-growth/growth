import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';

export default () => (
  <Router>
    <div>
      <Route path="/" component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
  );
