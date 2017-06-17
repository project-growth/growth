import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './screens/App';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';

export default () => (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} />
  </Route>
  );
