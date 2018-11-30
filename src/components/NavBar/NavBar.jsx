import React from 'react';
import './NavBar.css';
import {
    NavLink
} from 'react-router-dom';


const NavBar = (props) => {
    let nav = props.user ?

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Welcome</NavLink>
            <NavLink to="/resources" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Resources</NavLink>
            <NavLink to="" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} onClick={props.handleLogout} className='NavBar-link'>LOG OUT</NavLink>
            <NavLink to="/supporters" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Supporter Profiles</NavLink>
            <NavLink to="/livechat" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Live Chat</NavLink>
            {props.user.profile ?

                <NavLink to="/profile" activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                }} className='NavBar-link'>Profile</NavLink>

                :

                <NavLink to="/profile" activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                }} className='NavBar-link'>Become a Supporter</NavLink>
            }


            <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
        </nav>
        :
        <div>
            <NavLink to="/" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Welcome</NavLink>
            <NavLink to="/resources" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Resources</NavLink>
            <NavLink to="/signup" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Signup</NavLink>
            <NavLink to="/login" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Login</NavLink>
        </div>;

    return (
        <div className="NavBar">
            <span className='NavBar-logo' id="elizabeth">The Elizabeth Project</span>
            {nav}
        </div>

    );
};

export default NavBar;


