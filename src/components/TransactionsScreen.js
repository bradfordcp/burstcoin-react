import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

class TransactionsScreen extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <section className="content-header">
            <h1>Transactions</h1>
            <ol className="breadcrumb">
              <li className="active"><NavLink to="/transactions"><i className="fa fa-briefcase"></i> <span>Transactions</span></NavLink></li>
            </ol>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="box">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Transaction ID</th>
                        <th><i className="fa fa-envelope"></i></th>
                        <th>Date</th>
                        <th>Type</th>
                        <th></th>
                        <th>Amount</th>
                        <th>Fee</th>
                        <th>Account</th>
                        <th>Confirmations</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="confirmed">
                        <td><a href="#" data-transaction="">1</a></td>
                        <td>/</td>
                        <td><a href="#" data-transaction="" data-timestamp="">1/1/2018 00:00:00</a></td>
                        <td>Ordinary Payment</td>
                        <td style={{"width":"5px", "paddingRight":"0"}}><i className="fa fa-plus-circle" style={{"color":"#65C62E"}}></i></td>
                        <td><span style={{"color":"#006400"}}>100.00000000</span></td>
                        <td><span>1</span></td>
                        <td><a href="#" data-user="BURST-RS-ADD-RESS" className="user-info">BURST-RS-ADD-RESS</a></td>
                        <td className="confirmations" data-confirmations="0" data-content="12 confirmations" data-container="body" data-initial="true" data-original-title="" title="" aria-describedby="popover860764">100</td>
                      </tr>
                      <tr className="confirmed">
                        <td><a href="#" data-transaction="">1</a></td>
                        <td><i className="fa fa-envelope"></i></td>
                        <td><a href="#" data-transaction="" data-timestamp="">1/1/2018 00:00:00</a></td>
                        <td>Ordinary Payment</td>
                        <td style={{"width":"5px", "paddingRight":"0"}}><i className="fa fa-plus-circle" style={{"color":"#65C62E"}}></i></td>
                        <td><span style={{"color":"#006400"}}>100.00000000</span></td>
                        <td><span>1</span></td>
                        <td><a href="#" data-user="BURST-RS-ADD-RESS" className="user-info">BURST-RS-ADD-RESS</a></td>
                        <td className="confirmations" data-confirmations="0" data-content="12 confirmations" data-container="body" data-initial="true" data-original-title="" title="" aria-describedby="popover860764">100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

module.exports = TransactionsScreen
