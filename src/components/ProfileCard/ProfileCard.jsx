import React from 'react';
import './ProfileCard.css';
import avatar from '../../img/avatar.png'

const ProfileCard = (props) => {
    return (
        <div className="Card">
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
                <p className="CardStory">{props.profile.profile && props.profile.profile.story}</p>
                <button id="edit-button" onClick={props.toggleEdit}>Edit</button>
                {/* <button onClick={() => profileService.deleteProfile(props.user && props.user._id)}>Delete</button> */}
            </div>
        </div>

    )
}

export default ProfileCard;
