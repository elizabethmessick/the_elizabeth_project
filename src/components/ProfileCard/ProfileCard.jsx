import React from 'react';
import './ProfileCard.css';

const ProfileCard = (props) => {
    return (
        <div className="card">
            <div className="container">
                <h4><b>{props.profile.profile && props.profile.profile.name}</b></h4>
                <p className="CardStory">{props.profile.profile && props.profile.profile.story}</p>
                <button onClick={props.toggleEdit}>Edit</button>
                {/* <button onClick={() => profileService.deleteProfile(props.user && props.user._id)}>Delete</button> */}
            </div>
        </div>

    )
}

export default ProfileCard;
