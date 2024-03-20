import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import icon from '../../Images/INVENTORY.png';
const Header = () => {
    return (
        <div className='header'>
            <nav>
            <div className="logo">
            <Link to='/'>
                <img src={icon} alt="" />
            </Link>
            </div>
            <div className="elements">
               <ul>
               <CustomLink to='/' className="d"><li>Home</li></CustomLink>
                <CustomLink to='/blog' className="d"><li>Blog</li></CustomLink>
                <Link to='/signup' className="d"><button className='btn signup-button'>Signup</button></Link>
               </ul>
            </div>
        </nav> 
        </div>
    );
};

export default Header;