import React, {Component} from 'react'


const Video = (props) => {
    console.log(props)
    const id = props.match.params.id
    let link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`;
  
    return (
        <>
      <iframe title='yt-video' type="text/html" width="640" height="360"
    src={link} frameBorder="0"></iframe>
        <div>Title</div>
        <div>views</div>
        <div>Description</div>
        </>
    );
  }
  
  export default Video;