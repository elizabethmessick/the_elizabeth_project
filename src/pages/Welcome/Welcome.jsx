import React from 'react';
import './Welcome.css';
import elizabethPic from '../../img/elizabeth.jpeg';


const Welcome = (props) => (
    <div className="Welcome">
        <h1>My Story</h1>
        <img className="elizabethPic" src={elizabethPic} alt="elizabeth" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
);

export default Welcome;

