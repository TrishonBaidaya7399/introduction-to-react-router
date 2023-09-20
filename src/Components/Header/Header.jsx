// import React from 'react';
// import PropTypes from 'prop-types';
import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div style={{backgroundColor:'gray', width:'100vw', marginBottom:'30px'}}>
            <nav style={{padding: '20px'}}>
               <span style={{fontSize:'30px', color:'white'}}>My Website</span>
                <ul style={{display:'flex', gap:'20px',color:'white',listStyle:'none', justifyContent:'center'}}>
                    <NavLink to={'/home'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/contact'}>Contact Us</NavLink>
                    <NavLink to={'/users'}>Users</NavLink>
                    <NavLink to={'/posts'}>Timeline</NavLink>
                    <NavLink to={'/undefined'}>Undefined</NavLink>
                </ul>
            </nav>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;