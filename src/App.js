import React, {Component} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Link} from 'react-router-dom';



const search = (search_q) => {
axios({
  method: 'get',
  url: 'https://www.googleapis.com/youtube/v3/search',
  params: {
    part: 'snippet',
    maxResults: 8,
    videoDefinition: 'high',
    type: 'video',
    videoEmbeddable: 'true',
    key: 'AIzaSyDtAqZXePfycqRHFBWKigdq0MqfhQvpRjs',
    q: 'search_q',
    pageToken: ''
  }
})
.then((data) => {
  console.log(data)
})
}



class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
      <Home path = '/' component = {Home}/>
       {/* <Link to='/aboutus'>Go To About Us</Link>  */}
      </BrowserRouter>
    );
  }
  componentDidMount (){
    search('puppies')
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
