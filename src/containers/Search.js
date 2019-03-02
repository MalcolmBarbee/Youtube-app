import React,{Component} from 'react'
import axios from 'axios'


class Search extends Component{
  constructor(props){
    super(props)
    this.state = {videos:[]}
  }

  axioscall = (query) =>{
    console.log(query)
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
        q: query,
        pageToken: ''
      }
    })
      .then(response=>{
        console.log('hi')
        //console.log(response.data.items)
        let arr = response.data.items

        const stateArr = this.state.videos // []
        for(let i=0; i <= arr.length; i++){
          let temp = {}
          temp.videoId = arr[i].id.videoId //video id
          temp.url = arr[i].snippet.thumbnails.medium.url
          console.log(arr[i].id.videoId)
          console.log(arr[i].snippet.thumbnails.medium.url)
          console.log(arr[i])
          
          stateArr.push(temp)   
          /*  
          stateArr = [
            {
              videoId: fjflsa,
              url: jfaslkjflaksjfl
            },
            {
               videoId: fjflsa,
              url: jfaslkjflaksjfl
            }
          ]
          */
        }
        this.setState({videos:stateArr})

      })
  
  }

  componentDidMount(){
    this.axioscall(this.props.results)
  }
  
  

  render(){
    return <h2 style={{color:'white'}}>Hey it worked</h2>
    // <ul>
    // this.props.results.map(r => (
    //   <li key={r.id}>
    //     {r.name}
    //   </li>
    // ))
    // </ul>
  }
}


export default Search;