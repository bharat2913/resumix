import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { verify_email } from '../../API/index';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function VerifyEmail() {
  const history = useHistory();

  const [message, setMessage] = useState({ message: true, type: '' });
  // const {token} = useParams();

  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');

  const model = (message) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='notaRobotModel regSuccessModel'>
            {/* <div> */}
            {/* <h1>Are you sure?</h1> */}
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
            {/* </div> */}
          </div>
        );
      },
    });
  };

  const handleVerify = () => {
    // // console.log(token)
    setMessage({ message: false, type: '' });
    verify_email(token).then((res) => {
      if (res.status === 200) {
        setMessage({ message: res.data.message, type: 'success' });
        history.push('/login');
      } else {
        // console.log(res)
        setMessage({ message: res, type: 'error' });
      }
    });
  };

  return (
    <div className='app'>
      <div className='verify_email'>
        <div className='logo_email'>
          <img src='/assets/images/logo.png' alt='logo' />
        </div>
        <div
          className={
            message.type === 'success'
              ? 'verify_email_success'
              : 'verify_email_error'
          }
        >
          <p>{message.message || <Skeleton className={'loader'} />}</p>
        </div>
        <article>
          {/* <p className='name_email'>Hi - Sam</p> */}
          <p className='name_email'>Account Verification</p>
          <p className='subtext'>
            Please click the link below to verify the email
          </p>
          <div className='btn_verify'>
            <button className='btn_email' onClick={handleVerify}>
              Verify Email
            </button>
          </div>
          <p className='verify_email_backToLogin'>
            Back to{' '}
            <span>
              <Link to='/login'>Log in ?</Link>{' '}
            </span>
          </p>
        </article>
      </div>
    </div>
  );
}
