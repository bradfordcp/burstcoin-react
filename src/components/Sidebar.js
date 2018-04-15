import React from 'react';
import SidebarLink from './SidebarLink';

class Sidebar extends React.Component {
  render () {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div>
              <a href="#" id="account_name" data-toggle="modal" data-target="#account_info_modal">ACCOUNT NAME</a>
            </div>
            <div>
              <div id="account_id_dropdown" className="dropdown">
                <span id="account_id" className="dropdown-toggle" data-toggle="dropdown" data-type="account_id">BURST-RS-ADD-RESS</span>
                <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                  <li role="presentation"><a className="copy_link" role="menuitem" tabIndex="-1" href="#" data-type="account_rs" data-i18n="copy_account_id">Copy Account ID</a></li>
                  <li role="presentation"><a className="copy_link" role="menuitem" tabIndex="-1" href="#" data-type="account_id">Copy Numeric Account ID</a></li>
                </ul>
              </div>
            </div>
          </div>

          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search by ID" />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
          
          <ul className="sidebar-menu" data-widget="tree">
            <SidebarLink to="/dashboard" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                </React.Fragment>
              )} />

            <SidebarLink 
              to="/transactions" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-briefcase"></i> <span>Transactions</span><span className="pull-right-container"><i className="fa fa-angle-left pull-right"></i></span>
                </React.Fragment>
              )} 
              linkChildren={(
                <React.Fragment>
                  <SidebarLink to="/transactions/escrows" linkText={(<React.Fragment><i className="fa fa-angle-double-right"></i> Escrows</React.Fragment>)} />
                  <SidebarLink to="/transactions/subscriptions" linkText={(<React.Fragment><i className="fa fa-angle-double-right"></i> Subscriptions</React.Fragment>)} />
                  <SidebarLink to="/transactions/ats" linkText={(<React.Fragment><i className="fa fa-angle-double-right"></i> ATs (Smart Contracts)</React.Fragment>)} />
                </React.Fragment>
              )} />
            
            <SidebarLink 
              to="/assets" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-signal"></i> <span>Asset Exchange</span><span className="pull-right-container"><i className="fa fa-angle-left pull-right"></i></span>
                </React.Fragment>
              )} 
              linkChildren={(
                <React.Fragment>
                  <SidebarLink to="/assets/mine" linkText={(<React.Fragment><i className="fa fa-angle-double-right"></i> My Assets</React.Fragment>)} />
                  <SidebarLink to="/assets/open" linkText={(<React.Fragment><i className="fa fa-angle-double-right"></i> Open Orders</React.Fragment>)} />
                  <SidebarLink to="/assets/issue" linkText={(<React.Fragment><i className="fa fa-angle-double-right"></i> Issue Asset</React.Fragment>)} />
                  <SidebarLink to="/assets/dividends" linkText={(<React.Fragment><i className="fa fa-angle-double-right"></i> Payout Dividends</React.Fragment>)} />
                </React.Fragment>
              )} />
            
            <SidebarLink 
              to="/crowdfunding" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-money"></i> <span>Crowdfunding</span><span className="pull-right-container"><i className="fa fa-angle-left pull-right"></i></span>
                </React.Fragment>
              )} 
              linkChildren={(
                <React.Fragment>
                  <SidebarLink to="/crowdfunding/active" linkText={(<React.Fragment><i className="glyphicon glyphicon-flash"></i> Active</React.Fragment>)} />
                  <SidebarLink to="/crowdfunding/funded" linkText={(<React.Fragment><i className="glyphicon glyphicon-ok-circle"></i> Funded</React.Fragment>)} />
                  <SidebarLink to="/crowdfunding/not_funded" linkText={(<React.Fragment><i className="glyphicon glyphicon-remove-circle"></i> Not Funded</React.Fragment>)} />
                  <SidebarLink to="/crowdfunding/hidden" linkText={(<React.Fragment><i className="fa fa-angle-double-right"></i> Hidden CFs</React.Fragment>)} />
                </React.Fragment>
              )} />
            
            <SidebarLink 
              to="/marketplace" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-shopping-cart"></i> <span>Marketplace</span><span className="pull-right-container"><i className="fa fa-angle-left pull-right"></i></span>
                </React.Fragment>
              )} 
              linkChildren={(
                <React.Fragment>
                  <SidebarLink to="/marketplace/search" linkText={(<React.Fragment><i className="fa fa-circle-o"></i> Search Marketplace</React.Fragment>)} />
                  <SidebarLink to="/marketplace/purchased" linkText={(<React.Fragment><i className="fa fa-circle-o"></i> Purchased Products</React.Fragment>)} />
                </React.Fragment>
              )} />
            
            <SidebarLink 
              to="/marketplace" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-shopping-cart"></i> <span>My Store</span><span className="pull-right-container"><i className="fa fa-angle-left pull-right"></i></span>
                </React.Fragment>
              )} 
              linkChildren={(
                <React.Fragment>
                  <SidebarLink to="/my_store/products/mine" linkText={(<React.Fragment><i className="fa fa-circle-o"></i> My Products for Sale</React.Fragment>)} />
                  <SidebarLink to="/my_store/orders/pending" linkText={(<React.Fragment><i className="fa fa-circle-o"></i> My Pending Orders</React.Fragment>)} />
                  <SidebarLink to="/my_store/orders/completed" linkText={(<React.Fragment><i className="fa fa-circle-o"></i> My Completed Orders</React.Fragment>)} />
                  <SidebarLink to="/my_store/products/list" linkText={(<React.Fragment><i className="fa fa-circle-o"></i> List Products for Sale</React.Fragment>)} />
                </React.Fragment>
              )} />
            
            <SidebarLink to="/contacts" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-user"></i> <span>Contacts</span>
                </React.Fragment>
              )} />
            
            <SidebarLink to="/messages" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-envelope"></i> <span>Messages</span>
                </React.Fragment>
              )} />
            
            <SidebarLink to="/aliases" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-bookmark"></i> <span>Aliases</span>
                </React.Fragment>
              )} />
            
            <SidebarLink to="/blocks" 
              linkText={(
                <React.Fragment>
                  <i className="fa fa-bars"></i> <span>Blocks</span>
                </React.Fragment>
              )} />
          </ul>
        </section>
        
      </aside>
    );
  }
}

module.exports = Sidebar
