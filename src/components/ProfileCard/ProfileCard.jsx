import React from 'react';

const ProfileCard = (props) => {
    console.log(props)
    return (
        <div class="card">
            <div class="container">
                <h4><b>{props.profile && props.profile.name}</b></h4>
                <p>{props.profile && props.profile.story}</p>
                <button onClick={props.toggleEdit}>Edit</button>
                {/* <button onClick={() => profileService.deleteProfile(props.user && props.user._id)}>Delete</button> */}
            </div>
        </div>

    )
}

export default ProfileCard;