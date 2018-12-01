import React from 'react';
import './NavBar.css';
import {
    NavLink
} from 'react-router-dom';
import rose from '../../img/rose.png';
// import {
//     Navbar,
//     Nav,
//     NavItem,
//     MenuItem,
//     NavDropdown
// } from 'react-bootstrap';


const NavBar = (props) => {
    let nav = props.user ?

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} onClick={props.handleLogout} className='NavBar-link'>LOG OUT</NavLink>
            <NavLink to="/" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Welcome</NavLink>
            <NavLink to="/resources" activeStyle={{
                fontWeight: "bold",
                color: "white"
            }} className='NavBar-link'>Resources</NavLink>
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
            <span className='NavBar-logo' id="elizabeth">The Elizabeth Project <img src={rose} alt="rose" /></span>
            {nav}
        </div>
        //     <Navbar>
        //         <Navbar.Header>
        //             <Navbar.Brand>
        //                 <a href="#home">React-Bootstrap</a>
        //             </Navbar.Brand>
        //         </Navbar.Header>
        //         <Nav>
        //             <NavItem eventKey={1} href="#">
        //                 Link
        // </NavItem>
        //             <NavItem eventKey={2} href="#">
        //                 Link
        // </NavItem>
        //             <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        //                 <MenuItem eventKey={3.1}>Action</MenuItem>
        //                 <MenuItem eventKey={3.2}>Another action</MenuItem>
        //                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
        //                 <MenuItem divider />
        //                 <MenuItem eventKey={3.4}>Separated link</MenuItem>
        //             </NavDropdown>
        //         </Nav>
        //     </Navbar>
    );
};

export default NavBar;


