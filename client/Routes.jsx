import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => (
  <Router>
    <div>
      <Route exact path="/" />
    </div>
  </Router>
);
