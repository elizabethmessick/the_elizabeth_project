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
import SupportersPage from '../../pages/SupportersPage/SupportersPage';
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


  handleCreateProfile = async (user) => {
    this.setState({ user });
  }

  /*---------- Lifecycle Methods ----------*/

  async componentDidMount() {
    const user = userService.getUser();
    const profile = user ? await profileService.getProfile() : null;
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
          <Route path="/supporters" component={SupportersPage}
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
          <Route exact path="/profile" render={(props) =>
            <ProfileForm
              handleCreateProfile={this.handleCreateProfile}
              history={props.history}
            />}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
