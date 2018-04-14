import React from 'react';

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
            <li>
              <a href="#"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a>
            </li>
            <li className="treeview">
              <a href="#"><i className="fa fa-briefcase"></i> <span>Transactions</span></a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o"></i> Escrows</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Subscriptions</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> ATs (Smart Contracts)</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#"><i className="fa fa-signal"></i> <span>Asset Exchange</span></a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o"></i> My Assets</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Open Orders</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Issue Asset</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Payout Dividends</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#"><i className="fa fa-money"></i> <span>Crowdfunding</span></a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o"></i> Active</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Funded</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Not Funded</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Hidden CFs</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#"><i className="fa fa-shopping-cart"></i> <span>Marketplace</span></a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o"></i> Search Marketplace</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Purchased Products</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#"><i className="fa fa-shopping-cart"></i> <span>My Store</span></a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o"></i> My Products For Sale</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> My Pending Orders</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> My Completed Orders</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i> List Products for Sale</a></li>
              </ul>
            </li>
            <li>
              <a href="#"><i className="fa fa-user"></i> <span>Contacts</span></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-envelope"></i> <span>Messages</span></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-bookmark"></i> <span>Aliases</span></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-bars"></i> <span>Blocks</span></a>
            </li>
          </ul>
        </section>
        
      </aside>
    );
  }
}

module.exports = Sidebar
