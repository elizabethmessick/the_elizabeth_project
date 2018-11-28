import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Resources from './pages/Resources';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <NavLink to="/">Welcome Page</NavLink>{' '}
            <NavLink to="/resources">Resources</NavLink>{' '}
          </nav>
          <Route exact path="/" component={Welcome} />
          <Route path="/resources" component={Resources} />
        </div>
      </Router>
    );
  }
}

export default App;
