import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import ProfileHeader from '../../Components/Profile/ProfileHeader';
import ProfileSidebar from '../../Components/Profile/ProfileSidebar';
import { reset_password } from '../../API/index';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProfileUpdatePassword({ userLoggedIn, userData }) {
  const history = useHistory();
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');

  const [oldPwd, setOldPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confPwd, setConfPwd] = useState('');
  const [message, setMessage] = useState({ message: true, type: '' });

  const data = {
    token: token,
    password: newPwd,
    confirmPassword: confPwd,
  };

  const handleReset = () => {
    // // console.log(data)
    setMessage({ message: false, type: '' });
    if (newPwd === '' || confPwd === '') {
      setMessage({ message: 'Fill the feilds', type: 'error' });
    } else if (newPwd !== confPwd) {
      setMessage({ message: 'Password do not match', type: 'error' });
    } else {
      reset_password(data).then((res) => {
        // // console.log(res)
        if (res.status === 200) {
          // // console.log(res.data)
          setNewPwd('');
          setConfPwd('');
          setMessage({ message: res.data.message, type: 'success' });
        } else {
          // // console.log(res)
          setMessage({ message: res, type: 'error' });
        }
      });
    }
  };

  return userLoggedIn ? (
    <div className='profile'>
      <ProfileHeader userLoggedIn={userLoggedIn} userData={userData} />
      <div className='profile_main'>
        <ProfileSidebar
          page={''}
          userLoggedIn={userLoggedIn}
          userData={userData}
        />
        <div
          style={{ alignItems: 'center', justifyContent: 'center' }}
          className='profile_hero_resume'
        >
          {/* <div className='hero'> */}
          <div
            style={{
              width: '50%',
              height: 'auto',
              borderRadius: '5px',
              padding: '22px 42px 42px',
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2);',
            }}
            className='main'
          >
            <div className='back'>
              <span onClick={() => history.goBack()}>
                <svg width='18px' viewBox='0 0 24 24' fill='#fff'>
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' />
                </svg>
                Back
              </span>
            </div>
            <div className='main_header'>
              <div className='main_header_left'>
                <div>
                  <Link to='#' className='main_header_login'>
                    Update password
                  </Link>
                  <div className='main_header_update_active'></div>
                </div>
              </div>
              <div className={message.type === 'success' ? 'success' : 'error'}>
                <p>{message.message || <Skeleton className={'loader'} />}</p>
              </div>
            </div>
            {/* <p className='auto_update'>auto update</p> */}
            {/* <input id='email' className='email_update' type="email" placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} /> */}
            <input
              id='oldPassword'
              className='password'
              type={'password'}
              placeholder='Old password'
              value={oldPwd}
              onChange={(e) => setOldPwd(e.target.value)}
            />
            <input
              id='newPassword'
              className='password'
              type={'password'}
              placeholder='New password'
              value={newPwd}
              onChange={(e) => setNewPwd(e.target.value)}
            />
            <input
              id='conformPassword'
              className='password'
              type={'password'}
              placeholder='Confirm password'
              value={confPwd}
              onChange={(e) => setConfPwd(e.target.value)}
            />

            <button className='btn_update' onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  ) : (
    <Redirect to='/login' />
  );
}
