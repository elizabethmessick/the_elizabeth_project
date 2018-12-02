import React, { Component } from 'react';
import profileService from '../../utils/profileService';
import SupporterProfileCard from '../../components/SupporterProfileCard/SupporterProfileCard';
import './SupportersPage.css';


class SupportersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: []
        }
    }
    async componentDidMount() {
        var allProfiles = await profileService.getAllProfiles();
        this.setState({ profiles: allProfiles });
    }

    render() {
        var profiles = this.state.profiles;
        return (
            <div className="SupportersPage">
                {profiles.map((profile, index) => <SupporterProfileCard profile={profile} key={index} />)}
            </div>
        );

    }
}

export default SupportersPage;
