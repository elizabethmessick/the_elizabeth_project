import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './ProfileForm.css';


class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            story: '',
            img: '',
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
                    <ProfileCard profile={{ profile: this.state.profile }} img={this.state.img} toggleEdit={this.toggleEdit} />
                    :
                    <form className="form-horizontal" id="ProfileForm">
                        <div className="form-group">
                            <div className="col-sm-12 img-form">
                                <input name="img" className="form-control" placeholder="Image URL" value={this.state.img} onChange={(e) => this.handleChange('img', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="name" className="form-control" placeholder="name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <textarea type="story" id="story" className="form-control" placeholder="story" value={this.state.story} onChange={(e) => this.handleChange('story', e)} maxLength="200" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                <button className="btn btn-default" onClick={this.handleSubmit}>Submit</button>&nbsp;&nbsp;&nbsp;
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