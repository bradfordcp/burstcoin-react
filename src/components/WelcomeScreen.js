import React from 'react';
import { Link } from "react-router-dom";

class WelcomeScreen extends React.Component {
  render () {
    return (
      <div className="lockscreen-wrapper">
        <div className="lockscreen-logo">
          <img src="/img/burst_logo.png" alt="Burst" width="242" height="64" />
        </div>
        <div className="panel panel-default" id="welcome_panel">
          <div className="panel-heading"><span className="glyphicon glyphicon-lock"></span> <span data-i18n="welcome_to_burst">Welcome to Burst</span></div>
          <div className="panel-body">
            {/* <button className="btn btn-primary" id="registration_cancel" todo="BRS.showLoginScreen();return false;" data-i18n="returning_user_q">Returning User?</button>
            <button className="btn btn-success" id="registration_continue" todo="BRS.registerAccount();return false;" data-i18n="new_q_create_account">New? Create Your Account!</button> */}
            
            <Link to="/lock" id="registration_cancel" className="btn btn-primary">Returning User?</Link>
            <Link to="/register" id="registration_continue" className="btn btn-success">New? Create Your Account!</Link>
            <Link to="/dashboard" id="dashboard_tmp" className="btn">Dashboard</Link>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = WelcomeScreen
