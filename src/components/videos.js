import React, {Component} from 'react'
import axios from 'axios';
import Iframe from 'react-iframe';

let VideoPlayer = ({ id }) => {
    console.log(id)
    let link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1`;
}

class Video extends Component{
    constructor(props){
    super(props)

    this.state = {
        url: this.url,
        id: this.id,
        //views
        //description
    }
}
    
    showOne = () => {
    axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
          part: 'id,snippet,statistics',
          key: 'AIzaSyDtAqZXePfycqRHFBWKigdq0MqfhQvpRjs',
          id: this.id,
        }  
      })
      .then((response) => {
        console.log(response.data)
        this.setState({video:response.data})
      })
    }

    componentDidMount(){
        this.showOne(this.props.showOne)
    }
    render(){
        return (
            VideoPlayer = ({ id }) => {
                const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1`; //origin removed
              
                return (
                  <Iframe title='yt-video' type="text/html" width="640" height="360"
                src={link} frameBorder="0"></Iframe>
                );
              }
        )
    }
}



export default Video;


//need to connect onClick to the img tag that leads to video Link
//items.id.videoId
//where I render is where the state is affected
//