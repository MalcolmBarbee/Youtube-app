import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './Header.css';
import Home from './containers/home';
import User from './containers/user';
import feededitor from './containers/feededitor';

class Header extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Pursuit Tube</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/feededitor">Feed Editor</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/feededitor" component={feededitor} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Header;