import React from 'react';
import logo from '../react-logo.png';  // Import logo.svg from src folder
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logOut = () => {
        localStorage.clear();
        console.log('Hello this is logout function!')
        navigate('/')
    }
    return (
        <div>
            <img src={logo} alt="logo" className='logo'/>
            {auth ?
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup" onClick={logOut}>Logout ({JSON.parse(auth).name})</Link></li>
            </ul> :
            <ul className="nav-ul textRight">
                <li><Link to="/signup">Sign Up</Link></li><li><Link to="/login">Login</Link></li>
            </ul>
        }
        </div>
    )
}

export default Nav;