import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { forgot_password, resend_email } from '../../API/index';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import graphic1 from '../../Assets/svg/Build-Your-Resume-With-Confidencee.svg';
import graphic2 from '../../Assets/svg/If-For-Any-Reason-You-Dont-Appreciate-Templaates.svg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    message: false,
    type: '',
  });

  const btn_reset = useRef(null);
  const mail = useRef(null);
  const bar = useRef(null);
  const footer = useRef(null);
  const main_data = useRef(null);
  const mailSuccess = useRef(null);

  function bth_reset_handler() {
    // // console.log(email)

    if (email === '') {
      setErrorMessage({ message: 'Fill the feilds', type: 'error' });
    } else {
      setErrorMessage('');
      forgot_password(email).then((res) => {
        // console.log(res)
        if (res.status === 200) {
          setMessage({ message: res.data.message, type: 'success' });
        } else {
          setMessage({ message: res, type: 'error' });
        }
      });
      setTimeout(() => {
        btn_reset.current.style.display = 'none';
        mail.current.style.display = 'block';
      }, 1000);
      setTimeout(() => {
        mail.current.style.display = 'none';
        footer.current.style.display = 'none';
        bar.current.style.display = 'block';
      }, 4000);
      setTimeout(() => {
        main_data.current.style.display = 'none';
        bar.current.classList.add('expandBar');
        // bar.current.classList.animation = "expand 2s";
      }, 5000);
      setTimeout(() => {
        // bar.current.classList.animation = "expandMore 4s";
        bar.current.classList.add('expandBarAgain');
      }, 6000);
      setTimeout(() => {
        bar.current.style.display = 'none';
        mailSuccess.current.style.display = 'flex';
      }, 7000);
    }
  }

  const handleResend = (e) => {
    // // console.log(email)
    setMessage({ message: false, type: '' });

    resend_email(email).then((res) => {
      // // console.log(res)
      if (res.status === 200) {
        setMessage({ message: res.data.message, type: 'success' });
      }
    });
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
          <div ref={main_data}>
            <div className='main_header'>
              <div>
                <Link to='/forgot' className='main_header_forgot'>
                  Forgot Password
                </Link>
                <div className='main_header_forgot_active'></div>
              </div>
              <div
                className={
                  errorMessage.type === 'success' ? 'success' : 'error'
                }
              >
                <p>{errorMessage.message}</p>
              </div>
            </div>
            <input
              id='email'
              className='email_forgot'
              type='text'
              placeholder='john@example.com'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            ref={btn_reset}
            className='btn_reset'
            onClick={bth_reset_handler}
          >
            Reset Password
          </button>
          <div ref={mail} className='mail'>
            <img
              className='mail_img'
              src='/assets/images/mail.png'
              alt='mailing'
            />
            <div className='mail_footer'></div>
          </div>
          <div ref={bar} className='mail_footer_only'></div>
          <div ref={mailSuccess} className='mailSuccess'>
            <img
              className='mailSuccess_img'
              src='/assets/images/mailSended.png'
              alt='mailSended'
            />
            {/* <p  className='mailSuccess_text'>Reset link has been sent to your mail id</p> */}
            <p className='mailSuccess_text'>
              {message.message || <Skeleton className={'loader_signUp'} />}
            </p>
            <div className='singnUp_links'>
              <p className='backToLogin resendMail' onClick={handleResend}>
                Resend email
              </p>
              <p className='backToLogin'>
                Back to <Link to='/login'>Login</Link>?
              </p>
            </div>
          </div>
          <div ref={footer}>
            <div className='saperator_reset'>
              <div className='saperator_line'></div>
              <div>or</div>
              <div className='saperator_line'></div>
            </div>
            <p className='credit_reset'>
              Back to{' '}
              <span>
                <Link to='/login'>Log in ?</Link>{' '}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
