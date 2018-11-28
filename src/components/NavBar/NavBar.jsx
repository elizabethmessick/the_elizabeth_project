import React from 'react';
import './NavBar.css';
import {
    NavLink
} from 'react-router-dom';


const NavBar = (props) => {
    return (
        <div>
            <nav>
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
                    <NavLink to="/signup" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>Signup</NavLink>{' '}
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <NavLink to="/login" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>Login</NavLink>{' '}
            </nav>

        </div>

    )
}

export default NavBar;