import {react, useState} from 'react';

const SignUp =()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const collectData =()=>{console.log(name,email,password);
    }
    return(
        <div className='register'>
            <h3>Register</h3>
            <input className='inputBox' type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            <input className='inputBox' type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input className='inputBox' type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button type="button" className='button' onClick={collectData}>SIGN UP</button>
        </div>
    )
}

export default SignUp;