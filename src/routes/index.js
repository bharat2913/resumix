import React, { useState, useEffect, Suspense } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Landingpage from './../pages/LandingPage/landingPage';
import Login from './../pages/Login/index';
import Signup from './../pages/Signup/index';
import ForgotPassword from './../pages/ForgotPassword/index';
import UpdatePassword from './../pages/UpdatePassword/index';
import EmailLink from './../pages/EmailLink/index';
import Profile from './../pages/Profile/index';
import ProfileDashboard from '../pages/ProfileDashboard/index';
import ProfileResume from '../pages/ProfileResume/index';
import ProfileUpdatePassword from '../pages/ProfileUpdatePassword/index';
import Builder from './../pages/Builder/index';
import ChooseTemplate from './../pages/ChooseTemplate/index';

import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

import { get_account_by_id, get_resume_by_userId } from '../API/index';

axios.defaults.baseURL = 'https://resumix-backend.onrender.com';
// axios.defaults.baseURL = 'http://localhost:4000';

const Navigation = ({ tokenValidation }) => {
  const userId = localStorage.getItem('id');
  const jwtToken = localStorage.getItem('jwtToken');

  const [userData, setUserData] = useState(false);
  console.log(userData);
  const [userResumes, setUserResumes] = useState([]);

  const [userLoggedIn, setUserLoggedIn] = useState(
    tokenValidation ? true : false
  );

  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    };

    userId &&
      get_account_by_id(userId, config).then((res) => {
        // // console.log(res);
        if (res === 'Unauthorized') {
          setUserLoggedIn(false);
        } else if (res.status === 200 || res.status === 304) {
          setUserData(res.data);
          setUserLoggedIn(true);
        }
      });

    userId &&
      get_resume_by_userId(userId, config).then((res) => {
        if (res.status === 200 || res.status === 304) {
          setUserResumes(res.data);
        } else {
          console.log(res);
        }
      });
  }, []);

  // // console.log(userData);

  const loading = (
    <div className='builder_loaderWrapper fallback_loader'>
      <ThreeDots wrapperClass='builder_loader ' />
    </div>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Switch>
          <Route exact path='/signup'>
            <Signup userLoggedIn={userLoggedIn} />{' '}
          </Route>
          <Route exact path='/login/:userEmail?'>
            <Login
              userData={userData}
              setUserData={setUserData}
              userLoggedIn={userLoggedIn}
              setUserLoggedIn={setUserLoggedIn}
            />{' '}
          </Route>
          <Route exact path='/profile'>
            <Profile
              userLoggedIn={userLoggedIn}
              userData={userData}
              setUserData={setUserData}
            />
          </Route>
          <Route exact path='/profile/dashboard'>
            <ProfileDashboard userLoggedIn={userLoggedIn} userData={userData} />
          </Route>
          <Route exact path='/profile/resume'>
            <ProfileResume
              userLoggedIn={userLoggedIn}
              userData={userData}
              userResumes={userResumes}
            />
          </Route>
          <Route exact path='/profile/update_password'>
            <ProfileUpdatePassword
              userLoggedIn={userLoggedIn}
              userData={userData}
            />
          </Route>
          <Route exact path='/builder/:chosenTemplate?/:resumeId?'>
            <Builder
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
              userData={userData}
            />{' '}
          </Route>
          <Route exact path='/chooseTemplate' component={ChooseTemplate} />
          <Route path='/resume-builder' component={Landingpage} />

          <Route exact path='/' component={Landingpage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
