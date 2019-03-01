import React from 'react';
import axios from 'axios'
import { Route, NavLink, withRouter } from "react-router-dom";
import Home from './containers/home';
import UserList from './components/userList';
import Search from './containers/Search';
import './App.css';
import feededitor from './containers/feededitor';
import FeedTitle from './components/feedTitle';
import Video from './components/videos'

const { API_KEY } = 'AIzaSyDtAqZXePfycqRHFBWKigdq0MqfhQvpRjs'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

class App extends React.Component {

  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=8`)
      .then(({ data }) => {
        this.setState({
          results: data.data
          
        })
        
      }) 
  }
  

  handleInputChange = (e) => {
    console.log(this.state)
    this.setState({ query: e.target.value })
  }

  handleClick = (e) => {
    this.props.history.push('search/'+ this.state.query)
  }


  render() {
    return (
        <div>
          <div className="logo">
            <h1>Pursuit Tube</h1>
            <FeedTitle />
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/user">User</NavLink></li>
              <li><NavLink to="/feededitor">Feed Editor</NavLink></li>

              <form>
                <input
                  placeholder="Search for..."
                  onChange={this.handleInputChange}
                />
                <Search results={this.state.results} />
              </form>

              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <button type="submit" onClick={this.handleClick}><i className="fa fa-search"></i></button>
            </ul>

            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/user" component={UserList} />
              <Route path="/video/:id" component={Video} />
              <Route path="/feededitor" component={feededitor} />
            </div>
          </div>
        </div>
        
    );
  }
}


export default withRouter(App);
