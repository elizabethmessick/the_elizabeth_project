import React, { Component } from 'react';
import profileService from '../../utils/profileService';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

class ProfilePage extends Component {
    constructor(props) {
        super(props)
        console.log('props', props)
        this.state = {
            profiles: []
        }
    }
    async componentDidMount() {
        var allProfiles = await profileService.getAllProfiles();
        console.log(allProfiles);
        this.setState({ profiles: allProfiles });
    }

    render() {
        var profiles = this.state.profiles;
        return (
            <div>
                {profiles.map((profile, index) => <ProfileCard profile={profile} key={index} />)}
            </div>
        );

    }
}


export default ProfilePage;
