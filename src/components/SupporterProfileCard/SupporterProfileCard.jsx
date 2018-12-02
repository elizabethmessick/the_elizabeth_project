import React from 'react';
import './SupporterProfileCard.css';
import {
    Link
} from 'react-router-dom';

const SupporterProfileCard = (props) => {
    return (
        <div className="card">
            <div className="container">
                <h4><b>{props.profile.profile && props.profile.profile.name}</b></h4>
                <p className="CardStory">{props.profile.profile && props.profile.profile.story}</p>
                <Link to="/livechat" id="chat-button"><button type="button" class="btn btn-warning">Live Chat</button></Link>
            </div>
        </div>

    )
}

export default SupporterProfileCard;