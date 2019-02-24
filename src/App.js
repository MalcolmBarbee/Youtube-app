import React, {Component} from 'react';
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
      <Home path = '/' component = {Home}/>
      {/* <Link to='/aboutus'>Go To About Us</Link> */}
      </BrowserRouter>
    );
  }
}

const Home = () => {
  return (
    <>
    <h1> Welcome to the PursuitTube Homepage! </h1>
    </>
  )
}

export default App;
