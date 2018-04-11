require('jquery/dist/jquery.min.js');

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

require('font-awesome/css/font-awesome.min.css');

require('admin-lte/dist/css/AdminLTE.min.css');
require('admin-lte/dist/js/adminlte.min.js');

require('./css/main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import LockScreen from './components/LockScreen';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={LockScreen}/>
  </Router>
  ,
  document.getElementById('app')
);

module.hot.accept();
