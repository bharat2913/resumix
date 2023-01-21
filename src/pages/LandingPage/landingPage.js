import React from 'react';
import { Link } from 'react-router-dom';

export default function Landingpage() {
  return (
    <div className='App'>
      <div className='landingPge_logo'>
        <img
          src='/assets/images/logo.png'
          alt='logo'
          style={{ maxWidth: '240px', height: '50px', alignSelf: 'center' }}
        />
      <div className='landingPge_btn'>
        <Link to='/chooseTemplate'>
          <button>Dive into Resumix</button>
        </Link>
      </div>
      </div>

      <div className='landingPge_heading'>
        Let's Get Started
      </div>

      <div className='landingPge_hero'>
        <div className='landingPge_img'>
          <img
            src='/assets/images/landing.png'
            alt='landingPage'
            style={{ margin: '1rem 0' }}
          />
        </div>
        <div className='landingPge_mainText'>
          <div>
            <h5>Choose</h5>
            <p>
              Browse over 5 professional resume templates.
            </p>
          </div>
          <div>
            <h5>Download ─ Print</h5>
            <p>Download your resume as a .txt or PDF file or print it.</p>
          </div>
          <div>
            <h5>The Final Touch!</h5>
            <p>
              You can save your current resume and access that resume later .
            </p>
          </div>
        </div>
      </div>

      <div className='landingPge_divider'>
        <div></div>
      </div>

    </div>
  );
}
