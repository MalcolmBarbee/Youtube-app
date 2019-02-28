import React, { Component } from "react";
import { Link } from 'react-router-dom';

const FeedCard = (props) => {
    console.log(props)
    return(
        <>
            {/* <img src={props.image} alt= '' /> */}
            <Link to={`/video/${props.id}`} ><img src={props.image} alt= '' /></Link>
            <p>{props.title}</p>
            <p>{props.channel}</p>
            <p>{props.time}</p>
        
        </>
    )
}

export default FeedCard;