import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup } from '../../actions/auth';

import AboutAuth from './AboutAuth';

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

import './Auth.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email && !password) {
            alert('Enter an email and password');
        }
        if (!name) {
            alert('Enter a name to continue');
        }
        dispatch(signup({ name, email, password }, navigate));
    };

    return (
        <>
         <LeftSidebar/>
        <section className='auth-section'>
            <AboutAuth />
            <div className='auth-container-2'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>
                        <h4>Display Name</h4>
                        <input type='text' name='name' id='name' onChange={(e) => setName(e.target.value)} />
                    </label>

                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label htmlFor='password'>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Password</h4>
                        </div>
                        <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>

                    <lable htmlFor='check'>
                        <input type="checkbox" id='check' />
                        <p style={{margin:'0px', fontSize: "13px"}}>Opt-in to receive occasional <br />product updates, user reasearch invitations,<br /> company announcements, and digests</p>
                    </lable>

                    <button type='submit' className='auth-btn'>
                        Sign up
                    </button>

                    <p style={{ color: '#666767', fontSize: '13px' }}>
                        By clicking "Sign up", you agree to our <span style={{ color: '#007ac6' }}>terms of<br /> service</span>,
                        <span style={{ color: '#007ac6' }}> privacy policy</span> and
                        <span style={{ color: '#007ac6' }}> cookie policy</span>
                    </p>
                </form>

                <p>
                    Already have an account?
                    <button type='button' className='handle-switch-btn' onClick={() => navigate('/login')}>
                        Log in
                    </button>
                </p>
            </div>
        </section>
        </>
    );
};

export default Signup;
