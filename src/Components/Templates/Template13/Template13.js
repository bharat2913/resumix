import React, { useState, useEffect } from 'react';

import BuilderEditor from '../../BuilderWrapper/BuilderEditor/BuilderEditor';
import Accordion from 'react-bootstrap/Accordion';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// // console.log(array_move(array, 1, 2));

const Template13 = ({
  showProtip,
  readOnly,
  mainPanelBgColor,
  sidePanelTextColor,
  sidePanelBgColor,
  page,
  rightMainRef,
  setDataUpdatableLeft,
  dataUpdatableLeft,
  dataUpdatableRight,
  setDataUpdatableRight,
  docummentMargin,
  documentHeadingTextStyle,
  documentBodyTextStyle,
  documentBodyTextSize,
  headingTextStyleConditions,
  bodyTextStyleConditions,
  headingTextSizeConditions,
  bodyTextSizeConditions,
}) => {
  const [, setTemp] = useState();
  const [, setTemp2] = useState();

  function array_copy(arr, index) {
    arr.splice(index + 1, 0, arr[index]);
    return arr;
  }

  function arrayMove(arr, fromIndex, toIndex, position) {
    var element = arr[fromIndex];
    if (position === 'lastElement') {
      arr[fromIndex].firstPage = false;
      arr[fromIndex].secondPage = true;
      arr[toIndex].firstPage = true;
      arr[toIndex].secondPage = false;
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
      // setDataUpdatableRight(arr)
      // console.log(arr[fromIndex], fromIndex);
      // console.log(arr[toIndex], toIndex);
    } else if (position === 'firstElement') {
      arr[fromIndex].firstPage = true;
      arr[fromIndex].secondPage = false;
      arr[toIndex].firstPage = false;
      arr[toIndex].secondPage = true;
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
      // setDataUpdatableRight(arr)
      // console.log(arr[fromIndex], fromIndex);
      // console.log(arr[toIndex], toIndex);
    } else {
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    }

    return arr;
  }

  const delete_Modal = (arr, index, side) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <div>
              <h1>Are you sure?</h1>
              <p>You want to delete this this section? You can't undo this</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  // // console.log(data)
                  // data.ref.current.style.display = 'none'
                  if (index > -1) {
                    arr.splice(index, 1);
                    if (side === 'right') {
                      setDataUpdatableRight(arr);
                      setFilteredArray(arr);
                      dataOnRight();
                    } else if (side === 'left') {
                      setDataUpdatableLeft(arr);
                      dataOnLeft();
                    }
                    // dataOnRight()
                    // dataOnLeft()
                    setTemp(index + 1);
                    // // console.log(arr,index)
                  }
                  onClose();
                }}
              >
                Yes, Delete it!
              </button>
            </div>
          </div>
        );
      },
    });
  };

  const delete_subsection_Modal = (arr, index, side) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <div>
              <h1>Are you sure?</h1>
              <p>You want to delete this this section? You can't undo this</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  // // console.log(data)
                  // data.ref.current.style.display = 'none'
                  if (index > -1) {
                    arr.splice(index, 1);
                    dataOnRight();
                    dataOnLeft();
                    if (side === 'right') {
                      // setDataUpdatableRight(arr);
                      // setFilteredArray(arr)
                    } else if (side === 'left') {
                      // setDataUpdatableLeft(arr);
                    }
                    // dataOnRight()
                    // dataOnLeft()
                    setTemp(index + 1);
                    // // console.log(arr,index)
                  }
                  onClose();
                }}
              >
                Yes, Delete it!
              </button>
            </div>
          </div>
        );
      },
    });
  };

  const proTips_Modal = (heading, body) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='proTips_Modal_Container'>
            <div className='proTips_Modal'>
              <div className='proTips_ModalHeader'>
                <img src='/assets/images/logo.png' alt='logo' />
                <div>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                    fill='#000000'
                  >
                    <rect fill='none' height='24' width='24' y='0' />
                    <path d='M7,20h4c0,1.1-0.9,2-2,2S7,21.1,7,20z M5,19h8v-2H5V19z M16.5,9.5c0,3.82-2.66,5.86-3.77,6.5H5.27 C4.16,15.36,1.5,13.32,1.5,9.5C1.5,5.36,4.86,2,9,2S16.5,5.36,16.5,9.5z M14.5,9.5C14.5,6.47,12.03,4,9,4S3.5,6.47,3.5,9.5 c0,2.47,1.49,3.89,2.35,4.5h6.3C13.01,13.39,14.5,11.97,14.5,9.5z M21.37,7.37L20,8l1.37,0.63L22,10l0.63-1.37L24,8l-1.37-0.63L22,6 L21.37,7.37z M19,6l0.94-2.06L22,3l-2.06-0.94L19,0l-0.94,2.06L16,3l2.06,0.94L19,6z' />
                  </svg>
                  <span>Pro Tips</span>
                </div>
                <div className='proTips_Modal_close' onClick={onClose}>
                  x
                </div>
              </div>
              <div className='proTips_ModalWrapper'>
                <Accordion
                  className='proTips_Accordian'
                  defaultActiveKey='0'
                  flush
                >
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='0'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      {heading}
                    </Accordion.Header>
                    <Accordion.Body
                      style={{ maxHeight: 'inherit', overflowY: 'auto' }}
                      className='proTips_Accordian_Body'
                    >
                      {body}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  const handleChangeSkill = (e, data, onClose) => {
    e.preventDefault();

    // // console.log(e)
    for (let i = 0; i < data.length; i++) {
      // // console.log(e.target[i].value)
      if (e.target[i].value !== '') {
        data[i].expertice = Number(e.target[i].value);
        setTemp(i + 143);
      }
    }
    dataOnRight();
    dataOnLeft();
    onClose();
    // // console.log(data)
  };

  let expertice = null;
  const changeExperticeModal = (data) => {
    // console.log(data);
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui changeSkillLevelModal_wrapper '>
            <form
              onSubmit={(e) => handleChangeSkill(e, data, onClose)}
              className='changeSkillLevelModal'
            >
              <div className='changeSkillLevelModal_header'>
                <h1>Change Skill Level</h1>

                <div
                  style={{ cursor: 'pointer' }}
                  className='changeSkillLevelModal_close'
                  onClick={onClose}
                >
                  X
                </div>
              </div>

              {/* <input placeholder='none' onChange={e => expertice = e.target.value}  type='number' name='expertice' id='expertice' /> 7 */}
              <div className='skillsModal'>
                {data.map((skill) => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '75%' }}>
                      <BuilderEditor
                        readOnly={readOnly}
                        content={skill.name}
                        setEditorData={skill.setName}
                      />
                    </div>
                    <div
                      style={{ cursor: 'pointer' }}
                      className='skill_inputFeild'
                    >
                      {/* <div style={{width: skill.expertice+'%'}} className='progressBarCompleted'> </div> */}
                      {/* <input type='number' name='skill_level' placeholder={skill.expertice} />% */}
                      <input
                        placeholder={skill.expertice}
                        onChange={(e) => e.target.value}
                        type='number'
                        name={skill.title}
                        id='expertice'
                      />
                      %
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <button
                  type='submit'
                  // onClick={(e) => {
                  //     // console.log(e)
                  //     onClose();
                  // }}
                >
                  Yes, Change it!
                </button>
              </div>
            </form>
          </div>
        );
      },
    });
  };
  const [filteredArray, setFilteredArray] = useState(
    dataUpdatableRight.filter((e) =>
      page === 1
        ? e.firstPage === true
        : page === 2
        ? e.secondPage === true
        : page === 3
        ? e.thirdPage === true
        : page === 4
        ? e.thirdPage === false
        : null
    )
  );

  function dataOnRight() {
    return dataUpdatableRight
      .filter((e) =>
        page === 1
          ? e.firstPage === true
          : page === 2
          ? e.secondPage === true
          : page === 3
          ? e.thirdPage === true
          : page === 4
          ? e.thirdPage === false
          : null
      )
      .map((data, index) => (
        // filteredArray.map((data, index) => (
        <>
          {
            <div
              style={{ display: index === 0 ? 'none' : null }}
              key={data.key}
              ref={data.ref}
              className={data.class}
            >
              {/* <div className="blankTemplate_header section">
                        <BuilderEditor readOnly={readOnly} content = {main_header} />
                    </div> */}
              <div className='outerIconWrapper'>
                <span
                  // className={`${index === 0 ? 'displayNone' : null}`}
                  onClick={(e) => {
                    const fromIndex = dataUpdatableRight.findIndex(
                      (e) => e.key === data.key
                    );
                    const toIndex = fromIndex - 1;
                    if (index === 0 && page !== 0) {
                      // // console.log('here')
                      const arr = arrayMove(
                        dataUpdatableRight,
                        fromIndex,
                        toIndex,
                        'firstElement'
                      );
                      setDataUpdatableRight(arr);
                    } else {
                      const arr = arrayMove(
                        dataUpdatableRight,
                        fromIndex,
                        toIndex,
                        'null'
                      );
                      setDataUpdatableRight(arr);
                    }
                    dataOnRight();
                    setTemp2(index + 1);
                    // // console.log(dataUpdatableRight)
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#000000'
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' />
                  </svg>
                </span>
                <span
                  className={`${
                    index >= dataUpdatableRight.length - 1
                      ? 'displayNone'
                      : null
                  }`}
                  onClick={(e) => {
                    const fromIndex = dataUpdatableRight.findIndex(
                      (e) => e.key === data.key
                    );
                    const toIndex = fromIndex + 1;
                    if (filteredArray.length - 1 === index) {
                      // // console.log('here')
                      const arr = arrayMove(
                        dataUpdatableRight,
                        fromIndex,
                        toIndex,
                        'lastElement'
                      );
                      setDataUpdatableRight(arr);
                      setFilteredArray(arr);
                    } else {
                      const arr = arrayMove(
                        dataUpdatableRight,
                        fromIndex,
                        toIndex,
                        'null'
                      );
                      setDataUpdatableRight(arr);
                      setFilteredArray(arr);
                    }
                    dataOnRight();
                    setTemp2(index + 1);
                    // // console.log(dataUpdatableRight)
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#000000'
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' />
                  </svg>
                </span>
              </div>
              <div className='copyDelIconWrapper'>
                <span
                  onClick={(e) => {
                    const findIndex = dataUpdatableRight.findIndex(
                      (e) => e.key === data.key
                    );
                    const arr = array_copy(dataUpdatableRight, findIndex);
                    setDataUpdatableRight(arr);
                    setFilteredArray(arr);
                    dataOnRight();
                    setTemp(index + 1);
                    // // console.log(arr[findIndex])
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='#fff'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    />
                  </svg>
                </span>
                {/* <span onClick={(e) => {delete_Modal(data); // console.log(data)}}> */}
                <span
                  onClick={(e) => {
                    const findIndex = dataUpdatableRight.findIndex(
                      (e) => e.key === data.key
                    );
                    delete_Modal(dataUpdatableRight, findIndex, 'right');
                    dataOnRight();
                    // // console.log(data, data.key);
                    // // console.log(dataUpdatableRight.findIndex(e => e.key === data.key))
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
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
                </span>
              </div>
              <div className='section'>
                {data.header ? null : data.type ===
                  'skills_certificate' ? null : data.heading ===
                  'none' ? null : (
                  <div
                    name='main_section_heading'
                    id={data.id}
                    rows='1'
                    placeholder='Enter'
                    style={{ color: sidePanelTextColor }}
                    className={`section_heading  
                        ${headingTextStyleConditions}

                            ${headingTextSizeConditions}
                            
                        `}
                  >
                    {/* {index} */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '2rem',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'start',
                            flexDirection: 'row-reverse',
                          }}
                        >
                          <BuilderEditor
                            readOnly={readOnly}
                            key={index + 1}
                            content={data.heading}
                            setEditorData={data.setHeading}
                          />
                        </div>
                      </div>
                      <div
                        style={{ borderBottom: '1px solid', width: '80%' }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* <div className='Template_4_divider_main'></div> */}

                {data.header ? null : data.description ===
                  'none' ? null : data.type === 'education' ? (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    {data.description.map((descp, index) => (
                      <div
                        style={{
                          padding: '0 1rem',
                          width: '33%',
                          borderLeft:
                            index === 0 || index === 2
                              ? null
                              : '1px solid #664C41',
                          borderRight:
                            index === 0 || index === 2
                              ? null
                              : '1px solid #664C41',
                        }}
                        key={descp.key}
                        className='template_1_subSection section'
                      >
                        <div className='subsectionCopyDelIconWrapper'>
                          <span
                            title='Delete Sub Section'
                            onClick={(e) => {
                              // dataOnRight();
                              const findIndex = data.description.findIndex(
                                (e) => e.key === descp.key
                              );
                              delete_subsection_Modal(
                                data.description,
                                findIndex,
                                'right'
                              );
                              dataOnRight();
                              setTemp(index + 1);
                            }}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
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
                          </span>

                          <span
                            title='Duplicate Sub Section'
                            onClick={(e) => {
                              const findIndex = data.description.findIndex(
                                (e) => e.key === descp.key
                              );
                              const arr = array_copy(
                                data.description,
                                findIndex
                              );
                              // array_copy(data.description, findIndex);
                              setDataUpdatableRight(arr);
                              setFilteredArray(arr);
                              dataOnRight();
                              setTemp(index + 1);
                              // // console.log(arr[findIndex])
                            }}
                          >
                            <svg
                              style={{ maxWidth: '18px' }}
                              version='1.1'
                              className='h-6 w-6'
                              id='Layer_1'
                              xmlns='http://www.w3.org/2000/svg'
                              xmlnsXlink='http://www.w3.org/1999/xlink'
                              x='0px'
                              y='0px'
                              viewBox='0 0 64 64'
                              enable-background='new 0 0 64 64'
                              xmlSpace='preserve'
                            >
                              <g id='Text-files'>
                                <path
                                  d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                    C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                    c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                    h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                    C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                    c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                    c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                    M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                    c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                    c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                    h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                                />
                                <path
                                  d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                    c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                    C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                                />
                                <path
                                  d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                    c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                    C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                                />
                                <path
                                  d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                    s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                    S39.16465,29.4603004,38.6031494,29.4603004z'
                                />
                                <path
                                  d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                    s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                    S29.0059509,37.5872993,28.4444485,37.5872993z'
                                />
                              </g>
                            </svg>
                          </span>
                        </div>

                        <div
                          key={index + 1}
                          className={`template_2_description_with_subsection description
                                        ${bodyTextStyleConditions}

                                        ${bodyTextSizeConditions}
                                        `}
                          style={{ color: sidePanelTextColor }}
                        >
                          <div className='template_2_subsection_main'>
                            <div>
                              <BuilderEditor
                                readOnly={readOnly}
                                content={descp.heading}
                                setEditorData={descp.setHeading}
                              />
                            </div>
                            <div>
                              <BuilderEditor
                                readOnly={readOnly}
                                content={descp.name}
                                setEditorData={descp.setName}
                              />
                            </div>
                            <div>
                              <BuilderEditor
                                readOnly={readOnly}
                                content={descp.location}
                                setEditorData={descp.setLocation}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : data.type === 'experience' ? (
                  data.description.map((descp, index) => (
                    <div
                      key={descp.key}
                      className='template_1_subSection section'
                    >
                      <div className='subsectionCopyDelIconWrapper'>
                        <span
                          title='Delete Sub Section'
                          onClick={(e) => {
                            // dataOnRight();
                            const findIndex = data.description.findIndex(
                              (e) => e.key === descp.key
                            );
                            delete_subsection_Modal(
                              data.description,
                              findIndex,
                              'right'
                            );
                            dataOnRight();
                            setTemp(index + 1);
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
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
                        </span>

                        <span
                          title='Duplicate Sub Section'
                          onClick={(e) => {
                            const findIndex = data.description.findIndex(
                              (e) => e.key === descp.key
                            );
                            const arr = array_copy(data.description, findIndex);
                            // array_copy(data.description, findIndex);
                            setDataUpdatableRight(arr);
                            setFilteredArray(arr);
                            dataOnRight();
                            setTemp(index + 1);
                            // // console.log(arr[findIndex])
                          }}
                        >
                          <svg
                            style={{ maxWidth: '18px' }}
                            version='1.1'
                            className='h-6 w-6'
                            id='Layer_1'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='0 0 64 64'
                            enable-background='new 0 0 64 64'
                            xmlSpace='preserve'
                          >
                            <g id='Text-files'>
                              <path
                                d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                              />
                              <path
                                d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                              />
                              <path
                                d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                              />
                              <path
                                d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                S39.16465,29.4603004,38.6031494,29.4603004z'
                              />
                              <path
                                d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                S29.0059509,37.5872993,28.4444485,37.5872993z'
                              />
                            </g>
                          </svg>
                        </span>
                      </div>

                      <div
                        key={index + 1}
                        className={`template_5_description_with_subsection description
                                    ${bodyTextStyleConditions}

                                    ${bodyTextSizeConditions}
                                    `}
                        style={{ color: sidePanelTextColor }}
                      >
                        <div
                          style={{ width: '20%' }}
                          className='template_5_subsection_sidebar'
                        >
                          <div>
                            <BuilderEditor
                              readOnly={readOnly}
                              content={descp.tenure}
                              setEditorData={descp.setTenure}
                            />
                          </div>
                          <div>
                            <BuilderEditor
                              readOnly={readOnly}
                              content={descp.location}
                              setEditorData={descp.setLocation}
                            />
                          </div>
                        </div>
                        <div
                          style={{ width: '80%' }}
                          className='template_5_subsection_main'
                        >
                          <div>
                            <BuilderEditor
                              readOnly={readOnly}
                              content={descp.heading}
                              setEditorData={descp.setHeading}
                            />
                          </div>
                          <div>
                            <BuilderEditor
                              readOnly={readOnly}
                              content={descp.description}
                              setEditorData={descp.setDescription}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : data.type === 'skills_certificate' ? (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                    }}
                  >
                    <div style={{ width: '25%' }}>
                      {data.skills.map((skillsData, index) => (
                        <div className='section'>
                          <div
                            name='main_section_heading'
                            id={data.id}
                            rows='1'
                            placeholder='Enter'
                            style={{ color: sidePanelTextColor }}
                            className={`section_heading  
                                            ${headingTextStyleConditions}

                                                ${headingTextSizeConditions}
                                                
                                            `}
                          >
                            {/* {index} */}
                            {/* <BuilderEditor readOnly={readOnly} key={index+1} content={skillsData.heading} setEditorData={skillsData.setHeading} /> */}
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '2rem',
                              }}
                            >
                              <div>
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    alignItems: 'start',
                                    flexDirection: 'row-reverse',
                                  }}
                                >
                                  <BuilderEditor
                                    readOnly={readOnly}
                                    key={index + 1}
                                    content={skillsData.heading}
                                    setEditorData={skillsData.setHeading}
                                  />
                                </div>
                              </div>
                              <div
                                style={{
                                  borderBottom: '1px solid',
                                  width: '45%',
                                }}
                              ></div>
                            </div>
                          </div>

                          <div>
                            {skillsData.description.map((descp, index) => (
                              <div
                                key={descp.key}
                                className='template_1_subSection section'
                              >
                                <div className='subsectionCopyDelIconWrapper'>
                                  <span
                                    title='Delete Sub Section'
                                    onClick={(e) => {
                                      // dataOnRight();
                                      const findIndex =
                                        skillsData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      delete_subsection_Modal(
                                        skillsData.description,
                                        findIndex,
                                        'right'
                                      );
                                      dataOnRight();
                                      setTemp(index + 1);
                                    }}
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
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
                                  </span>

                                  <span
                                    title='Duplicate Sub Section'
                                    onClick={(e) => {
                                      const findIndex =
                                        skillsData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      const arr = array_copy(
                                        skillsData.description,
                                        findIndex
                                      );
                                      // array_copy(data.description, findIndex);
                                      setDataUpdatableRight(arr);
                                      setFilteredArray(arr);
                                      dataOnRight();
                                      setTemp(index + 1);
                                      // // console.log(arr[findIndex])
                                    }}
                                  >
                                    <svg
                                      style={{ maxWidth: '18px' }}
                                      version='1.1'
                                      className='h-6 w-6'
                                      id='Layer_1'
                                      xmlns='http://www.w3.org/2000/svg'
                                      xmlnsXlink='http://www.w3.org/1999/xlink'
                                      x='0px'
                                      y='0px'
                                      viewBox='0 0 64 64'
                                      enable-background='new 0 0 64 64'
                                      xmlSpace='preserve'
                                    >
                                      <g id='Text-files'>
                                        <path
                                          d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                                        C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                                        c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                                        h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                                        C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                                        c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                                        c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                                        M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                                        c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                                        c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                                        h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                                        />
                                        <path
                                          d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                                        c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                                        C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                                        />
                                        <path
                                          d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                                        c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                                        C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                                        />
                                        <path
                                          d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                                        s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                                        S39.16465,29.4603004,38.6031494,29.4603004z'
                                        />
                                        <path
                                          d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                                        s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                                        S29.0059509,37.5872993,28.4444485,37.5872993z'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>

                                <div
                                  key={index + 1}
                                  className={`template_2_description_with_subsection description
                                                            ${bodyTextStyleConditions}

                                                            ${bodyTextSizeConditions}
                                                            `}
                                  style={{ color: sidePanelTextColor }}
                                >
                                  <BuilderEditor
                                    readOnly={readOnly}
                                    content={descp.description}
                                    setEditorData={descp.setDescription}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        width: '75%',
                        marginLeft: '1rem',
                        borderLeft: '1px solid #664C41',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {data.certificate.map((certificateData, index) => (
                        <div className='section'>
                          <div
                            name='main_section_heading'
                            id={data.id}
                            rows='1'
                            placeholder='Enter'
                            style={{ color: sidePanelTextColor }}
                            className={`section_heading  
                                            ${headingTextStyleConditions}

                                                ${headingTextSizeConditions}
                                                
                                            `}
                          >
                            {/* {index} */}
                            {/* <BuilderEditor readOnly={readOnly} key={index+1} content={certificateData.heading} setEditorData={certificateData.setHeading} /> */}
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '2rem',
                              }}
                            >
                              <div>
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    alignItems: 'start',
                                    flexDirection: 'row-reverse',
                                  }}
                                >
                                  <BuilderEditor
                                    readOnly={readOnly}
                                    key={index + 1}
                                    content={certificateData.heading}
                                    setEditorData={certificateData.setHeading}
                                  />
                                </div>
                              </div>
                              <div
                                style={{
                                  borderBottom: '1px solid',
                                  width: '68%',
                                }}
                              ></div>
                            </div>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'start',
                              alignItems: 'start',
                              flexWrap: 'wrap',
                              gap: '1rem',
                            }}
                          >
                            {certificateData.description.map((descp, index) => (
                              <div
                                style={{
                                  borderLeft:
                                    index === 0 ? null : '1px solid #664C41',
                                }}
                                key={descp.key}
                                className='template_1_subSection section'
                              >
                                <div className='subsectionCopyDelIconWrapper'>
                                  <span
                                    title='Delete Sub Section'
                                    onClick={(e) => {
                                      // dataOnRight();
                                      const findIndex =
                                        certificateData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      delete_subsection_Modal(
                                        certificateData.description,
                                        findIndex,
                                        'right'
                                      );
                                      dataOnRight();
                                      setTemp(index + 1);
                                    }}
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
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
                                  </span>

                                  <span
                                    title='Duplicate Sub Section'
                                    onClick={(e) => {
                                      const findIndex =
                                        certificateData.description.findIndex(
                                          (e) => e.key === descp.key
                                        );
                                      const arr = array_copy(
                                        certificateData.description,
                                        findIndex
                                      );
                                      // array_copy(data.description, findIndex);
                                      setDataUpdatableRight(arr);
                                      setFilteredArray(arr);
                                      dataOnRight();
                                      setTemp(index + 1);
                                      // // console.log(arr[findIndex])
                                    }}
                                  >
                                    <svg
                                      style={{ maxWidth: '18px' }}
                                      version='1.1'
                                      className='h-6 w-6'
                                      id='Layer_1'
                                      xmlns='http://www.w3.org/2000/svg'
                                      xmlnsXlink='http://www.w3.org/1999/xlink'
                                      x='0px'
                                      y='0px'
                                      viewBox='0 0 64 64'
                                      enable-background='new 0 0 64 64'
                                      xmlSpace='preserve'
                                    >
                                      <g id='Text-files'>
                                        <path
                                          d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                                        C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                                        c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                                        h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                                        C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                                        c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                                        c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                                        M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                                        c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                                        c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                                        h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                                        />
                                        <path
                                          d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                                        c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                                        C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                                        />
                                        <path
                                          d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                                        c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                                        C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                                        />
                                        <path
                                          d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                                        s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                                        S39.16465,29.4603004,38.6031494,29.4603004z'
                                        />
                                        <path
                                          d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                                        s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                                        S29.0059509,37.5872993,28.4444485,37.5872993z'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>

                                <div
                                  key={index + 1}
                                  className={`template_2_description_with_subsection description
                                                            ${bodyTextStyleConditions}

                                                            ${bodyTextSizeConditions}
                                                            `}
                                  style={{ color: sidePanelTextColor }}
                                >
                                  <BuilderEditor
                                    readOnly={readOnly}
                                    content={descp.description}
                                    setEditorData={descp.setDescription}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : data.type === 'section' ? (
                  // data.description.map((descp, index) => (
                  <div
                    key={index + 1}
                    className={`template_2_description description
                                    ${bodyTextStyleConditions}
    
                                    ${bodyTextSizeConditions}
                                    `}
                    style={{ color: sidePanelTextColor }}
                  >
                    {/* <div> */}
                    <BuilderEditor
                      readOnly={readOnly}
                      content={data.description}
                      setEditorData={data.setDescription}
                    />
                    {/* </div> */}
                  </div>
                ) : (
                  // ))
                  data.description.map((descp, index) => (
                    <div
                      key={descp.key}
                      className='template_1_subSection section'
                    >
                      <div className='subsectionCopyDelIconWrapper'>
                        <span
                          title='Delete Sub Section'
                          onClick={(e) => {
                            // dataOnRight();
                            const findIndex = data.description.findIndex(
                              (e) => e.key === descp.key
                            );
                            delete_subsection_Modal(
                              data.description,
                              findIndex,
                              'right'
                            );
                            dataOnRight();
                            setTemp(index + 1);
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
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
                        </span>

                        <span
                          title='Duplicate Sub Section'
                          onClick={(e) => {
                            const findIndex = data.description.findIndex(
                              (e) => e.key === descp.key
                            );
                            const arr = array_copy(data.description, findIndex);
                            // array_copy(data.description, findIndex);
                            setDataUpdatableRight(arr);
                            setFilteredArray(arr);
                            dataOnRight();
                            setTemp(index + 1);
                            // // console.log(arr[findIndex])
                          }}
                        >
                          <svg
                            style={{ maxWidth: '18px' }}
                            version='1.1'
                            className='h-6 w-6'
                            id='Layer_1'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='0 0 64 64'
                            enable-background='new 0 0 64 64'
                            xmlSpace='preserve'
                          >
                            <g id='Text-files'>
                              <path
                                d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                              />
                              <path
                                d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                              />
                              <path
                                d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                              />
                              <path
                                d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                S39.16465,29.4603004,38.6031494,29.4603004z'
                              />
                              <path
                                d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                S29.0059509,37.5872993,28.4444485,37.5872993z'
                              />
                            </g>
                          </svg>
                        </span>
                      </div>

                      <div
                        key={index + 1}
                        className={`template_2_description_with_subsection description
                                    ${bodyTextStyleConditions}

                                    ${bodyTextSizeConditions}
                                    `}
                        style={{ color: sidePanelTextColor }}
                      >
                        {/* <div className='template_2_subsection_main'> */}
                        <BuilderEditor
                          readOnly={readOnly}
                          content={descp.description}
                          setEditorData={descp.setDescription}
                        />
                        {/* </div> */}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          }
        </>
      ));
  }

  function dataOnLeft() {
    return dataUpdatableLeft
      .filter((e) => (page === 1 ? e.firstPage === true : null))
      .map((descp, index) => (
        <>
          <div
            style={{
              display: index === 0 ? 'none' : index === 1 ? 'none' : null,
            }}
            key={descp.key}
            className='block'
            ref={descp.ref}
          >
            {/* <div className="divider"></div> */}
            <div className='outerIconWrapper'>
              <span
                className={`${index === 0 ? 'displayNone' : null}`}
                onClick={(e) => {
                  const arr = arrayMove(dataUpdatableLeft, index, index - 1);
                  setDataUpdatableLeft(arr);
                  dataOnLeft();
                  setTemp(index + 1);
                  // // console.log(dataUpdatableRight)
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' />
                </svg>
              </span>
              <span
                className={`${
                  index >= dataUpdatableLeft.length - 1 ? 'displayNone' : null
                }`}
                onClick={(e) => {
                  const arr = arrayMove(dataUpdatableLeft, index, index + 1);
                  setDataUpdatableLeft(arr);
                  dataOnLeft();
                  setTemp(index + 1);
                  // // console.log(dataUpdatableRight)
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' />
                </svg>
              </span>
            </div>
            <div className='copyDelIconWrapper'>
              <span
                onClick={(e) => {
                  const arr = array_copy(dataUpdatableLeft, index);
                  setDataUpdatableLeft(arr);
                  dataOnLeft();
                  setTemp2(index + 1);
                  // // console.log(dataUpdatableLeft)
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#fff'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
              </span>
              <span
                onClick={(e) => {
                  delete_Modal(dataUpdatableLeft, index, 'left');
                  dataOnLeft();
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
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
              </span>
            </div>
            <div className='sidebar_section '>
              {descp.header ? null : descp.subHeader ? null : (
                <div
                  name='experience_heading'
                  id={descp.id}
                  rows='1'
                  placeholder='Experience Name'
                  style={{ color: sidePanelTextColor }}
                  className={`section_heading  
                        ${headingTextStyleConditions}

                        ${headingTextSizeConditions}
                        
                    `}
                >
                  {/* {descp.heading} */}
                  {/* {index} */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'start',
                      flexDirection: 'row-reverse',
                    }}
                  >
                    <BuilderEditor
                      readOnly={readOnly}
                      key={index + 1}
                      content={descp.heading}
                      setEditorData={descp.setHeading}
                    />
                  </div>
                </div>
              )}

              <div className={'Template_4_divider_sidebar'}></div>

              {descp.heading ===
              'none' ? null : descp.header ? null : descp.subHeader ===
                'none' ? null : descp.description ===
                'none' ? null : descp.type === 'skills' ? (
                <div style={{ marginBottom: '4rem' }}>
                  {descp.description.map((data, index) => (
                    <div
                      key={data.key}
                      className='template_1_subSection section'
                    >
                      <div className='subsectionCopyDelIconWrapper'>
                        <span
                          title='Delete Sub Section'
                          onClick={(e) => {
                            // dataOnRight();
                            const findIndex = descp.description.findIndex(
                              (e) => e.key === data.key
                            );
                            delete_subsection_Modal(
                              descp.description,
                              findIndex,
                              'right'
                            );
                            dataOnRight();
                            setTemp(index + 1);
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
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
                        </span>

                        <span
                          title='Duplicate Sub Section'
                          onClick={(e) => {
                            const findIndex = descp.description.findIndex(
                              (e) => e.key === data.key
                            );
                            const arr = array_copy(
                              descp.description,
                              findIndex
                            );
                            // array_copy(data.description, findIndex);
                            setDataUpdatableRight(arr);
                            setFilteredArray(arr);
                            dataOnRight();
                            setTemp(index + 1);
                            // // console.log(arr[findIndex])
                          }}
                        >
                          <svg
                            style={{ maxWidth: '18px' }}
                            version='1.1'
                            className='h-6 w-6'
                            id='Layer_1'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='0 0 64 64'
                            enable-background='new 0 0 64 64'
                            xmlSpace='preserve'
                          >
                            <g id='Text-files'>
                              <path
                                d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                    C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                    c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                    h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                    C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                    c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                    c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                    M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                    c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                    c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                    h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                              />
                              <path
                                d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                    c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                    C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                              />
                              <path
                                d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                    c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                    C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                              />
                              <path
                                d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                    s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                    S39.16465,29.4603004,38.6031494,29.4603004z'
                              />
                              <path
                                d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                    s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                    S29.0059509,37.5872993,28.4444485,37.5872993z'
                              />
                            </g>
                          </svg>
                        </span>
                      </div>

                      <div
                        key={index + 1}
                        className={`template_4_description 
                                        ${bodyTextStyleConditions}
        
                                        ${bodyTextSizeConditions}
                                        `}
                        style={{ color: sidePanelTextColor, display: 'block' }}
                      >
                        <div>
                          <BuilderEditor
                            readOnly={readOnly}
                            content={data.name}
                            setEditorData={data.setName}
                          />
                        </div>
                        <div
                          style={{ marginLeft: '3px' }}
                          onClick={() =>
                            changeExperticeModal(descp.description)
                          }
                        >
                          {/* <BuilderEditor readOnly={readOnly} content={descp.description} /> */}

                          {/* <div style={{cursor: 'pointer'}} onClick={() => changeExperticeModal(descp.expertice)} className='progressBarContainer'> */}
                          <div
                            style={{ cursor: 'pointer' }}
                            className='progressBarContainer_template_4'
                          >
                            {/* {descp.expertice} */}
                            <div
                              style={{ width: data.expertice + '%' }}
                              className='progressBarCompleted'
                            >
                              {' '}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : descp.type === 'language_skills' ? (
                // <div  onClick={() => changeExperticeModal(descp.description)}>
                <div>
                  {descp.description.map((data, index) => (
                    <div
                      key={data.key}
                      className='template_1_subSection section'
                    >
                      <div className='subsectionCopyDelIconWrapper'>
                        <span
                          title='Delete Sub Section'
                          onClick={(e) => {
                            // dataOnRight();
                            const findIndex = descp.description.findIndex(
                              (e) => e.key === data.key
                            );
                            delete_subsection_Modal(
                              descp.description,
                              findIndex,
                              'right'
                            );
                            dataOnRight();
                            setTemp(index + 1);
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
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
                        </span>

                        <span
                          title='Duplicate Sub Section'
                          onClick={(e) => {
                            const findIndex = descp.description.findIndex(
                              (e) => e.key === data.key
                            );
                            const arr = array_copy(
                              descp.description,
                              findIndex
                            );
                            // array_copy(data.description, findIndex);
                            setDataUpdatableRight(arr);
                            setFilteredArray(arr);
                            dataOnRight();
                            setTemp(index + 1);
                            // // console.log(arr[findIndex])
                          }}
                        >
                          <svg
                            style={{ maxWidth: '18px' }}
                            version='1.1'
                            className='h-6 w-6'
                            id='Layer_1'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0px'
                            y='0px'
                            viewBox='0 0 64 64'
                            enable-background='new 0 0 64 64'
                            xmlSpace='preserve'
                          >
                            <g id='Text-files'>
                              <path
                                d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                              />
                              <path
                                d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                              />
                              <path
                                d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                              />
                              <path
                                d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                S39.16465,29.4603004,38.6031494,29.4603004z'
                              />
                              <path
                                d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                S29.0059509,37.5872993,28.4444485,37.5872993z'
                              />
                            </g>
                          </svg>
                        </span>
                      </div>

                      <div
                        key={index + 1}
                        className={`template_4_description description
                                    ${bodyTextStyleConditions}
    
                                    ${bodyTextSizeConditions}
                                    `}
                        style={{ color: sidePanelTextColor, display: 'block' }}
                      >
                        <div>
                          <BuilderEditor
                            readOnly={readOnly}
                            content={data.name}
                            setEditorData={data.setName}
                          />
                        </div>
                        <div style={{ marginLeft: '3px' }}>
                          {/* <BuilderEditor readOnly={readOnly} content={descp.description} /> */}

                          {/* <div style={{cursor: 'pointer'}} className='progressBarContainer_template_4'>
                                                <div style={{width: descp.expertice+'%'}} className='progressBarCompleted'> </div>
                                            </div> */}

                          <div className='template_4_language_level'>
                            {/* <div onClick={(e) => e.target.style.backgroundColor = e.target.style.backgroundColor === '#453B3D' ?  e.target.style.backgroundColor = '#DCC9AF' :  e.target.style.backgroundColor = sidePanelTextColor}> </div>
                                                <div onClick={(e) => e.target.style.backgroundColor = e.target.style.backgroundColor === '#453B3D' ?  e.target.style.backgroundColor = '#DCC9AF' :  e.target.style.backgroundColor = sidePanelTextColor}> </div>
                                                <div onClick={(e) => e.target.style.backgroundColor = e.target.style.backgroundColor === '#453B3D' ?  e.target.style.backgroundColor = '#DCC9AF' :  e.target.style.backgroundColor = sidePanelTextColor}> </div>
                                                <div onClick={(e) => e.target.style.backgroundColor = e.target.style.backgroundColor === '#453B3D' ?  e.target.style.backgroundColor = '#DCC9AF' :  e.target.style.backgroundColor = sidePanelTextColor}> </div>
                                                <div onClick={(e) => e.target.style.backgroundColor = e.target.style.backgroundColor === '#453B3D' ?  e.target.style.backgroundColor = '#DCC9AF' :  e.target.style.backgroundColor = sidePanelTextColor}> </div> */}
                            <div
                              style={{
                                background:
                                  data.expertice >= 20
                                    ? sidePanelTextColor
                                    : null,
                              }}
                            >
                              {' '}
                            </div>
                            <div
                              style={{
                                background:
                                  data.expertice >= 40
                                    ? sidePanelTextColor
                                    : null,
                              }}
                            >
                              {' '}
                            </div>
                            <div
                              style={{
                                background:
                                  data.expertice >= 60
                                    ? sidePanelTextColor
                                    : null,
                              }}
                            >
                              {' '}
                            </div>
                            <div
                              style={{
                                background:
                                  data.expertice >= 80
                                    ? sidePanelTextColor
                                    : null,
                              }}
                            >
                              {' '}
                            </div>
                            <div
                              style={{
                                background:
                                  data.expertice >= 100
                                    ? sidePanelTextColor
                                    : null,
                              }}
                            >
                              {' '}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                descp.description.map((data, index) => (
                  <div key={data.key} className='template_1_subSection section'>
                    <div className='subsectionCopyDelIconWrapper'>
                      <span
                        title='Delete Sub Section'
                        onClick={(e) => {
                          // dataOnRight();
                          const findIndex = descp.description.findIndex(
                            (e) => e.key === data.key
                          );
                          delete_subsection_Modal(
                            descp.description,
                            findIndex,
                            'right'
                          );
                          dataOnRight();
                          setTemp(index + 1);
                        }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
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
                      </span>

                      <span
                        title='Duplicate Sub Section'
                        onClick={(e) => {
                          const findIndex = descp.description.findIndex(
                            (e) => e.key === data.key
                          );
                          const arr = array_copy(descp.description, findIndex);
                          // array_copy(data.description, findIndex);
                          setDataUpdatableRight(arr);
                          setFilteredArray(arr);
                          dataOnRight();
                          setTemp(index + 1);
                          // // console.log(arr[findIndex])
                        }}
                      >
                        <svg
                          style={{ maxWidth: '18px' }}
                          version='1.1'
                          className='h-6 w-6'
                          id='Layer_1'
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          x='0px'
                          y='0px'
                          viewBox='0 0 64 64'
                          enable-background='new 0 0 64 64'
                          xmlSpace='preserve'
                        >
                          <g id='Text-files'>
                            <path
                              d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'
                            />
                            <path
                              d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'
                            />
                            <path
                              d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'
                            />
                            <path
                              d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                S39.16465,29.4603004,38.6031494,29.4603004z'
                            />
                            <path
                              d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                S29.0059509,37.5872993,28.4444485,37.5872993z'
                            />
                          </g>
                        </svg>
                      </span>
                    </div>

                    <div
                      key={index + 1}
                      style={{
                        color: sidePanelTextColor,
                        marginBottom: '0rem',
                      }}
                      className={` description
                        ${bodyTextStyleConditions}

                        ${bodyTextSizeConditions}
                        `}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'relative',
                        }}
                      >
                        <div className='template_4_sideline'>
                          <div
                            style={{ background: sidePanelTextColor }}
                            className='template_4_sideline_circle'
                          >
                            {' '}
                          </div>
                          <div
                            style={{ background: sidePanelTextColor }}
                            className='template_4_sideline_line'
                          >
                            {' '}
                          </div>
                        </div>

                        <BuilderEditor
                          readOnly={readOnly}
                          content={data.description}
                          setEditorData={data.setDescription}
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      ));
  }

  useEffect(() => {
    dataOnRight();
    // dataOnLeft()
  }, [dataUpdatableRight]);

  // const rightSectionHeight = rightMainRef.current.clientHeight;

  // // setTimeout(() => // console.log(rightSectionHeight), 0)
  // // console.log(rightSectionHeight)

  return (
    <div style={{ padding: '2rem 0' }} className='template_4_page'>
      <div style={{ display: page === 1 ? null : 'none' }}>
        <div
          style={{ position: 'relative', background: '#E5E5E5' }}
          className='template_13_subHeader'
        >
          <div
            style={{
              position: 'absolute',
              background: '#664C41',
              width: '20px',
              height: '50px',
              top: '-3px',
              left: '0',
            }}
          ></div>

          {dataUpdatableRight[0].contacts.map((contact, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {contact.type === 'phone' ? (
                <svg
                  style={{ fill: sidePanelTextColor }}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='14px'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z' />
                </svg>
              ) : contact.type === 'email' ? (
                <svg
                  style={{ fill: sidePanelTextColor }}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='14px'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />
                </svg>
              ) : contact.type === 'website' ? (
                <svg
                  style={{ fill: sidePanelTextColor }}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='14px'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z' />
                </svg>
              ) : contact.type === 'address' ? (
                <svg
                  style={{ fill: sidePanelTextColor }}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='14px'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' />
                </svg>
              ) : null}
              {/*  */}
              <BuilderEditor
                readOnly={readOnly}
                content={contact.data}
                setEditorData={contact.setData}
              />
            </div>
          ))}
        </div>

        <div
          style={{ background: sidePanelBgColor, padding: '3rem ' }}
          className='template_13_header'
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
              flexDirection: 'row-reverse',
            }}
          >
            <BuilderEditor
              readOnly={readOnly}
              content={dataUpdatableRight[0].heading}
              setEditorData={dataUpdatableRight[0].setHeading}
            />
          </div>
          <BuilderEditor
            readOnly={readOnly}
            content={dataUpdatableRight[0].position}
            setEditorData={dataUpdatableRight[0].setPosition}
          />
          <BuilderEditor
            readOnly={readOnly}
            content={dataUpdatableRight[0].description}
            setEditorData={dataUpdatableRight[0].setDescription}
          />
        </div>
      </div>

      <div className='template_4_hero_section'>
        {/* <div style={{background: sidePanelBgColor}} className={`Template_4_sidebar ${docummentMargin === 'Compact' ? 'sidebar_compact' : docummentMargin === 'Narrow' ? 'sidebar_narrow' :  docummentMargin === 'Normal' ? 'sidebar_normal':  docummentMargin === 'Wide' ? 'sidebar_wide' :   docummentMargin === 'Broad' ? 'sidebar_broad' : null}`}>
                    {dataOnLeft()}
                </div> */}
        <div
          style={{
            background: mainPanelBgColor,
            width: page === 1 ? 'auto' : '100%',
          }}
          className={`Template_4_main ${
            docummentMargin === 'Compact'
              ? 'compact'
              : docummentMargin === 'Narrow'
              ? 'narrow'
              : docummentMargin === 'Normal'
              ? 'normal'
              : docummentMargin === 'Wide'
              ? 'wide'
              : docummentMargin === 'Broad'
              ? 'broad'
              : null
          }`}
        >
          <div
            style={{ padding: '0 1rem' }}
            ref={rightMainRef}
            className='blankTemplate_profile'
          >
            {dataOnRight()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template13;
