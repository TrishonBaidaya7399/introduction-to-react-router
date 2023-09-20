// import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{backgroundColor:'gray', width:'100vw', marginBottom:'30px'}}>
            <nav style={{padding: '20px'}}>
               <span style={{fontSize:'30px', color:'white'}}>My Website</span>
                <ul style={{display:'flex', gap:'20px',color:'white',listStyle:'none', justifyContent:'center'}}>
                    <Link style={{color:'white', fontSize:'20px'}} to={'/home'}>Home</Link>
                    <Link style={{color:'white', fontSize:'20px'}} to={'/about'}>About</Link>
                    <Link style={{color:'white', fontSize:'20px'}} to={'/contact'}>Contact Us</Link>
                    <Link style={{color:'white', fontSize:'20px'}} to={'/users'}>Users</Link>
                    <Link style={{color:'white', fontSize:'20px'}} to={'/undefined'}>Undefined</Link>
                    <Link style={{color:'white' , fontSize:'20px'}} to={'/posts'}>Timeline</Link>
                </ul>
            </nav>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;