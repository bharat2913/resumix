import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { update_account_by_id } from '../../API/index';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import ProfileSidebar from '../../Components/Profile/ProfileSidebar';

export default function Profile({ userData, userLoggedIn, setUserData }) {
  const imageUrl = localStorage.getItem('imageUrl');

  const jwtToken = localStorage.getItem('jwtToken');
  // console.log(userData);

  const [loading, setLoading] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [showToastText, setShowToastText] = useState('');
  const [editToggle, setEditToggle] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);

  const [firstName, setFirstName] = useState(
    userData ? userData.firstName : ''
  );
  const [lastName, setLastName] = useState(userData ? userData.lastName : '');
  const [email, setEmail] = useState(userData ? userData.email : '');
  const [number, setNumber] = useState(userData ? userData.number : '');
  const [address, setAddress] = useState(userData ? userData.address : '');
  const [profileImg, setProfileImg] = useState(
    userData ? userData.profileImg : ''
  );

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSave = async () => {
    setLoading(true);
    const base64 = await (selectedFile && convertToBase64(selectedFile));
    selectedFile && setProfileImg(base64);
    const config = {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    };
    const saveData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      number: number,
      address: address,
      profileImg: base64 || profileImg,
    };

    // // console.log({ ...saveData, firstName: 'Nalla' });
    update_account_by_id(userData.id, config, saveData).then((res) => {
      if (res.status === 200 || res.status === 304) {
        setLoading(false);
        setShowToastText('Saved Successfully!');
        setShowSaveToast(true);
        setUserData(res.data);
        setEditToggle(false);
      } else {
        console.log(res);
        setLoading(false);
        setShowToastText(res);
        setShowSaveToast(true);
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('pageData');

    setTimeout(() => window.location.reload(), 1000);
  };
  const toastLeft = '8rem';

  return userLoggedIn ? (
    <div className='profile'>
      <ProfileHeader userLoggedIn={userLoggedIn} userData={userData} />
      <div className='profile_main'>
        <ProfileSidebar userLoggedIn={userLoggedIn} userData={userData} />
        <div className='profile_hero'>
          <div className='profile_hero_box'>
            {loading && (
              <div className='builder_loaderWrapper'>
                <ThreeDots
                  wrapperClass='builder_loader'
                  wrapperStyle={{ top: '0', left: '2.5rem' }}
                />
              </div>
            )}
            <ToastContainer
              className=''
              style={{
                width: '200px',
                marginTop: '1rem',
              }}
              position={'top-center'}
              ref={(el) => {
                if (el) {
                  el.style.setProperty('left', toastLeft, 'important');
                }
              }}
            >
              <Toast
                onClose={() => setShowSaveToast(false)}
                show={showSaveToast}
                delay={3000}
                autohide
              >
                <Toast.Body>
                  {showToastText}
                  {/* Saved Successfully! */}
                </Toast.Body>
              </Toast>
            </ToastContainer>
            <div className='profile_hero_box_container'>
              <img
                className='profile_hero_img'
                src={
                  selectedFile
                    ? URL.createObjectURL(selectedFile)
                    : imageUrl
                    ? imageUrl
                    : userData.profileImg
                    ? userData.profileImg
                    : '/assets/images/profile_new.jpg'
                }
                // src={imageUrl ? imageUrl : '/assets/images/profile_img.png'}
                alt='profile'
              />
              <input
                id='profile_pic'
                type='file'
                hidden
                accept='image/png, image/jpeg, image/jpg'
                onChange={(e) => {
                  const fileSize = e.target.files[0].size / 1000000;
                  if (fileSize <= 2) {
                    setSelectedFile(e.target.files[0]);
                  } else {
                    setShowToastText('File size must be under 2MB');
                    setShowSaveToast(true);
                  }
                }}
              />
              <label
                style={{ visibility: editToggle ? 'visible' : 'hidden' }}
                htmlFor='profile_pic'
              >
                <svg
                  width='25px'
                  version='1.1'
                  id='Capa_1'
                  x='0px'
                  y='0px'
                  viewBox='0 0 374.116 374.116'
                >
                  <g>
                    <path
                      d='M344.058,207.506c-16.568,0-30,13.432-30,30v76.609h-254v-76.609c0-16.568-13.432-30-30-30c-16.568,0-30,13.432-30,30
		v106.609c0,16.568,13.432,30,30,30h314c16.568,0,30-13.432,30-30V237.506C374.058,220.938,360.626,207.506,344.058,207.506z'
                    />
                    <path
                      d='M123.57,135.915l33.488-33.488v111.775c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30V102.426l33.488,33.488
		c5.857,5.858,13.535,8.787,21.213,8.787c7.678,0,15.355-2.929,21.213-8.787c11.716-11.716,11.716-30.71,0-42.426L208.271,8.788
		c-11.715-11.717-30.711-11.717-42.426,0L81.144,93.489c-11.716,11.716-11.716,30.71,0,42.426
		C92.859,147.631,111.855,147.631,123.57,135.915z'
                    />
                  </g>
                </svg>
                {selectedFile && selectedFile.name.substring(0, 10) + '..'}
              </label>
            </div>
            {userData ? (
              <>
                <div
                  onClick={() => setEditToggle(!editToggle)}
                  className={`editBtn ${editToggle && 'editingBtn'}`}
                >
                  <svg viewBox='0 0 24 24' fill='#000000'>
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
                  </svg>{' '}
                  Edit
                </div>
                <div className='personal'>
                  <p>Personal Information </p>
                  <div className='profile_hero_name'>
                    <>
                      <input
                        disabled={editToggle ? false : true}
                        type='text'
                        name='firstName'
                        id='firstName'
                        defaultValue={
                          userData ? userData.firstName : 'First Name'
                        }
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name'
                      />
                      <input
                        disabled={editToggle ? false : true}
                        type='text'
                        name='lastName'
                        id='lastName'
                        defaultValue={
                          userData ? userData.lastName : 'Last Name'
                        }
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Last Name'
                      />
                    </>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className='profile_email'>
                    <p>Email Address </p>
                    <div className='profile_hero_email'>
                      <input
                        disabled={editToggle ? false : true}
                        type='email'
                        name='email'
                        id='email'
                        defaultValue={userData ? userData.email : 'Email'}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                      />
                    </div>
                  </div>
                  <div className='profile_number'>
                    <p>Mobile Number </p>
                    <div className='profile_hero_number'>
                      <input
                        disabled={editToggle ? false : true}
                        type='number'
                        name='number'
                        id='number'
                        defaultValue={
                          userData && userData.number ? userData.number : null
                        }
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder='Number'
                      />
                    </div>
                  </div>
                </div>
                <div className='profile_address'>
                  <p>Address </p>
                  <div className='profile_hero_address'>
                    <input
                      disabled={editToggle ? false : true}
                      type='text'
                      name='address'
                      id='address'
                      defaultValue={
                        userData && userData.address ? userData.address : null
                      }
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder='Address'
                    />
                  </div>
                </div>
              </>
            ) : (
              <Skeleton
                style={{ width: 'auto' }}
                className='profile_page_loader'
              />
            )}
            <div onClick={handleSave} className='saveBtn'>
              <button style={{ visibility: editToggle ? 'visible' : 'hidden' }}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to='/login' />
  );
}
