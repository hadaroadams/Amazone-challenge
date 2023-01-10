import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import LoginLogo from './LoginLogo.png'

function Login() {
    const [email,setEmail] = useState(' ')
    const [password,setPassword] = useState('')
  return (
    <div className='Login'>
      <Link to='/'>
      <img src={LoginLogo} alt="" className='loginlogo' />
      </Link>
      <div className='signin_container'>
        <h1>Sign-in</h1>
        <form action="">
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
             <h5>Password</h5>
             <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br />
             <button className='signIn_button'>Sign In</button>

             <p>
                By signing-in you agree to 
                the AMAZONE FAKE CLONE conditions 
                of Use & sale. Please see our
                Privacy Notice, our Cookies Notice and our Interest-Base
                Ads Notice.
            </p>
            <button className='createaccount_button'>Create Your Amazone Account</button>
        </form>

      </div>
    </div> 
  )
}

export default Login

