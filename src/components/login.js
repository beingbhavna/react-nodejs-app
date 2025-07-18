import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate("/");
        }
    })
    const loginClick = async () => {
        console.log(name, password)
        let result = await fetch("http://localhost:5600/login", {
            method: 'post',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-type': 'application/json' }
        });
        result = await result.json();
        localStorage.setItem('user', JSON.stringify(result))
        console.log(result);
        if (result.name) {
            navigate("/")
        } else {
            alert("Please Enter Valid Name")
        }
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