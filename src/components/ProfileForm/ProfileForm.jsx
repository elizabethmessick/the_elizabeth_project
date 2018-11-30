import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            story: ''
        }
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        profileService.create(this.state, this.props.user._id)
            .then(res => {
                res.json()
                    .then(user => {
                        this.props.setProfile(user.profile);
                        console.log(this.props)
                    })
            })
        // .then(profile => {
        //     this.props.handleCreateProfile(profile);
        //     this.props.history.push('/');
        // })
    }

    render() {
        return (
            <div>
                <header className="header-footer">Profile</header>
                {this.props.profile
                    ?
                    <ProfileCard profile={this.props.profile} />
                    :
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="name" className="form-control" placeholder="name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="story" className="form-control" placeholder="story" value={this.state.story} onChange={(e) => this.handleChange('story', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                <button className="btn btn-default" onClick={this.handleSubmit}>Create Profile</button>&nbsp;&nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
                            </div>
                        </div>
                    </form>
                }
            </div>
        );
    }
};


const ProfileCard = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.profile && props.profile.story}</p>
        </div>
    )
}

export default ProfileForm;