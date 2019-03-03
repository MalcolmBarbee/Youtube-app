import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink, Link, withRouter } from "react-router-dom";
import Home from './containers/home';
import UserList from './components/userList';
import Search from './containers/Search';
import SearchBar from './components/searchBar';
import './App.css';
import feededitor from './containers/feededitor';
import FeedTitle from './components/feedTitle';
import Video from './components/videos';

const { API_KEY } = 'AIzaSyD-J2tHP5Vho6nU-CU4s7v19uR81Ip9_FI'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

class App extends Component {
  constructor() {
    super()

    this.state = {
      query: '',
      results: []
    }
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
    this.setState({ query: e.target.value })
  }

  handleClick = (e) => {
    this.props.history.push('search/' + this.state.query)
  }

  onSearchChange = (e) => {
    this.setState({ query: e.target.value })
  }


  render() {
    console.log(this.state);
    
    const filteredResults = this.state.results.filter(results => {
      return results.name.toLowerCase().includes(this.state.query.toLowerCase());



    })


    return (
      <div className="logo">
        <h1>Pursuit Tube</h1>
        <SearchBar searchChange={this.onSearchChange}/>
        
        
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button type="submit" onClick={this.handleClick}><i className="fa fa-search"></i></button>
      

        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/user">User</NavLink></li>
          <li><NavLink to="/feededitor">Feed Editor</NavLink></li>
        </ul>

        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/user" component={UserList} />
          <Route path="/videos/:id" component={Video} />
          <Route path="/feededitor" component={feededitor} />
          <Route path="/search/:search_query" component={Search} />
        </div>

      </div>
    )
  }
}

export default withRouter(App);