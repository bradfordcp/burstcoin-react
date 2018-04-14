import React from 'react';

class Navbar extends React.Component {
  render () {
    return (
      <header className="main-header">
        <a href="/" className="logo">
          <span className="logo-mini"><strong>B</strong></span>
          <span className="logo-lg"><strong>BURST</strong></span>
        </a>

        <nav className="navbar navbar-static-top">
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li><a href="#">Send BURST</a></li>
              <li><a href="#">Send Message</a></li>

              <li className="dropdown tasks-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-cog"></i></a>
                <ul className="dropdown-menu dropdown-menu-settings" role="menu">
                  <li><a href="#" className="goto-page" data-page="settings" data-i18n="settings">Settings</a></li>
                  <li><a href="#" data-toggle="modal" data-target="#token_modal" data-i18n="generate_token">Generate Token</a></li>
                  <li><a href="#" data-toggle="modal" data-target="#transaction_operations_modal" data-i18n="transaction_operations">Transaction Operations</a></li>                
                  <li><a href="#" data-toggle="modal" data-target="#reward_assignment_modal" data-i18n="reward_assignment">Reward Assignment</a></li>
                </ul>
              </li>

              <li className="dropdown tasks-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-question-circle"></i></a>
                <ul className="dropdown-menu dropdown-menu-website" role="menu">
                  <li><a role="menuitem" tabIndex="-1" href="https://www.burst-coin.org/" target="_blank" rel="noopener noreferrer">Main Website</a></li>
                  <li><a role="menuitem" tabIndex="-1" href="https://forums.getburst.net/" target="_blank" rel="noopener noreferrer" data-i18n="link.burst_forum">Burst Forums</a></li>
                  <li><a role="menuitem" tabIndex="-1" href="https://explore.burst.cryptoguru.org/" target="_blank" rel="noopener noreferrer" data-i18n="link.burst_explorer">Block Explorer</a></li>
                  <li><a role="menuitem" tabIndex="-1" href="https://burstwiki.org" target="_blank" rel="noopener noreferrer" data-i18n="link.burst_wiki">BURST Wiki</a></li>
                  <li><a role="menuitem" tabIndex="-1" href="https://nxtwiki.org/wiki/Asset_Exchange" target="_blank" rel="noopener noreferrer" data-i18n="link.asset_exchange_tutorial">Asset Exchange Tutorial</a></li>
                </ul>
              </li>

              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-power-off"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

module.exports = Navbar
