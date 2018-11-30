import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            story: '',
            profile: null,
            edit: false
        }
    }

    componentDidMount() {
        profileService.getProfile()
            .then(user => this.setState({
                profile: user.profile,
                name: user.profile ? user.profile.name : '',
                story: user.profile ? user.profile.story : ''
            }))
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        delete this.state.profile;
        delete this.state.edit;
        profileService.create(this.state)
            .then(res => {
                res.json()
                    .then(user => {
                        this.props.handleCreateProfile(user);
                        this.props.history.push('/supporters');
                    });
            })
    }

    toggleEdit = () => this.setState({ edit: !this.state.edit })

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.profile && !this.state.edit
                    ?
                    <ProfileCard profile={{ profile: this.state.profile }} toggleEdit={this.toggleEdit} />
                    :
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="name" className="form-control" placeholder="name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <textarea type="story" className="form-control" placeholder="story" value={this.state.story} onChange={(e) => this.handleChange('story', e)} />
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


export default ProfileForm;