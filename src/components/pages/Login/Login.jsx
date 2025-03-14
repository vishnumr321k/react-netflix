import React, { useState } from 'react'
import './Login.css';
import logo from '../../../assets/logo.png';
import { login, signup } from '../../../firebase';
import netsflix_spinner from '../../../assets/netflix_spinner.gif'

export const Login = () => {

  const [signState, setSignState] = useState('Sign In');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading]  = useState(false);

  const user_auth = async (event) => {

    event.preventDefault();
    setLoading(true);
    if(signState === 'Sign In'){
      await login(email, password);
    }else{
      await signup(name, email, password)
    }
    setLoading(false);
  }
  return (
    loading ? <div className="login-spinner">
      <img src={netsflix_spinner} alt="netflix_spinner" />
    </div> : 
    <div className='login'>
      <img src={logo} alt="logo_login"  className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === 'Sign Up' ? <input value={name} onChange={(e) => {
           return setName(e.target.value);
          }} type="text" placeholder='Your name' /> : <></>}
          
          <input type="email" placeholder='Email' value={email} onChange={(e) => {
            return setEmail(e.target.value);
          }} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => {
            return setPassword(e.target.value);
          }} />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remenber Me</label>
            </div>
            <p>Need Helo?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In' ?  <p>New to Netflix? <span onClick={() => {setSignState('Sign Up')}} >Sign Up Now</span></p> :
          <p>Already have account? <span onClick={() => {setSignState('Sign In')}}>Sign In Now</span></p>}
  
        </div>
      </div>
    </div>
  )
}

export default Login