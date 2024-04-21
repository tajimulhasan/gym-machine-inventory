import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import icon from '../../Images/INVENTORY.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () =>{
       signOut(auth)
    }
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
               {
                user ?
               <CustomLink to='/manage-inventory' className="d"><li>Manage</li></CustomLink>
                : 
                ''
               }
               {
                user ?
                <CustomLink to='/addItem' className="d"><li>Add Item</li></CustomLink>
                : 
                ''
               }
               {
                user ?
                <CustomLink to='/myItem' className="d"><li>My items</li></CustomLink>
                : 
                ''
               }
                <CustomLink to='/blog' className="d"><li>Blog</li></CustomLink>
                <CustomLink to='/about' className="d"><li>About</li></CustomLink>
                  {
                    user ? 
                    <button onClick={handleLogOut} className='mx-3 logout-button'>Log Out</button>
                    :
                <Link to='/signup' className="d"><button className='btn signup-button'>Signup</button></Link>
                  }
                  {
                    user ? 
                     ''
                    :
                    <Link to='/login' className="d"><button className='btn login-button'>Login</button></Link>
                  }
                 
               </ul>
            </div>
        </nav> 
        </div>
    );
};

export default Header;