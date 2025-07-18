import React from 'react';
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
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                {
                    auth ? <li><Link to="/signup" onClick={logOut}>Logout</Link></li> : <><li><Link to="/login">Login</Link></li><li><Link to="/login">Login</Link></li></>
                }
            </ul>
        </div>
    )
}

export default Nav;