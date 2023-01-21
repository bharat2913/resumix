import React, { useRef, useState } from 'react';
import { Link, useParams, useHistory, Redirect } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { authenticate, resend_email } from '../../API/index';

export default function Login({
  userLoggedIn,
  setUserLoggedIn,
  userData,
  setUserData,
}) {
  const history = useHistory();
  const { userEmail } = useParams();

  const rememberedEmail = localStorage.getItem('email');

  const [email, setEmail] = useState(userEmail || rememberedEmail);
  const [pwd, setPwd] = useState('');
  const [revealPwd, setRevealPwd] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [erroeMessage, setErroeMessage] = useState(true);

  const main_data = useRef(null);
  const bar = useRef(null);
  const regSuccess = useRef(null);

  const data = {
    email: email,
    password: pwd,
    rememberMe: rememberMe,
  };

  const handleLogin = (e) => {
    if (email !== '' && pwd !== '') {
      setErroeMessage(false);
      authenticate(data).then((res) => {
        // // console.log(res);
        if (res.status === 200) {
          // // console.log(res.data)
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('jwtToken', res.data.jwtToken);
          setUserData(res.data);
          setUserLoggedIn(true);
          // // console.log(res);
          history.push('/profile/dashboard');
        } else {
          // // console.log(res)
          setErroeMessage(res);
        }
      });
    } else if (email === '' || pwd === '') {
      setErroeMessage('Fill the fields');
      // model('Fill the feilds')
    }

    if (rememberMe) {
      localStorage.setItem('email', email);
    }
  };

  const handleResend = (e) => {
    // // console.log(email)
    setErroeMessage(false);

    resend_email(email).then((res) => {
      // // console.log(res)
      if (res.status === 200) {
        setErroeMessage(res.data.message);
      }
    });
  };

  return !userLoggedIn ? (
    //userData
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
      <div className='hero'>
        <div className='main'>
          <div ref={main_data}>
            <div className='main_header extraMarginBottom'>
              <div className='main_header_left'>
                <div>
                  <Link to='/login' className='main_header_login'>
                    Login
                  </Link>
                  <div className='main_header_active'></div>
                </div>
                <div>
                  <Link to='/signup' className='main_header_signup'>
                    Sign up
                  </Link>
                  <div></div>
                </div>
              </div>
              <div className='error'>
                <p>{erroeMessage || <Skeleton className={'loader'} />}</p>
              </div>
            </div>

            <input
              required
              id='email'
              className='email_login'
              type='email'
              placeholder='john@example.com'
              value={email}
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
            <div className='main_forgot'>
              <div className='remember_me'>
                <input
                  id='remember_me'
                  type='checkbox'
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className='remember_me_label' htmlFor='remember_me'>
                  Remember me
                </label>
              </div>
            </div>
            <button className='btn_login' onClick={handleLogin}>
              Login
            </button>
          </div>

        </div>
      </div>
    </div>
  ) : (
    <Redirect to='/profile/dashboard' />
  );
}
