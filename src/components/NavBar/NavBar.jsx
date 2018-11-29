import React from 'react';
import './NavBar.css';
import {
    NavLink
} from 'react-router-dom';


const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <NavLink to="/profilepage" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Supporter Profiles</NavLink>{' '}
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <NavLink to="/livechat" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Live Chat</NavLink>{' '}
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <NavLink to="" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }} onClick={props.handleLogout}>LOG OUT</NavLink>{' '}
            <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>

        </div>
        :
        <div>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <NavLink to="/signup" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Signup</NavLink>{' '}
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <NavLink to="/login" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Login</NavLink>{' '}
        </div>;

    return (
        <div className="NavBar">
            <NavLink exact to="/" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Welcome Page</NavLink>{' '}
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <NavLink to="/resources" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Resources</NavLink>{' '}
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            {nav}
        </div>

    );
};

export default NavBar;