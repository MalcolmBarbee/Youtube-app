import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from './containers/home';
import User from './containers/user';
import './App.css';
import feededitor from './containers/feededitor';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="logo">
            <h1>Pursuit Tube</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/user">User</NavLink></li>
              <li><NavLink to="/feededitor">Feed Editor</NavLink></li>
              <input type="text" className="input" placeholder="Search..." />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <button type="submit"><i className="fa fa-search"></i></button>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/user" component={User} />
              <Route path="/feededitor" component={feededitor} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

