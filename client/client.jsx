import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import Routes from './Routes';

// const history = syncHistoryWithStore(browserHistory);
// require stylesheets for webpack
require('../public/style/css/style.css');
require('../public/style/sass/style.scss');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>, document.getElementById('app'),
);
