import React from 'react';
// import PropTypes from 'prop-types';

class LockScreen extends React.Component {
  
  // static get propTypes() { 
  //   return {}; 
  // }


  render () {
    return (
      <div className="lockscreen-wrapper">
        <div className="lockscreen-logo">
          <img src="/img/burst_logo.png" alt="Burst" width="242" height="64" />
        </div>
        <div className="lockscreen-item">
          <form className="lockscreen-credentials">
            <div className="input-group">
              <input type="password" className="form-control" placeholder="Your Passphrase" />

              <div className="input-group-btn">
                <button type="button" className="btn"><i className="fa fa-arrow-right text-muted"></i></button>
              </div>
            </div>
            {/* <div>
              <input type="checkbox" name="remember_password" id="remember_password" value="1" /> <label for="remember_password" data-i18n="remember_passphrase_during_session">Remember passphrase on local computer</label>
            </div> */}
          </form>
        </div>
        <div className="help-block text-center">
          Enter your password to retrieve your session
        </div>
        <div className="text-center">
          <a href="login.html">Or sign in as a different user</a>
        </div>
        <div className="lockscreen-footer text-center"></div>
      </div>
    );
  }
}

module.exports = LockScreen
