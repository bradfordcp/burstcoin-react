import React from 'react';

class RegistrationScreen extends React.Component {
  render () {
    return (
      <div className="lockscreen-wrapper">
        <div className="lockscreen-logo">
          <img src="/img/burst_logo.png" alt="Burst" width="242" height="64" />
        </div>
        <div id="" className="panel panel-default">
          <div className="panel-heading"><span className="glyphicon glyphicon-lock"></span> Create Your Account</div>
          <div className="panel-body">
            <form className="form-horizontal" role="form" method="post" autoComplete="off">
              <div className="callout callout-info" data-i18n="passphrase_length_warning">Your passphrase must be at least 35 characters long. Better over 40 characters!</div>
              <div className="callout callout-danger" data-i18n="[html]passphrase_warning"><strong>Attention</strong>: The passphrase is everything that stands between your account and the rest of the world. Do not use any meaningful sentence, especially any that appears in song or literature.<br /><br />Don&apos;t ever disclose your passphrase. If you lose it you lose access to your account! Write it on Paper!!</div>
              <div className="form-group">
                <label htmlFor="registration_password" className="col-sm-3 control-label" data-i18n="passphrase">Passphrase</label>
                <div className="col-sm-9"><input type="password" name="registration_password" className="form-control" id="registration_password" placeholder="" autoComplete="" /></div>
              </div>
              <div className="form-group">
                <label htmlFor="registration_password_repeat" className="col-sm-3 control-label" data-i18n="repeat">Repeat</label>
                <div className="col-sm-9"><input type="password" name="registration_password_repeat" className="form-control" id="registration_password_repeat" placeholder="" autoComplete="" /></div>
              </div>
              <div styletodo="text-align:right"><input type="submit" className="btn btn-primary btn-sm" value="Register" data-i18n="[value]register" />&nbsp;&nbsp;<button className="btn btn-sm btn-default" id="registration_cancel" todo="BRS.showLoginOrWelcomeScreen();return false;" data-i18n="cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
        <div id="" className="panel panel-default">
          <div className="panel-heading"><span className="glyphicon glyphicon-lock"></span> Create Your Account</div>
          <div className="panel-body">
            <div id="account_phrase_generator_loading">
              <p><span className="loading_text" data-i18n="loading_word_list">Loading Word List</span><span className="loading_dots"><span>.</span><span>.</span><span>.</span></span></p>
              <div styletodo="text-align:center;margin-top:20px;margin-bottom:20px;"><img src="img/loading_indicator.gif" alt="Loading..." width="32" height="32" /></div>
            </div>
            <div id="account_phrase_generator_loaded">
              <div className="step_1 account_phrase_generator_steps">
                <div id="account_phrase_generator_seeder" className="seeder">
                  <p data-i18n="seed_password_generator">Move your cursor around to seed the random number generator...</p>
                  <div className="progress progress-striped">
                    <div className="progress-bar progress-bar-info" id="account_phrase_generator_seed_progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" styletodo="width: 0%;">
                      <span className="sr-only">0% Seeded</span>
                    </div>
                  </div>
                </div>
                <div styletodo="text-align:right">
                  <button className="btn btn-sm btn-default" id="registration_cancel" todo="BRS.showLoginOrWelcomeScreen();return false;" data-i18n="cancel">Cancel</button>
                </div>
              </div>
              <div className="step_2 account_phrase_generator_steps">
                <div id="account_phrase_generator_start">
                  <p><span data-i18n="generating_passphrase_wait">Generating your passphrase. Please wait</span><span className="loading_dots"><span>.</span><span>.</span><span>.</span></span></p>
                  <div styletodo="text-align:center;margin-top:20px;margin-bottom:20px;"><img src="img/loading_indicator.gif" alt="Loading..." width="32" height="32" /></div>
                </div>
                <div id="account_phrase_generator_stop" styletodo="display:none">
                  <p data-i18n="automatically_generated_passphrase_is">Your automatically generated passphrase is:</p>
                  <textarea styletodo="width:100%;height:50px;margin-bottom:10px;padding:3px;" rows="2" readOnly></textarea>
                  <p data-i18n="memorize_passphrase_help">Please WRITE DOWN(on paper!) or memorize these 12 words (their order and capitalization matters - always lowercase). This passphrase is needed in order to access your Burst account. Write it down on Paper!</p>
                  <div className="callout callout-danger" data-i18n="[html]assphrase_disclosure_warning"><strong>Attention</strong>: Don&apos;t ever disclose your passphrase. If you lose it you lose access to your account!</div>
                  <div styletodo="text-align:right">
                    <input type="submit" className="btn btn-primary btn-sm" value="Next" data-i18n="[value]next" todo="$('.step_2').hide();$('.step_3').show();return false;" />&nbsp;&nbsp;<button className="btn btn-sm btn-default" id="registration_cancel" todo="BRS.showLoginOrWelcomeScreen();return false;" data-i18n="cancel">Cancel</button>
                  </div>
                </div>
              </div>
              <div className="step_3 account_phrase_generator_steps">
                <p data-i18n="passphrase_write_below">Your passphrase is very important! In order to be sure that you have saved it, please write your passphrase below:</p>
                <div className="callout callout-danger" styletodo="display:none" data-i18n="incorrectly_typed_passphrase">You have not typed the passphrase correctly, please try again!</div>
                <textarea styletodo="width:100%;height:50px;margin-bottom:10px;" rows="2"></textarea>
                <div styletodo="text-align:right">
                  <input type="submit" className="btn btn-primary btn-sm" value="Next" data-i18n="[value]next" todo="BRS.verifyGeneratedPassphrase();return false;" />&nbsp;&nbsp;<button className="btn btn-sm btn-default" id="registration_cancel" todo="BRS.showLoginOrWelcomeScreen();return false;" data-i18n="cancel">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = RegistrationScreen
