import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProfileHeader({ userData, admin }) {
  const history = useHistory();
  const imageUrl = localStorage.getItem('imageUrl');
  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('pageData');

    setTimeout(() => window.location.reload(), 1000);
  };
  return (
    <header className='header'>
      <div className='header_logo'>
        <img src='/assets/images/logoblack.png' alt='logo' />
      </div>
      <div className='header_main'>
        <div className='header_search'>
          {admin ? (
            <div
              className='toggleSidebarBtn back_arrow'
              onClick={() => history.goBack()}
              style={{ marginLeft: '-2rem' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='#fff'
              >
                <path
                  fillRule='evenodd'
                  d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          ) : (
            <Link
              to={'/chooseTemplate'}
              className='go_to_builder go_to_builder_header'
            >
              Go to Builder
              <svg width='20px' viewBox='0 0 24 24' fill='#000000'>
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' />
              </svg>
            </Link>
          )}
        </div>
        <div className='header_sidebar'>
          <div style={{ display: 'none' }} className='header_notification'>
            <svg width='15' viewBox='0 0 15 17' fill='none'>
              <path
                d='M7.64469 14.492C5.80633 14.492 3.96798 14.492 2.12963 14.492C1.33765 14.492 0.72327 14.0168 0.564874 13.268C0.473677 12.8408 0.560074 12.4424 0.804868 12.0776C1.18406 11.5113 1.55845 10.9497 1.92804 10.3785C1.98083 10.2969 2.01444 10.1865 2.01444 10.0905C2.01924 8.69855 2.01443 7.30178 2.01923 5.90982C2.02403 3.4283 3.53119 1.32116 5.88313 0.524378C8.97905 -0.531591 12.4254 1.41235 13.1117 4.61386C13.2029 5.04585 13.2461 5.49224 13.2557 5.93862C13.2749 7.32578 13.2605 8.71294 13.2653 10.1001C13.2653 10.1913 13.2989 10.2969 13.3469 10.3737C13.7165 10.9353 14.0909 11.4969 14.4653 12.0536C14.8157 12.5768 14.8685 13.124 14.5709 13.6808C14.2733 14.2376 13.7789 14.492 13.1549 14.492C11.3214 14.492 9.48304 14.492 7.64469 14.492Z'
                fill='#666666'
              />
              <path
                d='M7.5009 16.7479C7.34251 16.7143 7.17931 16.6903 7.02571 16.6423C6.35853 16.4455 5.88335 16.0279 5.59056 15.3943C5.57136 15.3463 5.55696 15.2983 5.53296 15.2407C6.94412 15.2407 8.33608 15.2407 9.75203 15.2407C9.62724 15.5959 9.43045 15.8887 9.16645 16.1335C8.80646 16.4647 8.38408 16.6615 7.89929 16.7191C7.86089 16.7239 7.82249 16.7383 7.78409 16.7479C7.68809 16.7479 7.5969 16.7479 7.5009 16.7479Z'
                fill='#666666'
              />
            </svg>
          </div>
          <Link to='/profile'>
            <img
              className='header_profile'
              src={
                imageUrl
                  ? imageUrl
                  : userData.profileImg
                  ? userData.profileImg
                  : '/assets/images/profile_new.jpg'
              }
              alt=''
            />
            {userData ? (
              userData.firstName + ' ' + userData.lastName
            ) : (
              <Skeleton className='profile_loader' />
            )}
          </Link>
          <div onClick={handleLogout} className='logout'>
            <svg width='20' viewBox='0 0 24 25' fill='none'>
              <path
                d='M21.6061 12.1141C21.5311 8.99503 20.4514 6.55075 18.2771 4.61633C17.8947 4.27893 17.7072 3.87405 17.8122 3.3717C17.9022 2.92933 18.1796 2.62192 18.622 2.48696C19.0868 2.3445 19.4842 2.47196 19.8366 2.78687C21.4261 4.18895 22.5883 5.88345 23.3006 7.88536C25.7598 14.8358 21.4936 22.3486 14.2658 23.7881C9.36973 24.7628 4.12878 22.416 1.7145 18.0373C-0.812246 13.4562 -0.53483 8.95754 2.47177 4.66881C2.93664 4.00901 3.54396 3.44667 4.11379 2.86935C4.67612 2.31451 5.4259 2.337 5.89826 2.86935C6.36312 3.38669 6.29564 4.12897 5.72581 4.63882C4.7511 5.50856 3.96383 6.52076 3.4015 7.70541C0.642321 13.5012 4.05381 20.3317 10.3894 21.4413C15.6379 22.3636 20.5564 18.8396 21.4486 13.5462C21.5386 13.0063 21.5686 12.4515 21.6061 12.1141Z'
                fill='white'
              />
              <path
                d='M13.2086 6.04089C13.2086 7.63042 13.2161 9.22744 13.2086 10.817C13.2011 11.7017 12.4213 12.279 11.6266 12.0016C11.1692 11.8442 10.8543 11.4318 10.8243 10.9519C10.8168 10.8695 10.8168 10.787 10.8168 10.697C10.8168 7.58543 10.8093 4.47386 10.8243 1.36978C10.8243 1.11486 10.8768 0.837438 10.9818 0.612505C11.2142 0.132648 11.7765 -0.0922853 12.2939 0.0351768C12.8262 0.162639 13.2011 0.620003 13.2011 1.20483C13.2086 2.81685 13.2086 4.42887 13.2086 6.04089Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
