import React from 'react';
import './SupporterProfileCard.css';
import {
    Link
} from 'react-router-dom';
import avatar from '../../img/avatar.png'

const SupporterProfileCard = (props) => {
    return (
        <div className="card">
            <div className="container">
                <div className="image-container">
                    {
                        props.profile.profile && props.profile.profile.img ?
                            <img src={props.profile.profile && props.profile.profile.img} alt="img" className="profile-image"></img>
                            :
                            <img className="avatar" src={avatar} alt="avatar" />
                    }
                </div>
                {
                    props.profile.profile && props.profile.profile.name ?
                        <h4><b>{props.profile.profile && props.profile.profile.name}</b></h4>
                        :
                        <h4>Anonymous</h4>
                }
                <p className="CardStory flex-100">{props.profile.profile && props.profile.profile.story}</p>
                <Link to="/livechat" id="chat-button"><button type="button" className="btn btn-warning">Live Chat</button></Link>
            </div>
        </div>

    )
}

export default SupporterProfileCard;