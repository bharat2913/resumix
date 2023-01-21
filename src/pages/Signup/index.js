import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import { register } from '../../API/index';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Signup({ userLoggedIn }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [revealPwd, setRevealPwd] = useState(false);
  const [notRobot, setNotRobot] = useState(false);
  const [message, setMessage] = useState({ message: true, type: '' });
  // console.log(type)

  const main_data = useRef(null);

  const data = {
    title: 'Mr',
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: pwd,
    confirmPassword: pwd,
    acceptTerms: true,
    notRobot: notRobot,
  };

  const handleRegister = async (e) => {
    if (firstName !== '' && lastName !== '' && email !== '' && pwd !== '') {
      setMessage({ message: false, type: '' });

      register({ ...data }).then((resp) => {
        if (resp.status === 200) {
          setMessage({ message: resp.data.message, type: 'success' });
          setFirstName('')
          setLastName('')
          setEmail('')
          setPwd('')
        } else {
          // // console.log(res)
          setMessage({ message: resp, type: 'error' });
        }
      });

    } else if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      pwd === ''
    ) {
      setMessage({ message: 'Fill the feilds', type: 'error' });
    }
  };

  return userLoggedIn ? (
    // <div>Logged in</div>
    <Redirect to='/profile/dashboard' /> //profile
  ) : (
    <div className='app'>
      <div className='resumeVector_login_left'>
        {/* <img src={graphic1} alt='graphic1' /> */}
        <img
          src='/assets/images/vectore1.png'
          alt='graphic1'
          style={{ maxWidth: '400px', marginBottom: '-30px' }}
        />
      </div>
      <div className='resumeVector_login_right' style={{ width: 'auto' }}>
        <img
          src='/assets/images/vectore2.png'
          alt='graphic2'
          style={{ maxWidth: '400px' }}
        />
      </div>
      <div style={{ margin: '3rem' }} className=''>
        <img
          style={{ maxWidth: '220px' }}
          src='/assets/images/logo.png'
          alt='logo'
        />
      </div>
      <div className='hero_signup'>
        {/* <div className='logo'>
          <img src="/assets/images/logo.png" alt="logo" />
        </div> */}
        <div className='main'>
          <div ref={main_data}>
            <div className='main_header'>
              <div className='main_header_left'>
                <div>
                  <Link to='/login' className='main_login'>
                    Login
                  </Link>
                </div>
                <div>
                  <Link to='/signup' className='main_signup'>
                    Sign up
                  </Link>
                  <div className='main_header_active'></div>
                </div>
              </div>
              <div className={message.type === 'success' ? 'success' : 'error'}>
                <p>{message.message || <Skeleton className={'loader'} />}</p>
              </div>
            </div>
            <div className='name'>
              <input
                id='firstName'
                className='firstName'
                type='text'
                value={firstName}
                placeholder='first name'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                id='lastName'
                className='lastName'
                value={lastName}
                type='text'
                placeholder='last name'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              id='email'
              className='email'
              type='email'
              value={email}
              placeholder='john@example.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='pwd_container'>
              <input
                id='password'
                className='password'
                type={revealPwd ? 'text' : 'password'}
                placeholder='Enter password'
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='pwd_eye'
                viewBox='0 0 20 20'
                fill='currentColor'
                title={revealPwd ? 'Show password' : 'Hide password'}
                onClick={() => setRevealPwd((show) => !show)}
                style={{ fill: revealPwd ? '#195190ff' : 'currentcolor' }}
              >
                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                <path
                  fillRule='evenodd'
                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>

            <button className='btn_register' onClick={handleRegister}>
              Register
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
