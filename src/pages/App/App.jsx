import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import Welcome from '../../pages/Welcome/Welcome';
import Resources from '../../pages/Resources/Resources';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import LiveChat from '../../pages/LiveChat/LiveChat';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import profileService from '../../utils/profileService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      user: {}
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignuporLogin = () =>
    this.setState({ user: userService.getUser() });


  handleCreateProfile = async () => {
    var user = await profileService.getUserById(this.state.user._id);
    this.setState({ user: user });
  }

  // setProfile = (profile) => this.setState({ profile })


  /*---------- Lifecycle Methods ----------*/

  async componentDidMount() {
    const user = userService.getUser();
    const profile = user ? await profileService.getUserById(user._id) : null;
    this.setState({ user, profile });


  }

  render() {
    return (
      <div>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/resources" component={Resources} />
          <Route path="/profilepage" component={ProfilePage}
            profiles={this.state.profile}
          />
          <Route path="/livechat" component={LiveChat} />
          <Route exact path='/signup' render={(props) =>
            <SignupPage
              {...props}
              handleSignuporLogin={this.handleSignuporLogin}
            />
          } />
          <Route exact path='/login' render={(props) =>
            <LoginPage
              {...props}
              handleSignuporLogin={this.handleSignuporLogin}
            />
          } />
          <Route exact path="/createprofile" component={() =>
            <ProfileForm profile={this.state.profile}
              handleCreateProfile={this.handleCreateProfile}
              user={this.state.user}
            />}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
