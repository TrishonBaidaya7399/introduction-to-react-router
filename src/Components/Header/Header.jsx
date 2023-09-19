// import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{backgroundColor:'gray'}}>
            <nav>
               <span>My Website</span>
                <ul style={{display:'flex', gap:'20px', listStyle:'none'}}>
                    {/* <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/app">App</a></li> */}
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact Us</Link>
                    <Link to={'/users'}>Users</Link>
                    <Link to={'/undefined'}>Undefined</Link>
                </ul>
            </nav>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;