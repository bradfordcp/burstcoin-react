import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

class DashboardScreen extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <section className="content-header">
            <h1>Dashboard</h1>
            <ol className="breadcrumb">
              <li className="active"><NavLink to="/dashboard"><i className="fa fa-dashboard"></i> <span>Dashboard</span></NavLink></li>
            </ol>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-green">
                  <div className="inner">
                    <h3>10&apos;000.<sub>00000000</sub></h3>
                    <p>Account Balance</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-red">
                  <div className="inner">
                    <h3>0</h3>
                    <p>Forged Balance</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-purple">
                  <div className="inner">
                    <h3>0</h3>
                    <p>Assets Owned</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-aqua">
                  <div className="inner">
                    <h3>2.2.0</h3>
                    <p>BRS Version</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Recent Transactions</h3>
                  </div>
                  <div className="box-body no-padding">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th></th>
                          <th>Amount + Fee</th>
                          <th>Account</th>
                          <th>Conf</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="confirmed">
                          <td><a href="#" data-transaction="" data-timestamp="">1/1/2018 00:00:00</a></td>
                          <td style={{"width":"5px", "paddingRight":"0"}}><i className="fa fa-plus-circle" style={{"color":"#65C62E"}}></i></td>
                          <td><span style={{"color":"#006400"}}>100.00000000</span> <span>+</span> <span>1</span></td>
                          <td><a href="#" data-user="BURST-RS-ADD-RESS" className="user-info">BURST-RS-ADD-RESS</a></td>
                          <td className="confirmations" data-confirmations="0" data-content="12 confirmations" data-container="body" data-initial="true" data-original-title="" title="" aria-describedby="popover860764">10+</td>
                        </tr>
                        <tr className="confirmed">
                        <td><a href="#" data-transaction="" data-timestamp="">1/1/2018 00:00:00</a></td>
                        <td style={{"width":"5px", "paddingRight":"0"}}><i className="fa fa-plus-circle" style={{"color":"#65C62E"}}></i></td>
                        <td><span style={{"color":"#006400"}}>100.00000000</span> <span>+</span> <span>1</span></td>
                        <td><a href="#" data-user="BURST-RS-ADD-RESS" className="user-info">BURST-RS-ADD-RESS</a></td>
                        <td className="confirmations" data-confirmations="0" data-content="12 confirmations" data-container="body" data-initial="true" data-original-title="" title="" aria-describedby="popover860764">10+</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Recent Blocks</h3>
                  </div>
                  <div className="box-body no-padding">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Height</th>
                          <th>Date</th>
                          <th>Amount + Fee</th>
                          <th># TX</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="#" data-block="1" data-blockid="" className="block" style={{"fontWeight":"bold"}}>1</a></td>
                          <td data-timestamp="">1/1/2018 00:00:00</td>
                          <td>200.00000000 + 25</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <td><a href="#" data-block="1" data-blockid="" className="block" style={{"fontWeight":"bold"}}>1</a></td>
                          <td data-timestamp="">1/1/2018 00:00:00</td>
                          <td>200.00000000 + 25</td>
                          <td>25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

module.exports = DashboardScreen
