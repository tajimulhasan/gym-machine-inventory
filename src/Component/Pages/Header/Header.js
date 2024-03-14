import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <div className='header'>
            <nav>
            <div className="logo">
            <Link to='/'>
                <img src="INVENTORY.png" alt="" />
            </Link>
            </div>
            <div className="elements">
               <ul>
               <CustomLink to='/' className="d"><li><a>Home</a></li></CustomLink>
                <CustomLink to='/blog' className="d"><li><a>Blog</a></li></CustomLink>
                <Link to='/signup' className="d"><li><button className='btn signup-button'>Signup</button></li></Link>
               </ul>
            </div>
        </nav> 
        </div>
    );
};

export default Header;