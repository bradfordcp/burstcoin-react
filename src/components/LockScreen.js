import React from 'react';
import { Link } from "react-router-dom";

class LockScreen extends React.Component {
  render () {
    return (
      <div className="lockscreen-wrapper">
        <div className="lockscreen-logo">
          <img src="/img/burst_logo.png" alt="Burst" width="242" height="64" />
        </div>
        <form className="lockscreen-credentials">
          <div className="lockscreen-item form-group">
            <label className="sr-only" htmlFor="login_passphrase">Login Passphrase</label>
            <div className="input-group">
              <input type="password" className="form-control" placeholder="Your Passphrase" id="login_passphrase" name="login_passphrase" />

              <div className="input-group-btn">
                <button type="button" className="btn"><i className="fa fa-arrow-right text-muted"></i></button>
              </div>
            </div>
          </div>
          <div className="checkbox text-center">
            <label htmlFor="remember_password">
              <input type="checkbox" name="remember_password" id="remember_password" value="1" />
              <span data-i18n="remember_passphrase_during_session">Remember passphrase on local computer</span>
            </label>
          </div>
        </form>
        <div id="registration_link" className="text-center">
          <Link to="/register">Don&apos;t have an account? Click here to create one!</Link>
        </div>
        <div className="lockscreen-footer text-center"></div>
      </div>
    );
  }
}

module.exports = LockScreen
