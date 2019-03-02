import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './feedcard.css';

const FeedCard = (props) => {
    return (
        <>
        <div className='cards grow'>
            <div className="card__info">
            <Link to={`/video/${props.id}`} ><img src={props.image} alt= '' /></Link>
                <h3 className="title"><p>{props.title}</p></h3>
                <span className="channel"><p>{props.channel}</p></span>
                <span className="time"> <p>{props.time}</p></span>
            </div>
        </div>
        </>

    )
}

export default FeedCard;