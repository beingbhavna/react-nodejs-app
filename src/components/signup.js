import  React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    });

    const collectData = async () => {
        const API_URL = process.env.REACT_APP_API_URL;
        console.log(name, email, password);
        let result = await fetch(`${API_URL}/register`, {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        result = await result.json();
        console.log(result)
        localStorage.setItem('user', JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));
        if (result) {
            navigate('/');
        }
    }
    return (
        <div className='register'>
            <h3>Register</h3>
            <input className='inputBox' type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <input className='inputBox' type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            <input className='inputBox' type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className='button' onClick={collectData}>SIGN UP</button>
        </div>
    )
}

export default SignUp;