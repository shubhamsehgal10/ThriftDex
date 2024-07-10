import React from 'react'
import './CSS/LoginSignUp.css'
import { Link } from 'react-router-dom'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <form>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' required/>
          <input type="email" placeholder='Email Address' required/>
          <input type="password" placeholder='Your Password' required/>
        </div>
        <Link to='/successful'><button>Continue</button></Link>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name=''  id=''/>
          <p>By continuing, I agree to the terms of use & Privacy Policy</p>
        </div>
      </div>
      </form>
    </div>
  )
}

export default LoginSignUp