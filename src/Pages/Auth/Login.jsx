import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../actions/auth';

import icon from '../../assets/icon.png';

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import AlertBox from '../../components/Authalertbox/Alertbox';

import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      setAlertMessage('Enter an email and password');
      setShowAlert(true);
      return;
    }
    dispatch(login({ email, password }, navigate))
      .then((success) => {
        if (!success) {
          setAlertMessage('Invalid email or password. Please try again.');
          setShowAlert(true);
        }
      })
      .catch((error) => {
        console.log('Login error:', error);
        setAlertMessage('An error occurred. Please try again later.');
        setShowAlert(true);
      });
  };

  return (
    <>
    <LeftSidebar/>
    <section className='auth-section'>
      <div className='auth-container-2'>
        {
          showAlert && (
            <AlertBox message={alertMessage} onClose={() => setShowAlert(false)}/>
          )
        }
        <img src={icon} alt='stack overflow' className='login-logo' />

        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label htmlFor='password'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4>Password</h4>
              <p style={{ color: '#007ac6', fontSize: '13px' }}>Forgot password?</p>
            </div>
            <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>

          <button type='submit' className='auth-btn'>
            Log in
          </button>
        </form>

        <p>
          Don't have an account?
          <button type='button' className='handle-switch-btn' onClick={() => navigate('/signup')}>
            Sign up
          </button>
        </p>
      </div>
    </section>
    </>
  );
};

export default Login;
