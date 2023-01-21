import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { reset_password } from '../../API/index';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import graphic1 from '../../Assets/svg/Build-Your-Resume-With-Confidencee.svg';
import graphic2 from '../../Assets/svg/If-For-Any-Reason-You-Dont-Appreciate-Templaates.svg';

export default function UpdatePassword() {
  const history = useHistory();
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');

  // const [email, setEmail] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confPwd, setConfPwd] = useState('');
  const [revealPwd, setRevealPwd] = useState(false);
  const [message, setMessage] = useState({ message: true, type: '' });

  const data = {
    token: token,
    password: newPwd,
    confirmPassword: confPwd,
  };

  const model = (message) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='notaRobotModel regSuccessModel'>
            {/* <div> */}
            {/* <h1>Are you sure?</h1> */}
            <p>{message}</p>
            <button
              onClick={() => {
                onClose();
                history.push('/login');
              }}
            >
              Close
            </button>
            {/* </div> */}
          </div>
        );
      },
    });
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

  return (
    <div className='app'>
      <div
        style={{ position: 'fixed', width: '400px', left: '0', bottom: '0' }}
      >
        <img src={graphic1} alt='graphic1' />
      </div>
      <div
        style={{
          position: 'fixed',
          width: '200px',
          right: '0',
          bottom: '10px',
        }}
      >
        <img src={graphic2} alt='graphic2' />
      </div>
      <div style={{ margin: '3rem' }} className=''>
        <img src='/assets/images/logo.png' alt='logo' />
      </div>
      <div className='hero'>
        {/* <div className='logo'>
        <img src="/assets/images/logo.png" alt="logo" />
      </div> */}
        <div className='main'>
          <div className='main_header'>
            <div className='main_header_left'>
              <div>
                <Link to='/updatePassword' className='main_header_login'>
                  Update password
                </Link>
                <div className='main_header_update_active'></div>
              </div>
            </div>
            <div className={message.type === 'success' ? 'success' : 'error'}>
              <p>{message.message || <Skeleton className={'loader'} />}</p>
            </div>
          </div>
          <p className='auto_update'>auto update</p>
          {/* <input id='email' className='email_update' type="email" placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} /> */}
          <input
            id='newPassword'
            className='password'
            type={'password'}
            placeholder='new password'
            value={newPwd}
            onChange={(e) => setNewPwd(e.target.value)}
          />
          <input
            id='conformPassword'
            className='password'
            type={'password'}
            placeholder='Conform password'
            value={confPwd}
            onChange={(e) => setConfPwd(e.target.value)}
          />

          <button className='btn_update' onClick={handleReset}>
            Reset
          </button>
          <p className='backToLogin_Reset'>
            Back to <Link to='/login'>Login</Link>
          </p>
          <p className='credit credit_update'>
            By continuing, you’re agreeing to our{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://cvjury.com/terms-and-conditions/'
            >
              Customer Terms of Service
            </a>{' '}
            and{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://cvjury.com/privacy-policy/'
            >
              {' '}
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
