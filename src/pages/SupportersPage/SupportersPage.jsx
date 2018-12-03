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
                <div className="title">
                    <h1>Chat with other victims. <br /> We are here to help!</h1>
                </div>
                <div className="SupporterProfilesPage">
                    {profiles.map((profile, index) => <SupporterProfileCard profile={profile} key={index} />)}
                </div>
            </div>
        );

    }
}

export default SupportersPage;
