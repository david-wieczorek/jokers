import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo_jokers_header.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo home">
          <NavLink exact to="/" activeClassName="active">
            <img className="welcome-logo" src={logo} alt="Jokers D4" />
          </NavLink>&
        </div>
        <nav>
          <ul className="nav nav-vertical">
            <li>
              <NavLink to="/graphs" activeClassName="active">
                graphs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
