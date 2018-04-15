import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';

class SidebarLink extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    to: PropTypes.string.isRequired,
    linkText: PropTypes.object.isRequired,
    linkChildren: PropTypes.object.isRequired,
    exact: PropTypes.bool
  }

  static defaultProps = {
    linkText: <React.Fragment/>,
    linkChildren: <React.Fragment/>,
    exact: false
  }

  render () {
    if (this.props.linkChildren.props.children && this.props.linkChildren.props.children.length > 0) {
      const childTree = (
        <ul className="treeview-menu">
          {this.props.linkChildren}
        </ul>
      );

      return (
        <Route 
          path={this.props.to} 
          exact={this.props.exact}>
          {({ match }) => (
            <li className={match ? "active treeview" : "treeview"}>
              <NavLink to={this.props.to}>{this.props.linkText}</NavLink>
              {childTree}
            </li>
          )}
        </Route>
      );
    } else {
      return (
        <Route 
          path={this.props.to} 
          exact={this.props.exact}>
          {({ match }) => (
            <li className={match ? "active" : ""}>
              <NavLink to={this.props.to}>{this.props.linkText}</NavLink>
            </li>
          )}
        </Route>
      );
    }
  }
}

module.exports = SidebarLink;
