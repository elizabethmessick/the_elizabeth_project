import React from 'react';
import './Footer.css'
import rose from '../../img/rose.png';

const Footer = (props) => {
    return (
        <footer>The Elizabeth Project <img className="rose-footer" src={rose} alt="rose" /> </footer>
    )
}
export default Footer; 