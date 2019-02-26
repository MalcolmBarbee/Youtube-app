import React, {Component} from 'react';
import Axios, from 'axios';
import '../components/feedcard';

class Feed extends Component {
    constructor (props) {
        super(props)

        this.state={
            videos: []
        }
    }

    search = (search_q) => {
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
            q: search_q,
            pageToken: ''
          }
        })
          .then((response) => {
            console.log(response.data)
            this.setState({videos: response.data.items})
          })
      }
      componentDidMount() {
        this.search('Oscars')
    }
    render () {
        console.log(this.state)
        return(
            <>
            <h4>ESPN</h4>
            <div className='row'>
            {
                this.state.videos.map((video,i) => {
                    return <div className='col-3'><FeedCard image={video.snippet.thumbnails.medium.url} title={video.snippet.title} channel={video.snippet.channelTitle} time={video.snippet.publishedAt}/></div>
                })
            }
                
            </div>

            </>
        )
    }
}

export default Feed;