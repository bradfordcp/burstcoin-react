require('jquery/dist/jquery.min.js');

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

require('ionicons/dist/css/ionicons.min.css');

require('font-awesome/css/font-awesome.min.css');

require('admin-lte/dist/css/AdminLTE.min.css');
require('admin-lte/dist/css/skins/skin-black.min.css');
require('admin-lte/dist/js/adminlte.min.js');

require('./css/main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import WelcomeScreen from './components/WelcomeScreen';
import LockScreen from './components/LockScreen';
import RegistrationScreen from './components/RegistrationScreen';
import DashboardScreen from './components/DashboardScreen';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomeScreen} />
      <Route exact path="/lock" component={LockScreen} />
      <Route exact path="/register" component={RegistrationScreen} />
      <Route exact path="/dashboard" component={DashboardScreen} />
    </Switch>
  </Router>
  ,
  document.getElementById('app')
);

module.hot.accept();
