import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignuporLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
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
        </Switch>
      </div>
    );
  }
}

export default App;

{/* <Route exact path="/" component={Welcome} />
            <Route path="/resources" component={Resources} />
            <Route path="/profilepage" component={ProfilePage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/livechat" component={LiveChat} /> */}

//             import Welcome from '../../pages/Welcome/Welcome';
// import Resources from '../../pages/Resources/Resources';
// import SignupPage from '../../pages/SignupPage/SignupPage';
// import LoginPage from '../../pages/LoginPage/LoginPage';
// import ProfilePage from '../../pages/ProfilePage/ProfilePage';
// import LiveChat from '../../pages/LiveChat/LiveChat';