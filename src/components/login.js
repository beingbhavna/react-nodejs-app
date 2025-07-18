import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const loginClick = () => {
        console.log(name, password)
    }
    return (
        <div className='login'><h2>Login</h2>
            <input type="text" className='inputBox' onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name' />
            <input type="password" className='inputBox' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Password' />
            <button type='button' className='button' onClick={loginClick}>Login</button>
        </div>
    )
}

export default Login;