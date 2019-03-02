import React, { Component } from "react";
import './feedcard.css';

const FeedCard = (props) => {
    return (
        <div className='cards grow'>
            <div className="card__info">
                <div className="image"><img src={props.image} /></div>
                <h3 className="title"><p>{props.title}</p></h3>
                <span className="channel"><p>{props.channel}</p></span>
                <span className="time"> <p>{props.time}</p></span>
            </div>
        </div>

    )
}

export default FeedCard;