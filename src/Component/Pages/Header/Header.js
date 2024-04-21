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
  
            <nav className='header'>
          <input type="checkbox" id="check" />
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
                    <button onClick={handleLogOut} className='mx-3  logout-button'>Log Out</button>
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
            <label htmlFor="check" className='checkbtn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
            </label>
        </nav> 
       
    );
};

export default Header;