import React from 'react';
import './NavBar.css';
import {
    NavLink
} from 'react-router-dom';
import rose from '../../img/rose.png';



const NavBar = (props) => {
    let nav = props.user ?

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className='NavBar'>
            <NavLink exact to="/" className='NavBar-link' activeClassName="selected">Home</NavLink>
            <NavLink to="/resources" className='NavBar-link' activeClassName="selected">Resources</NavLink>
            <NavLink to="/supporters" className='NavBar-link' activeClassName="selected">Supporter Profiles</NavLink>
            <NavLink to="/livechat" className='NavBar-link' activeClassName="selected">Live Chat</NavLink>
            {props.user.profile ?

                <NavLink to="/profile" className='NavBar-link' activeClassName="selected">Profile</NavLink>

                :

                <NavLink to="/profile" className='NavBar-link' activeClassName="selected">Become a Supporter</NavLink>

            }
            <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
            <NavLink to="" onClick={props.handleLogout} className='NavBar-link'>LOG OUT</NavLink>
        </nav>
        :
        <div>
            <NavLink exact to="/" className='NavBar-link' activeClassName="selected">Welcome</NavLink>
            <NavLink to="/resources" className='NavBar-link' activeClassName="selected">Resources</NavLink>
            <NavLink to="/signup" className='NavBar-link'>Signup</NavLink>
            <NavLink to="/login" className='NavBar-link'>Login</NavLink>
        </div>;

    return (
        <div className="NavBar">
            <span className='NavBar-logo' id="elizabeth">The Elizabeth Project <img className="rose" src={rose} alt="rose" /></span>
            {nav}
        </div>
    );
};

export default NavBar;


