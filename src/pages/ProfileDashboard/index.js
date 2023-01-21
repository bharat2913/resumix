import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import ProfileSidebar from '../../Components/Profile/ProfileSidebar';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { delete_resume, get_resume_by_userId } from '../../API/index';

export default function ProfileDashboard({ userData, userLoggedIn }) {
  const history = useHistory();
  const userId = localStorage.getItem('id');
  // console.log(pageData.reverse());

  const [loading, setLoading] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [resumes, setResumes] = useState(false);
  const [recentActivity, setRecentActivity] = useState(false);
  useEffect(() => {
    get_resume_by_userId(userId).then((res) => {
      if (res.status === 200 || res.status === 304) {
        setResumes(
          res.data
            .sort((a, b) => a.created < b.created)
            .map((userResume) => ({
              ...userResume,
              documentData: JSON.parse(userResume.documentData),
            }))
        );
        console.log(resumes);
      } else if (res === 'Resume not found') {
        setResumes([]);
      }
    });
  }, []);

  useEffect(() => {
    resumes && setRecentActivity([resumes[0]]);
  }, [resumes]);

  const deleteResume = (id) => {
    setLoading(true);
    // console.log(id);
    delete_resume(id).then((res) => {
      if (res.status === 200 || res.status === 304) {
        console.log('deleted successfully');
        console.log(res);
        get_resume_by_userId(userId).then((resp) => {
          if (resp.status === 200 || resp.status === 304) {
            setLoading(false);
            setShowDeleteToast(true);
            setResumes(
              resp.data.map((userResume) => ({
                ...userResume,
                documentData: JSON.parse(userResume.documentData),
              }))
            );
            console.log(resumes);
          } else if (res === 'Resume not found') {
            setResumes([]);
          }
        });
      } else {
        console.log(res);
      }
    });
  };

  const delete_Modal = (id, type, resume_name) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            style={{ width: '300px', height: '180px' }}
            className='custom-ui delete_modal'
          >
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Are you sure you want to delete the{' '}
                {type === 'resume' ? 'Resume' : ''} {resume_name} ?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  if (type === 'resume') {
                    deleteResume(id);
                  }

                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return userLoggedIn ? (
    <div className='profile'>
      <ProfileHeader userLoggedIn={userLoggedIn} userData={userData} />
      <div className='profile_main'>
        <ProfileSidebar
          page={'dashboard'}
          userLoggedIn={userLoggedIn}
          userData={userData}
        />
        {loading && (
          <div
            className='builder_loaderWrapper'
            style={{ position: 'absolute' }}
          >
            <ThreeDots
              style={{ top: '3rem' }}
              wrapperClass='builder_loader builder_profile_loader'
            />
          </div>
        )}
        <ToastContainer
          style={{ width: '210px', marginTop: '4rem' }}
          className='p-3 save_toast'
          position={'top-center'}
        >
          <Toast
            onClose={() => setShowDeleteToast(false)}
            show={showDeleteToast}
            delay={3000}
            autohide
          >
            <Toast.Body>Deleted Successfully!</Toast.Body>
          </Toast>
        </ToastContainer>
        <div className='dashboard_wrapper'>
          <div className='recent_activity'>
            <h6>
              <svg>
                <path d='M12.575 20.5Q10.95 20.5 9.438 19.9Q7.925 19.3 6.7 18.075L7.75 17.025Q8.75 17.975 10.012 18.488Q11.275 19 12.625 19Q15.525 19 17.575 16.95Q19.625 14.9 19.625 12Q19.625 9.1 17.575 7.05Q15.525 5 12.625 5Q9.725 5 7.675 7.025Q5.625 9.05 5.625 12.125L7.4 10.325L8.45 11.375L4.875 14.975L1.275 11.375L2.35 10.325L4.125 12.125Q4.125 10.3 4.787 8.725Q5.45 7.15 6.6 5.987Q7.75 4.825 9.3 4.162Q10.85 3.5 12.625 3.5Q14.375 3.5 15.912 4.175Q17.45 4.85 18.613 6Q19.775 7.15 20.45 8.7Q21.125 10.25 21.125 12Q21.125 13.75 20.45 15.3Q19.775 16.85 18.613 18Q17.45 19.15 15.9 19.825Q14.35 20.5 12.575 20.5ZM15.6 16.025 11.875 12.3V7H13.375V11.7L16.65 14.975Z' />
              </svg>
              Recent Activity
            </h6>

            <div
              className='recent_activity_row'
              style={{ display: recentActivity ? 'flex' : 'block' }}
            >
              {!recentActivity ? (
                <Skeleton />
              ) : recentActivity ? (
                recentActivity.map(
                  (page, index) =>
                    page && (
                      <div className='activity'>
                        {page.documentData.type === 'resume' ? (
                          <img
                            src={`/assets/images/Templates/${page.documentData.templateName}.png`}
                            alt={page.documentData.templateName}
                          />
                        ) : page.documentData.type === 'cover_letter' ? (
                          <img
                            src={`/assets/images/CoverLetters/Designs/${page.documentData.design}.png`}
                            alt={page.documentData.design}
                          />
                        ) : null}
                        <div className='activity_details'>
                          <div className='activity_heading'>
                            {page.documentData.type === 'resume'
                              ? 'Resume'
                              : page.documentData.type === 'cover_letter'
                              ? 'Cover Letter'
                              : page.documentData.type === 'linkedin_headline'
                              ? 'LinkedIn Headline'
                              : page.documentData.type === 'linkedin_summary'
                              ? 'LinkedIn Summary'
                              : null}
                          </div>
                          <div>
                            Created On: <span>{page.documentData.date}</span>
                          </div>
                          <div>
                            Name: <span>{page.documentData.document_name}</span>
                          </div>

                          <div
                            onClick={() =>
                              page.documentData.type === 'resume'
                                ? history.push(
                                    `/builder/${page.documentData.templateName}/${page.id}`
                                  )
                                : page.documentData.type === 'cover_letter'
                                ? history.push(
                                    `/CoverLetter/${page.documentData.category}/${page.documentData.design}/${page.id}`
                                  )
                                : page.documentData.type === 'linkedin_headline'
                                ? history.push(
                                    `/linkedIn_headline/edit/${page.id}`
                                  )
                                : page.documentData.type === 'linkedin_summary'
                                ? history.push(`/linkedIn/edit/${page.id}`)
                                : null
                            }
                            className='action_btn'
                          >
                            <svg width={'20px'} viewBox='0 0 24 24'>
                              <path d='M0 0h24v24H0V0z' fill='none' />
                              <path
                                fill='#fff'
                                d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'
                              />
                            </svg>
                            Edit
                          </div>
                          <div
                            onClick={() => {
                              delete_Modal(
                                page.id,
                                page.documentData.type,
                                page.documentData.document_name
                              );
                            }}
                            className='action_btn'
                          >
                            <svg
                              className='h-6 w-6'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='#fff'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                              />
                            </svg>
                            Delete
                          </div>
                        </div>
                      </div>
                    )
                )
              ) : (
                <div>No Recent Activity</div>
              )}
            </div>
          </div>
          <div className='dashboard_row'>
            <div className='total_counter'>
              <div className='total_counter_btn total_resumes'>
                <div className='total'>Total Resumes</div>
                <div className='icon'>
                  <div>
                    <svg data-name='Layer 1' viewBox='0 0 512 512'>
                      <path d='M128.14,263.5a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,263.5Zm0,135a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,398.5Zm0-90a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,308.5Zm0,135a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,443.5ZM262.52,202.26v-5.63A47.44,47.44,0,0,0,224,150.07l-9.25-1.76a42.62,42.62,0,0,0,15.79-33.12V92.79a20.14,20.14,0,0,0-4.16-12.25,18.52,18.52,0,0,0,4.16-11.71V50.9a7.5,7.5,0,0,0-7.5-7.5H163.8c-11,0-18.67,10.68-18.67,20.27V91.16a6.84,6.84,0,0,0,.05.79c0,.28-.05.56-.05.84v22.4a42.62,42.62,0,0,0,15.79,33.12l-9.25,1.76a47.44,47.44,0,0,0-38.53,46.56v5.63a29,29,0,0,0,29,29h91.38A29,29,0,0,0,262.52,202.26ZM160.13,63.67c0-2.49,2.19-5.27,3.67-5.27h51.73V68.83a3.68,3.68,0,0,1-3.67,3.67,6.85,6.85,0,0,0-.79,0c-.28,0-.56,0-.84,0h-44.8a20.23,20.23,0,0,0-5.3.72Zm0,51.52V92.79a5.3,5.3,0,0,1,5.3-5.29h44.8a5.3,5.3,0,0,1,5.3,5.29v22.4a27.7,27.7,0,1,1-55.4,0Zm34.92,42.08v2.1a7.22,7.22,0,1,1-14.44,0v-2.1a42.35,42.35,0,0,0,14.44,0Zm-66.91,45v-5.63a32.44,32.44,0,0,1,26.33-31.83l11.38-2.16a22.22,22.22,0,0,0,44,0l11.38,2.16a32.44,32.44,0,0,1,26.33,31.83v5.63a14,14,0,0,1-14,14H142.14A14,14,0,0,1,128.14,202.26Zm0,151.24a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,353.5ZM391.36,216.27H291.7a7.5,7.5,0,0,0,0,15h99.66a7.5,7.5,0,0,0,0-15Zm0-30H291.7a7.5,7.5,0,0,0,0,15h99.66a7.5,7.5,0,0,0,0-15Zm0-141.27H291.7a7.5,7.5,0,0,0,0,15h99.66a7.5,7.5,0,0,0,0-15ZM291.7,90h54.66a7.5,7.5,0,0,0,0-15H291.7a7.5,7.5,0,0,0,0,15ZM406.36,0H105.64a37.54,37.54,0,0,0-37.5,37.5v437a37.54,37.54,0,0,0,37.5,37.5H406.36a37.54,37.54,0,0,0,37.5-37.5V37.5A37.54,37.54,0,0,0,406.36,0Zm22.5,474.5a22.52,22.52,0,0,1-22.5,22.5H105.64a22.52,22.52,0,0,1-22.5-22.5V37.5A22.52,22.52,0,0,1,105.64,15H406.36a22.52,22.52,0,0,1,22.5,22.5Zm-37.5-76H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0,45H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0-180H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0,90H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0-45H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Z' />
                    </svg>
                  </div>
                </div>
                <div className='count' style={{ position: 'relative' }}>
                  {!resumes ? (
                    <div className='builder_loaderWrapper'>
                      <ThreeDots
                        wrapperStyle={{ top: '-3rem', right: '0' }}
                        wrapperClass='builder_loader builder_profile_loader'
                      />
                    </div>
                  ) : (
                    resumes.length
                  )}
                </div>
              </div>
            </div>
            <div className='create_new_actions'>
              <h6>
                <svg data-name='Layer 1' viewBox='0 0 32 32'>
                  <path d='M20,7.5A2.5,2.5,0,0,1,17.5,5V1.5H6A1.5,1.5,0,0,0,4.5,3V27A1.5,1.5,0,0,0,6,28.5H16.53a6.44,6.44,0,0,1-1-3.5A6.51,6.51,0,0,1,22,18.5a6.16,6.16,0,0,1,1.5.18V7.5Zm-6,12H8a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Zm6-4H8a.5.5,0,0,1,0-1H20a.5.5,0,0,1,0,1Zm0-4H8a.5.5,0,0,1,0-1H20a.5.5,0,0,1,0,1Z' />
                  <path d='M23.85 19.82l-.14-.05A5.67 5.67 0 0 0 22 19.5a5.5 5.5 0 0 0-4.18 9.07l.06.07a5.5 5.5 0 1 0 6-8.82zM24 25.5H22.5V27a.5.5 0 0 1-1 0V25.5H19.88A.5.5 0 0 1 19.5 25a.5.5 0 0 1 .5-.5h1.5V23a.48.48 0 0 1 .37-.48l.13 0a.5.5 0 0 1 .5.5v1.5H24a.5.5 0 0 1 0 1zM22.79 6.5H20A1.5 1.5 0 0 1 18.5 5V2.21z' />
                </svg>
                Create New
              </h6>
              <div className='create_new_actions_wrapper'>
                <Link to='/chooseTemplate' className='create_new_action'>
                  <svg data-name='Layer 1' viewBox='0 0 512 512'>
                    <path d='M128.14,263.5a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,263.5Zm0,135a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,398.5Zm0-90a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,308.5Zm0,135a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,443.5ZM262.52,202.26v-5.63A47.44,47.44,0,0,0,224,150.07l-9.25-1.76a42.62,42.62,0,0,0,15.79-33.12V92.79a20.14,20.14,0,0,0-4.16-12.25,18.52,18.52,0,0,0,4.16-11.71V50.9a7.5,7.5,0,0,0-7.5-7.5H163.8c-11,0-18.67,10.68-18.67,20.27V91.16a6.84,6.84,0,0,0,.05.79c0,.28-.05.56-.05.84v22.4a42.62,42.62,0,0,0,15.79,33.12l-9.25,1.76a47.44,47.44,0,0,0-38.53,46.56v5.63a29,29,0,0,0,29,29h91.38A29,29,0,0,0,262.52,202.26ZM160.13,63.67c0-2.49,2.19-5.27,3.67-5.27h51.73V68.83a3.68,3.68,0,0,1-3.67,3.67,6.85,6.85,0,0,0-.79,0c-.28,0-.56,0-.84,0h-44.8a20.23,20.23,0,0,0-5.3.72Zm0,51.52V92.79a5.3,5.3,0,0,1,5.3-5.29h44.8a5.3,5.3,0,0,1,5.3,5.29v22.4a27.7,27.7,0,1,1-55.4,0Zm34.92,42.08v2.1a7.22,7.22,0,1,1-14.44,0v-2.1a42.35,42.35,0,0,0,14.44,0Zm-66.91,45v-5.63a32.44,32.44,0,0,1,26.33-31.83l11.38-2.16a22.22,22.22,0,0,0,44,0l11.38,2.16a32.44,32.44,0,0,1,26.33,31.83v5.63a14,14,0,0,1-14,14H142.14A14,14,0,0,1,128.14,202.26Zm0,151.24a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,128.14,353.5ZM391.36,216.27H291.7a7.5,7.5,0,0,0,0,15h99.66a7.5,7.5,0,0,0,0-15Zm0-30H291.7a7.5,7.5,0,0,0,0,15h99.66a7.5,7.5,0,0,0,0-15Zm0-141.27H291.7a7.5,7.5,0,0,0,0,15h99.66a7.5,7.5,0,0,0,0-15ZM291.7,90h54.66a7.5,7.5,0,0,0,0-15H291.7a7.5,7.5,0,0,0,0,15ZM406.36,0H105.64a37.54,37.54,0,0,0-37.5,37.5v437a37.54,37.54,0,0,0,37.5,37.5H406.36a37.54,37.54,0,0,0,37.5-37.5V37.5A37.54,37.54,0,0,0,406.36,0Zm22.5,474.5a22.52,22.52,0,0,1-22.5,22.5H105.64a22.52,22.52,0,0,1-22.5-22.5V37.5A22.52,22.52,0,0,1,105.64,15H406.36a22.52,22.52,0,0,1,22.5,22.5Zm-37.5-76H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0,45H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0-180H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0,90H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Zm0-45H167.72a7.5,7.5,0,0,0,0,15H391.36a7.5,7.5,0,0,0,0-15Z' />
                  </svg>
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to='/login' />
  );
}
