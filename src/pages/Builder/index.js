import React, { useState, useEffect, useRef } from 'react';
// import {Link} from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ThreeDots } from 'react-loader-spinner';
import moment from 'moment';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import BuilderHeader from '../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';
import BuilderSubHeader from '../../Components/BuilderWrapper/BuilderSubHeader/BuilderSubHeader';
import BuilderDocument from '../../Components/BuilderWrapper/BuilderDocument/BuilderDocument';

import BLANKTEMPLATEDATA from '../../Components/BlankTemplate/blankTemplateData';

import Template1Data from '../../Components/Templates/Template1/Template1Data';

import Template13Data from '../../Components/Templates/Template13/Template13Data';

import Template22Data from '../../Components/Templates/Template22/Template22Data';

import Template28Data from '../../Components/Templates/Template28/Template28Data';

import Template29Data from '../../Components/Templates/Template29/Template29Data';

import Accordion from 'react-bootstrap/Accordion';

import { get_resume_by_id } from '../../API';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function Builder({ setUserLoggedIn, userData, userLoggedIn }) {
  const { chosenTemplate, resumeId } = useParams();
  const jwtToken = localStorage.getItem('jwtToken');
  const userId = localStorage.getItem('id');
  const [resumeData, setResumeData] = useState(null);
  const [document_name, setDocument_name] = useState('');
  // console.log(resumeData);

  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const getResumeData = async () => {
    await get_resume_by_id(resumeId, config).then((res) => {
      if (res.status === 200 || res.status === 304) {
        setResumeData({
          ...res.data,
          documentData: JSON.parse(res.data.documentData),
        });
        setDocument_name(res.data.documentName);
      }
    });
  };
  useEffect(() => {
    resumeId && getResumeData();
  }, []);

  const [template, setTemplate] = useState(chosenTemplate || 'blankTemplate');
  const history = useHistory();

  const { BlankTemplateData } = BLANKTEMPLATEDATA();
  const { template1Data } = Template1Data();
  const { template13Data } = Template13Data();
  const { template22Data } = Template22Data();
  const { template28Data } = Template28Data();
  const { template29Data } = Template29Data();

  const templateDataSelector = template === 'blankTemplate' ? BlankTemplateData : template === 'template_1' ? template1Data : template === 'template_13' ? template13Data : template === 'template_22' ? template22Data : template === 'template_28' ? template28Data : template === 'template_29' ? template29Data : null; // prettier-ignore

  const pageData = JSON.parse(localStorage.getItem('pageData'));
  const pageDataSelector =
    template === 'blankTemplate'
      ? (resumeData?.documentData.templateName === chosenTemplate
          ? resumeData?.documentData.pageEditorData
          : resumeId
          ? null
          : templateDataSelector) ?? templateDataSelector
      : resumeData?.documentData.templateName === chosenTemplate
      ? resumeData?.documentData.pageEditorData
      : resumeId
      ? null
      : templateDataSelector;
  //  ?? templateDataSelector;
  // const pageDataSelector = pageData?.templateName === chosenTemplate ? pageData.pageEditorData : templateDataSelector;
  const pageEditorData = resumeData?.documentData.pageEditorData;
  // console.log({ ...pageEditorData, ...templateDataSelector }); //,  resumeData?.documentData.pageEditorData
  const [templateUpdatableData, setTemplateUpdatableData] = useState(pageDataSelector); // prettier-ignore
  // console.log(
  //   (resumeData?.documentData.templateName === chosenTemplate
  //     ? resumeData?.documentData.pageEditorData
  //     : resumeId
  //     ? null
  //     : templateDataSelector) ?? templateDataSelector
  // );

  useEffect(() => {
    resumeId && setTemplateUpdatableData(pageDataSelector);
  }, [pageDataSelector]);
  // console.log(executiveTemplate10Data);
  const [active, setActive] = useState('resume');

  const [showChangeTemplateSidebar, setShowChangeTemplateSidebar] =
    useState(false);

  const addSectionModal = useRef('');
  const addSectionModalBG = useRef('');
  const loginPopup = useRef('');
  const loginPopupBG = useRef('');

  // SubHeader Style Variables
  const [pageLayout, setPageLayout] = useState('A4');
  const [lineHeight, setLineHeight] = useState(1);
  const [docummentMargin, setDocummentMargin] = useState('Compact');
  const [docummentDateFormat, setDocummentDateFormat] = useState('1 / 22');
  const [documentHeadingTextStyle, setDocumentHeadingTextStyle] =
    useState('Poppins');
  const [documentBodyTextStyle, setDocumentBodyTextStyle] = useState('Poppins');
  const [documentBodyTextSize, setDocumentBodyTextSize] = useState('Medium');
  const [borderedPage, setBorderedPage] = useState(false);
  const [pageBorderWidth, setPageBorderWidth] = useState(1);
  const [pageBorderStyle, setPageBorderStyle] = useState('solid');
  const [pageBorderColor, setPageBorderColor] = useState('black');

  const rightMainRef = useRef();
  const wholePageMainRef = useRef();

  const mainSection1 = useRef(null);
  const mainSection2 = useRef(null);
  const mainSection3 = useRef(null);
  const mainSection4 = useRef(null);
  const mainSection5 = useRef(null);
  const mainSection6 = useRef(null);

  const subSection1 = useRef(null);
  const subSection2 = useRef(null);
  const subSection3 = useRef(null);
  const subSection4 = useRef(null);
  const subSection5 = useRef(null);

  const [key, setKey] = useState(10);

  const [showOnFirstPage, setShowOnFirstPage] = useState(true);
  const [showOnSecondPage, setShowOnSecondPage] = useState(true);
  const [showOnThirdPage, setShowOnThirdPage] = useState(true);

  // */*****************************************************************************************************************\*

  // Templates Data

  // */*********************************************************************\*

  // Blank Template Data

  const blankTemplateColor = {
    sidePanelBgColor: '#fff',
    sidePanelTextColor: '#000',
  };

  const blankTemplateDataLeftSection = [];

  const blankTemplateDataRightSection = [];

  // */*********************************************************************\*

  // Template 1 Data

  const template1Color = {
    sidePanelBgColor: '#ffe4c4',
    sidePanelTextColor: '#000',
  };

  const template1DataLeftSection = [
    {
      key: 1,
      name: 'experience_highlight',
      heading: templateUpdatableData?.exp_1_heading,
      setHeading: template1Data.setExp_1_heading,
      subSection: true,
      description: [
        {
          key: 1440,
          description: templateUpdatableData?.exp_1_description,
          setDescription: template1Data.setExp_1_description,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      name: 'experience_highlight',
      heading: templateUpdatableData?.exp_2_heading,
      setHeading: template1Data.setExp_2_heading,
      subSection: true,
      description: [
        {
          key: 1430,
          description: templateUpdatableData?.exp_2_description,
          setDescription: template1Data.setExp_2_description,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'education',
      heading: templateUpdatableData?.edu_heading,
      setHeading: template1Data.setEdu_heading,
      subSection: true,
      description: [
        {
          key: 1450,
          description: templateUpdatableData?.edu_description,
          setDescription: template1Data.setEdu_description,
        },
      ],
      ref: subSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
    },
    {
      key: 4,
      name: 'personal',
      heading: templateUpdatableData?.contact_heading,
      setHeading: template1Data.setContact_heading,
      subSection: true,
      description: [
        {
          key: 1476,
          description: templateUpdatableData?.contact_description,
          setDescription: template1Data.setContact_description,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template1DataRightSection = [
    {
      key: 5,
      class: 'blankTemplate_header section',
      heading: templateUpdatableData?.main_header,
      setHeading: template1Data.setMain_header,
      // heading: 'none',
      name: 'personal',
      subSection: false,
      // description: template1Data.main_header,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.profile_heading,
      setHeading: template1Data.setProfile_heading,
      subSection: true,
      description: [
        {
          key: 1260,
          description: templateUpdatableData?.profile_description,
          setDescription: template1Data.setProfile_description,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.main_section_1_heading,
      setHeading: template1Data.setMain_section_1_heading,
      subSection: true,
      description: [
        {
          key: 1100,
          description: templateUpdatableData?.main_section_1_description,
          setDescription: template1Data.setMain_section_1_description,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.main_section_2_heading,
      setHeading: template1Data.setMain_section_2_heading,
      subSection: true,
      description: [
        {
          key: 1400,
          description: templateUpdatableData?.main_section_2_description,
          setDescription: template1Data.setMain_section_2_description,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      name: 'experience',
      class: 'block',
      heading: templateUpdatableData?.main_exp_heading,
      setHeading: template1Data.setMain_exp_heading,
      subSection: true,
      description: [
        {
          key: 1100,
          description: templateUpdatableData?.main_exp_1_description,
          setDescription: template1Data.setMain_exp_1_description,
        },
        {
          key: 1101,
          description: templateUpdatableData?.main_exp_2_description,
          setDescription: template1Data.setMain_exp_2_description,
        },
        {
          key: 1102,
          description: templateUpdatableData?.main_exp_3_description,
          setDescription: template1Data.setMain_exp_3_description,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 2 Data

  const [skill_1_expertice, setSkill_1_expertice] = useState(80);
  const [skill_2_expertice, setSkill_2_expertice] = useState(50);
  const [skill_3_expertice, setSkill_3_expertice] = useState(30);
  const [skill_4_expertice, setSkill_4_expertice] = useState(90);
  const [skill_5_expertice, setSkill_5_expertice] = useState(70);
  const [skill_6_expertice, setSkill_6_expertice] = useState(40);
  const [skill_7_expertice, setSkill_7_expertice] = useState(80);
  const [skill_8_expertice, setSkill_8_expertice] = useState(30);
  const [skill_9_expertice, setSkill_9_expertice] = useState(60);

  const [language_1_expertice, setLanguage_1_expertice] = useState(80);
  const [language_2_expertice, setLanguage_2_expertice] = useState(60);
  const [language_3_expertice, setLanguage_3_expertice] = useState(20);
  const [language_4_expertice, setLanguage_4_expertice] = useState(70);

  const [software_1_expertice, setSoftware_1_expertice] = useState(100);
  const [software_2_expertice, setSoftware_2_expertice] = useState(80);
  const [software_3_expertice, setSoftware_3_expertice] = useState(60);

  // */*********************************************************************\*

  // Template 13 Data

  const template13Color = {
    sidePanelBgColor: '#F2F2F2',
    sidePanelTextColor: '#4D1F03',
  };

  const template13DataLeftSection = [{ data: null }];

  const template13DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template13Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template13Data.setPosition,
      description: templateUpdatableData?.main_descp,
      setDescription: template13Data.setMain_descp,
      contacts: [
        {
          data: templateUpdatableData?.phone,
          setData: template13Data.setPhone,
          type: 'phone',
        },
        {
          data: templateUpdatableData?.email,
          setData: template13Data.setEmail,
          type: 'email',
        },
        {
          data: templateUpdatableData?.website,
          setData: template13Data.setWebsite,
          type: 'website',
        },
        {
          data: templateUpdatableData?.address,
          setData: template13Data.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template13Data.setEducation,
      subSection: false,
      description: [
        {
          key: 3323,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template13Data.setEdu_1_heading,
          name: templateUpdatableData?.edu_1_name,
          setName: template13Data.setEdu_1_name,
          location: templateUpdatableData?.edu_1_location,
          setLocation: template13Data.setEdu_1_location,
        },
        {
          key: 3324,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template13Data.setEdu_2_heading,
          name: templateUpdatableData?.edu_2_name,
          setName: template13Data.setEdu_2_name,
          location: templateUpdatableData?.edu_2_location,
          setLocation: template13Data.setEdu_2_location,
        },
        {
          key: 3325,
          heading: templateUpdatableData?.edu_3_heading,
          setHeading: template13Data.setEdu_3_heading,
          name: templateUpdatableData?.edu_3_name,
          setName: template13Data.setEdu_3_name,
          location: templateUpdatableData?.edu_3_location,
          setLocation: template13Data.setEdu_3_location,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template13Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template13Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template13Data.setExp_1_heading,
          location: templateUpdatableData?.edu_1_location,
          setLocation: template13Data.setEdu_1_location,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template13Data.setExp_1_descp,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template13Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template13Data.setExp_2_heading,
          location: templateUpdatableData?.edu_2_location,
          setLocation: template13Data.setEdu_2_location,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template13Data.setExp_2_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'skills_certificate',
      skills: [
        {
          key: 4534,
          name: 'skills',
          heading: templateUpdatableData?.skills,
          setHeading: template13Data.setSkills,
          description: [
            {
              key: 5641,
              description: templateUpdatableData?.skills_descp,
              setDescription: template13Data.setSkills_descp,
            },
          ],
        },
      ],
      certificate: [
        {
          key: 4534,
          name: 'certification',
          heading: templateUpdatableData?.certificate,
          setHeading: template13Data.setCertificate,
          description: [
            {
              key: 5431,
              description: templateUpdatableData?.certificate_descp_1,
              setDescription: template13Data.setCertificate_descp_1,
            },
            {
              key: 54342,
              description: templateUpdatableData?.certificate_descp_2,
              setDescription: template13Data.setCertificate_descp_2,
            },
          ],
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 22 Data

  const template22Color = {
    sidePanelBgColor: '#1A1A1A',
    sidePanelTextColor: '#000000',
  };

  const template22DataLeftSection = [{ data: null }];

  const template22DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template22Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template22Data.setPosition,
      subSection: false,
      description: [
        {
          key: 9031,
          description: templateUpdatableData?.profileDescp,
          setDescription: template22Data.setProfileDescp,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'primary',
      heading: templateUpdatableData?.main_heading,
      setHeading: template22Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp,
          setDescription: template22Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template22Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template22Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template22Data.setExp_1_tenure,
          position: templateUpdatableData?.exp_1_positon,
          setPosition: template22Data.setExp_1_positon,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template22Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template22Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template22Data.setExp_2_tenure,
          position: templateUpdatableData?.exp_2_positon,
          setPosition: template22Data.setExp_2_positon,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template22Data.setExp_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template22Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template22Data.setEdu_1_heading,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template22Data.setEdu_1_tenure,
          position: templateUpdatableData?.edu_1_positon,
          setPosition: template22Data.setEdu_1_positon,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'skills_interest',
      skill_name: 'skills',
      skill_heading: templateUpdatableData?.skills,
      setSkill_heading: template22Data.setSkills,
      skill_description: [
        {
          key: 5751,
          description: templateUpdatableData?.skills_descp,
          setDescription: template22Data.setSkills_descp,
        },
      ],
      interest_name: 'interests',
      interest_heading: templateUpdatableData?.interest,
      setInterest_heading: template22Data.setInterest,
      interest_description: [
        {
          key: 9871,
          description: templateUpdatableData?.interest_descp,
          setDescription: template22Data.setInterest_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  // */*********************************************************************\*

  // Template 28 Data

  const template28Color = {
    sidePanelBgColor: '#000000',
    sidePanelTextColor: '#000000',
  };

  const template28DataLeftSection = [
    {
      key: 1,
      name: 'experience_highlight',
      type: 'management',
      heading: templateUpdatableData?.management_heading,
      setHeading: template28Data.setManagement_heading,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.management_descp,
          setDescription: template28Data.setManagement_descp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      name: 'experience_highlight',
      type: 'scientific',
      heading: templateUpdatableData?.scientific_heading,
      setHeading: template28Data.setScientific_heading,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.scientific_descp,
          setDescription: template28Data.setScientific_descp,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'education',
      class: 'block',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template28Data.setEducation,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template28Data.setEdu_1_descp,
        },
        {
          key: 4754,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template28Data.setEdu_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      name: 'personal',
      type: 'contact',
      heading: templateUpdatableData?.contact,
      setHeading: template28Data.setContact,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.conatct_descp,
          setDescription: template28Data.setConatct_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template28DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template28Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template28Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      type: 'profile',
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.profile,
      setHeading: template28Data.setProfile,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.profile_descp,
          setDescription: template28Data.setProfile_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      type: 'section_1',
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.section_1_heading,
      setHeading: template28Data.setSection_1_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.section_1_descp,
          setDescription: template28Data.setSection_1_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      type: 'section_2',
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.section_2_heading,
      setHeading: template28Data.setSection_2_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.section_2_descp,
          setDescription: template28Data.setSection_2_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'experience',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template28Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template28Data.setExp_1_heading,
          position: templateUpdatableData?.exp_1_position,
          setPosition: template28Data.setExp_1_position,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template28Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template28Data.setExp_2_heading,
          position: templateUpdatableData?.exp_2_position,
          setPosition: template28Data.setExp_2_position,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template28Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template28Data.setExp_3_heading,
          position: templateUpdatableData?.exp_3_position,
          setPosition: template28Data.setExp_3_position,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template28Data.setExp_3_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 29 Data

  const template29Color = {
    sidePanelBgColor: '#4D4D4D',
    sidePanelTextColor: '#333333',
  };

  const template29DataLeftSection = [
    {
      key: 1,
      type: 'contact',
      name: 'personal',
      heading: templateUpdatableData?.contact,
      setHeading: template29Data.setContact,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.contact_descp,
          setDescription: template29Data.setContact_descp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      type: 'education',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template29Data.setEducation,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.edu_1,
          setDescription: template29Data.setEdu_1,
        },
        {
          key: 4754,
          description: templateUpdatableData?.edu_2,
          setDescription: template29Data.setEdu_2,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      class: 'block',
      name: 'skills',
      type: 'skill',
      heading: templateUpdatableData?.skills,
      setHeading: template29Data.setSkills,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.skill_descp,
          setDescription: template29Data.setSkill_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      type: 'certifications',
      name: 'certification',
      heading: templateUpdatableData?.certifications,
      setHeading: template29Data.setCertifications,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.certifications_descp,
          setDescription: template29Data.setCertifications_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      type: 'interests',
      name: 'interests',
      heading: templateUpdatableData?.interests,
      setHeading: template29Data.setInterests,
      description: [
        {
          key: 9551,
          description: templateUpdatableData?.interest_descp,
          setDescription: template29Data.setInterest_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template29DataRightSection = [
    {
      key: 6,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template29Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template29Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      type: 'main',
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.main_heading,
      setHeading: template29Data.setMain_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.main_descp,
          setDescription: template29Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template29Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template29Data.setExp_1_heading,
          position: templateUpdatableData?.exp_1_position,
          setPosition: template29Data.setExp_1_position,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template29Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template29Data.setExp_2_heading,
          position: templateUpdatableData?.exp_2_position,
          setPosition: template29Data.setExp_2_position,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template29Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template29Data.setExp_3_heading,
          position: templateUpdatableData?.exp_3_position,
          setPosition: template29Data.setExp_3_position,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template29Data.setExp_3_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */******************************************************************************************************************************************\*

  // Condition to select data for different Templates

  const setDataUpdatableRightConditions =
    template === 'blankTemplate'
      ? blankTemplateDataRightSection
      : template === 'template_1'
      ? template1DataRightSection
      : template === 'template_13'
      ? template13DataRightSection
      : template === 'template_22'
      ? template22DataRightSection
      : template === 'template_28'
      ? template28DataRightSection
      : template === 'template_29'
      ? template29DataRightSection
      : null;

  const setDataUpdatableLeftConditions =
    template === 'blankTemplate'
      ? blankTemplateDataLeftSection
      : template === 'template_1'
      ? template1DataLeftSection
      : template === 'template_13'
      ? template13DataLeftSection
      : template === 'template_22'
      ? template22DataLeftSection
      : template === 'template_28'
      ? template28DataLeftSection
      : template === 'template_29'
      ? template29DataLeftSection
      : null;

  // Template Selector

  const TemplateSelector =
    template === 'blankTemplate'
      ? 'blankTemplate'
      : template === 'template_1'
      ? 'template_1'
      : template === 'template_13'
      ? 'template_13'
      : template === 'template_22'
      ? 'template_22'
      : template === 'template_28'
      ? 'template_28'
      : template === 'template_29'
      ? 'template_29'
      : null;

  // Templates Color Selector

  const setSidePanelBgColorSelector =
    template === 'blankTemplate'
      ? blankTemplateColor.sidePanelBgColor
      : template === 'template_1'
      ? template1Color.sidePanelBgColor
      : template === 'template_13'
      ? template13Color.sidePanelBgColor
      : template === 'template_22'
      ? template22Color.sidePanelBgColor
      : template === 'template_28'
      ? template28Color.sidePanelBgColor
      : template === 'template_29'
      ? template29Color.sidePanelBgColor
      : null;

  const setSidePanelTextColorSelector =
    template === 'blankTemplate'
      ? blankTemplateColor.sidePanelTextColor
      : template === 'template_1'
      ? template1Color.sidePanelTextColor
      : template === 'template_13'
      ? template13Color.sidePanelTextColor
      : template === 'template_22'
      ? template22Color.sidePanelTextColor
      : template === 'template_28'
      ? template28Color.sidePanelTextColor
      : template === 'template_29'
      ? template29Color.sidePanelTextColor
      : null;

  const setMainPanelBgColorSelector =
    template === 'blankTemplate'
      ? null
      : template === 'template_1'
      ? null
      : template === 'template_13'
      ? null
      : template === 'template_18'
      ? null
      : null;

  // Templates Add Sections Selector for disserent Templates

  const AddParagraphSelector =
    template === 'blankTemplate'
      ? handleAddParagraph_BlankTemplate
      : template === 'template_1'
      ? handleAddParagraphTemplate_1
      : template === 'template_2'
      ? handleAddParagraphTemplate_2
      : template === 'template_7'
      ? handleAddParagraphTemplate_7
      : handleAddParagraphTemplate_2;
  // template === 'template_3' ? handleAddParagraphTemplate_2 : null;

  const AddHeadingSelector =
    template === 'blankTemplate'
      ? handleAddHeading_BlankTemplate
      : template === 'template_1'
      ? handleAddHeadingTemplate_1
      : template === 'template_2'
      ? handleAddHeadingTemplate_2
      : template === 'template_7'
      ? handleAddHeadingTemplate_7
      : handleAddHeadingTemplate_2;
  // template === 'template_3' ? handleAddHeadingTemplate_2 : null;

  const AddSectionSelector =
    template === 'blankTemplate'
      ? handleAddSection_BlankTemplate
      : template === 'template_1'
      ? handleAddSectionTemplate_1
      : template === 'template_2'
      ? handleAddSectionTemplate_2
      : template === 'template_7'
      ? handleAddSectionTemplate_7
      : handleAddSectionTemplate_2;
  // template === 'template_3' ? handleAddSectionTemplate_2 : null;

  const headingTextStyleConditions =
    documentHeadingTextStyle === 'Arial'
      ? 'arial-h '
      : documentHeadingTextStyle === 'Arial Narrow'
      ? 'arial_Narrow-h '
      : documentHeadingTextStyle === 'Avenir'
      ? 'avenir-h '
      : documentHeadingTextStyle === 'Book Antiqua'
      ? 'book_Antiqua-h '
      : documentHeadingTextStyle === 'Calibri'
      ? 'calibri-h '
      : documentHeadingTextStyle === 'Cambria'
      ? 'cambria-h'
      : documentHeadingTextStyle === 'Century Sans'
      ? 'century_Sans-h '
      : documentHeadingTextStyle === 'Constantia'
      ? 'constantia-h '
      : documentHeadingTextStyle === 'Garamond'
      ? 'garamond-h '
      : documentHeadingTextStyle === 'Geneva'
      ? 'geneva-h '
      : documentHeadingTextStyle === 'Georama'
      ? 'georama-h '
      : documentHeadingTextStyle === 'Georgia'
      ? 'georgia-h '
      : documentHeadingTextStyle === 'Gill Sans'
      ? 'gill_Sans-h '
      : documentHeadingTextStyle === 'Helvetica'
      ? 'helvetica-h '
      : documentHeadingTextStyle === 'Karla'
      ? 'karla-h '
      : documentHeadingTextStyle === 'Lato'
      ? 'lato-h '
      : documentHeadingTextStyle === 'Merriweather'
      ? 'merriweather-h '
      : documentHeadingTextStyle === 'Montserrat'
      ? 'montserrat-h '
      : documentHeadingTextStyle === 'Open Sans'
      ? 'open_Sans-h '
      : documentHeadingTextStyle === 'Oswald'
      ? 'oswald-h '
      : documentHeadingTextStyle === 'Poppins'
      ? 'poppins-h '
      : documentHeadingTextStyle === 'Raleway'
      ? 'raleway-h '
      : documentHeadingTextStyle === 'Roboto'
      ? 'roboto-h '
      : documentHeadingTextStyle === 'Tahoma'
      ? 'tahoma-h '
      : documentHeadingTextStyle === 'Trebuchet MS'
      ? 'trebuchet_MS-h '
      : documentHeadingTextStyle === 'Ubuntu'
      ? 'ubuntu-h '
      : documentHeadingTextStyle === 'Veranda'
      ? 'veranda-h '
      : null;

  const bodyTextStyleConditions =
    documentBodyTextStyle === 'Arial'
      ? 'arial-p '
      : documentBodyTextStyle === 'Arial Narrow'
      ? 'arial_Narrow-p '
      : documentBodyTextStyle === 'Avenir'
      ? 'avenir-p '
      : documentBodyTextStyle === 'Book Antiqua'
      ? 'book_Antiqua-p '
      : documentBodyTextStyle === 'Calibri'
      ? 'calibri-p '
      : documentBodyTextStyle === 'Cambria'
      ? 'cambria-p'
      : documentBodyTextStyle === 'Century Sans'
      ? 'century_Sans-p '
      : documentBodyTextStyle === 'Constantia'
      ? 'constantia-p '
      : documentBodyTextStyle === 'Garamond'
      ? 'garamond-p '
      : documentBodyTextStyle === 'Geneva'
      ? 'geneva-p '
      : documentBodyTextStyle === 'Georama'
      ? 'georama-p '
      : documentBodyTextStyle === 'Georgia'
      ? 'georgia-p '
      : documentBodyTextStyle === 'Gill Sans'
      ? 'gill_Sans-p '
      : documentBodyTextStyle === 'Helvetica'
      ? 'helvetica-p '
      : documentBodyTextStyle === 'Karla'
      ? 'karla-p '
      : documentBodyTextStyle === 'Lato'
      ? 'lato-p '
      : documentBodyTextStyle === 'Merriweather'
      ? 'merriweather-p '
      : documentBodyTextStyle === 'Montserrat'
      ? 'montserrat-p '
      : documentBodyTextStyle === 'Open Sans'
      ? 'open_Sans-p '
      : documentBodyTextStyle === 'Oswald'
      ? 'oswald-p '
      : documentBodyTextStyle === 'Poppins'
      ? 'poppins-p '
      : documentBodyTextStyle === 'Raleway'
      ? 'raleway-p '
      : documentBodyTextStyle === 'Roboto'
      ? 'roboto-p '
      : documentBodyTextStyle === 'Tahoma'
      ? 'tahoma-p '
      : documentBodyTextStyle === 'Trebuchet MS'
      ? 'trebuchet_MS-p '
      : documentBodyTextStyle === 'Ubuntu'
      ? 'ubuntu-p '
      : documentBodyTextStyle === 'Veranda'
      ? 'veranda-p '
      : null;

  const headingTextSizeConditions =
    documentBodyTextSize === 'Very Small'
      ? 'heading_verySmall'
      : documentBodyTextSize === 'Small'
      ? 'heading_small'
      : documentBodyTextSize === 'Medium'
      ? 'heading_medium'
      : documentBodyTextSize === 'Large'
      ? 'heading_large'
      : null;

  const bodyTextSizeConditions =
    documentBodyTextSize === 'Very Small'
      ? 'body_verySmall'
      : documentBodyTextSize === 'Small'
      ? 'body_small'
      : documentBodyTextSize === 'Medium'
      ? 'body_medium'
      : documentBodyTextSize === 'Large'
      ? 'body_large'
      : null;

  const pageDocumentData = JSON.stringify({
    type: 'resume',
    document_name,
    date: moment().format('MMM DD, YYYY'),
    templateName: TemplateSelector,
    pageEditorData: templateDataSelector,
  });
  const saveBuilderData = {
    userId: userId,
    documentName: document_name,
    documentData: pageDocumentData,
  };

  // Setting BlankTempplate Data

  const [dataUpdatableRight, setDataUpdatableRight] = useState(
    templateUpdatableData && setDataUpdatableRightConditions
  );
  const [dataUpdatableLeft, setDataUpdatableLeft] = useState(
    templateUpdatableData && setDataUpdatableLeftConditions
  );
  useEffect(() => {
    setDataUpdatableRight(setDataUpdatableRightConditions);
    setDataUpdatableLeft(setDataUpdatableLeftConditions);
  }, []);
  // Setting Template 2 Data
  // const [dataUpdatableRight, setDataUpdatableRight] = useState(template2DataRightSection)
  // const [dataUpdatableLeft, setDataUpdatableLeft] = useState(template2DataLeftSection)

  const [pageNo, setPageNo] = useState(1);

  const TemplatesPagesData = [
    {
      key: 1,
      template: TemplateSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo,
    },
  ];

  const TemplatesPagesData_with_2_pages = [
    {
      key: 1,
      template: TemplateSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo,
    },
    {
      key: 2,
      template: TemplateSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo + 1,
    },
  ];

  const [pageUpdatableData, setPageUpdatableData] = useState(
    templateUpdatableData
      ? template === 'executiveTemplate_8' ||
        template === 'executiveTemplate_9' ||
        template === 'executiveTemplate_10'
        ? TemplatesPagesData_with_2_pages
        : TemplatesPagesData
      : resumeId
      ? null
      : TemplatesPagesData
  );

  console.log(pageUpdatableData);

  const addPage_Modal = (addPage, addPara) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal'>
            <div>
              {/* <h1>Are you sure?</h1> */}
              <p>
                CVJury best practice principles suggest that an ideal resume
                must be of one page only. Do you still want to add more text?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  setPageNo(pageNo + 1);
                  setKey(key + 1);
                  // data.ref.current.style.display = 'none'
                  pageUpdatableData.push(addPage[0]);
                  dataUpdatableRight.push(addPara[0]);
                  // setPageUpdatableData(pageUpdatableData.push(addPage[0]))
                  onClose();
                }}
              >
                Yes, Add!
              </button>
            </div>
          </div>
        );
      },
    });
  };

  const maxHeight = 800;

  // Adding sections on click

  // Blank Template

  function handleAddParagraph_BlankTemplate() {
    // // console.log('executed')

    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template1Data.lorealIpsum,
          ref: mainSection1,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template1Data.lorealIpsum,
          ref: mainSection1,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddHeading_BlankTemplate() {
    // // console.log('executed')

    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template1Data.enterName,
          ref: mainSection2,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];

      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template1Data.enterName,
          ref: mainSection2,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  // function handleAddHeading_BlankTemplate () {
  //   // if (rightMainRef.current.clientHeight < maxHeight) {
  //     const addPara = [{
  //       key: key,
  //       class: 'block',
  //       type: 'section',
  //       heading : template2Data.enterName,
  //       subSection: false,
  //       description: 'none',
  //       ref: mainSection2,
  //       id: `mainSection${key+1}`,
  //       firstPage: false,
  //       secondPage: pageNo === 2 ? true : false,
  //       thirdPage: pageNo === 3 ? true : false,
  //     }]
  //     dataUpdatableRight.push(addPara[0]);
  //     setKey(key+1)
  //   // }
  //   addSectionModal.current.style.display = 'none' // modal hidden
  //   addSectionModalBG.current.style.display = 'none' // modal bg hidden
  // }
  function handleAddSection_BlankTemplate() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template1Data.enterName,
          subSection: false,
          description: template1Data.lorealIpsum,
          ref: mainSection3,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template1Data.enterName,
          subSection: false,
          description: template1Data.lorealIpsum,
          ref: mainSection3,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }

  // Template 1

  function handleAddParagraphTemplate_1() {
    // // console.log('executed')

    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          description: template1Data.lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];

      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          type: 'section',
          description: [
            { key: key + 34, description: template1Data.lorealIpsum },
          ],
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      addPage_Modal(addPage, addPara);
      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddHeadingTemplate_1() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: template1Data.enterName,
          subSection: false,
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: template1Data.enterName,
          subSection: false,
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddSectionTemplate_1() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: template1Data.enterName,
          subSection: false,
          description: template1Data.lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: template1Data.enterName,
          subSection: false,
          // description: [
          //   { key: key + 34, description: BlankTemplateData.lorealIpsum },
          // ],
          description: template1Data.lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];

      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }

  // Template 2
  function handleAddParagraphTemplate_2() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          type: 'section',
          description: template1Data.lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];

      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          heading: 'none',
          subSection: false,
          type: 'section',
          description: template1Data.lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      addPage_Modal(addPage, addPara);
      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddHeadingTemplate_2() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template1Data.enterName,
          subSection: false,
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template1Data.enterName,
          subSection: false,
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddSectionTemplate_2() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template1Data.enterName,
          subSection: false,
          description: template1Data.lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          type: 'section',
          heading: template1Data.enterName,
          subSection: false,
          description: template1Data.lorealIpsum,
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];

      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }

  // Template 7
  function handleAddParagraphTemplate_7() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: 'none',
              description: template1Data.lorealIpsum,
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];

      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: 'none',
              description: template1Data.lorealIpsum,
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      addPage_Modal(addPage, addPara);
      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddHeadingTemplate_7() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: template1Data.enterName,
              description: 'none',
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: template1Data.enterName,
              description: 'none',
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];
      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }
  function handleAddSectionTemplate_7() {
    if (rightMainRef.current.clientHeight < maxHeight) {
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: template1Data.enterName,
              description: template1Data.lorealIpsum,
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: pageNo === 1 ? true : false,
          secondPage: pageNo === 2 ? true : false,
          thirdPage: pageNo === 3 ? true : false,
        },
      ];
      dataUpdatableRight.push(addPara[0]);
      setKey(key + 1);
    } else if (rightMainRef.current.clientHeight > maxHeight) {
      const addPage = [
        {
          key: key + 3,
          template: TemplateSelector,
          rightMainRef: rightMainRef,
          wholePageMainRef: wholePageMainRef,
          setDataUpdatableRight: setDataUpdatableRight,
          setDataUpdatableLeft: setDataUpdatableLeft,
          dataUpdatableRight: dataUpdatableRight,
          dataUpdatableLeft: dataUpdatableLeft,
          page: pageNo + 1,
        },
      ];
      const addPara = [
        {
          key: key,
          class: 'block',
          left: [
            {
              heading: 'none',
              description: 'none',
            },
          ],
          right: [
            {
              heading: template1Data.enterName,
              description: template1Data.lorealIpsum,
            },
          ],
          heading: 'none',
          subSection: false,
          type: 'section',
          description: 'none',
          ref: mainSection5,
          id: `mainSection${key + 1}`,
          firstPage: !showOnFirstPage,
          secondPage:
            pageNo === 1
              ? showOnSecondPage
              : pageNo === 2
              ? !showOnSecondPage
              : null,
          thirdPage: true,
        },
      ];

      addPage_Modal(addPage, addPara);

      setKey(key + 1);
    }

    addSectionModal.current.style.display = 'none'; // modal hidden
    addSectionModalBG.current.style.display = 'none'; // modal bg hidden
  }

  // Template Colors
  const [sidePanelBgColor, setSidePanelBgColor] = useState(
    setSidePanelBgColorSelector
  );
  const [sidePanelTextColor, setSidePanelTextColor] = useState(
    setSidePanelTextColorSelector
  );
  const [mainPanelBgColor, setMainPanelBgColor] = useState(
    setMainPanelBgColorSelector
  );

  const proTips_Modal = () => {
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
                <Accordion className='proTips_Accordian' flush>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='0'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      YOUR PERSONAL INFORMATION
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Provide up-to-date information that will allow
                        recruiters to reach you easily. Tips:
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Phone Number:{' '}
                        </span>{' '}
                        Use a cell phone or landline you can readily answer.{' '}
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Home Address:{' '}
                        </span>{' '}
                        A full, detailed address is acceptable, but not
                        required. Your city and state of residence are usually
                        enough. Just be sure to add “Willing to relocate” or
                        “Open to relocation” if that’s an option for you!
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Email Address:{' '}
                        </span>
                        Keep it professional. Johnsmith@gmail.com looks much
                        better to a recruiter than pizzalover88@gmail.com. If
                        you don’t have a professional address, create a free
                        one.
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          LinkedIn Profile:{' '}
                        </span>{' '}
                        When pasting your LinkedIn profile URL, create a
                        customised link.
                      </p>
                      <p>Check out these examples:</p>
                      <div
                        style={{
                          padding: '1rem',
                          borderRadius: '10px',
                          background: '#FFFFFF',
                          width: '40%',
                          marginBottom: '1rem',
                        }}
                      >
                        <p>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'green' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path d='M0 0h24v24H0V0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z' />
                            </svg>
                          </span>{' '}
                          https://www.linkedin.com/in/smithjohn-c++-programmer/
                        </p>
                        <p style={{ marginBottom: '0' }}>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'red' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path
                                d='M0 0h24v24H0V0z'
                                fill='none'
                                opacity='.87'
                              />
                              <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z' />
                            </svg>
                          </span>{' '}
                          https://www.linkedin.com/in/smithjohn-37847479309/
                        </p>
                      </div>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Any Other Relevant Links:{' '}
                        </span>{' '}
                        If you are proud of previous projects related to your
                        new job, feel free to add them here. This includes links
                        to GitHub, Google Drive, or wherever you store your work
                        portfolio.{' '}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='1'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      PROFESSIONAL SUMMARY
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>Create an overview of your career experience here.</p>
                      <ul>
                        <li>
                          Show potential employers the value you can bring to
                          their company.
                        </li>
                        <li>
                          Highlight professional qualifications relevant to your
                          new job.
                        </li>
                        <li>
                          Make use of bullet points for an easy-to-skim career
                          summary.
                        </li>
                      </ul>
                      <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                        CREATE POWERFUL CV BULLET POINTS NO RECRUITER WILL
                        FORGET
                      </p>
                      <p>
                        Our bullet point building and analysis tips make it easy
                        for you to create unique, powerful bullet points for any
                        situation.
                      </p>
                      <p>Check it out below.</p>
                      <p>
                        Don’t want to create your own? Use our bullet point
                        templates. *
                      </p>

                      <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                        Tips for Generating Bullet Points and Examples
                      </p>
                      <p>
                        Each bullet point should show transferable skills and
                        accomplishments, not mere duties.
                      </p>
                      <p>
                        Here’s a good example of a bullet point using
                        specificity to demonstrate
                      </p>
                      <img
                        style={{
                          maxWidth: '100%',
                          marginBottom: '2rem',
                          marginTop: '1rem',
                          borderRadius: '15px',
                        }}
                        src='/assets/images/accordian/proffesional/bulletPoint.png'
                        alt='bulletPoint'
                      />
                      <p>
                        Research* suggests that your CV bullet points should be
                        balanced by these four categories:
                      </p>

                      <ol>
                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Power Words or Action Verbs: 20%
                          </p>
                          <p>
                            Use action verbs to describe what you did.
                            Cultivated Culture suggests these words should be
                            35% of your bullets. We’ve found success using
                            fewer.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Technical and Soft Skills or Terms: 15%
                          </p>
                          <p>
                            These are words you have gained from training,
                            education, or professional certifications. This
                            includes soft skills that will help you perform
                            effectively at your job.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Supporting Common Words: 50%
                          </p>
                          <p>
                            Common words include conjunctions, prepositions, and
                            adverbs. Use them to describe or add weight to your
                            bullets. Cultivated Culture suggests these words
                            should only take up 35%, but we’ve found higher
                            success rates using 15% more.
                          </p>
                        </li>
                      </ol>

                      <p style={{ fontWeight: 'bold' }}>
                        Our Suggested CV Bullet Point Word Distribution:
                      </p>
                      <img
                        style={{
                          maxWidth: '100%',
                          marginBottom: '2rem',
                          marginTop: '1rem',
                        }}
                        src='/assets/images/accordian/proffesional/bulletPointWordDescp.jpeg'
                        alt='bulletPoint'
                      />

                      <p style={{ fontWeight: 'bold' }}>
                        A Powerful Example of an Effective CV Summary:
                      </p>
                      <img
                        style={{
                          maxWidth: '100%',
                          marginBottom: '2rem',
                          marginTop: '1rem',
                        }}
                        src='/assets/images/accordian/proffesional/CvSummary.png'
                        alt='bulletPoint'
                      />
                      <p>
                        Use bullet points to showcase three to four of your
                        outstanding accomplishments.
                      </p>
                      <p>
                        And be specific! When employers read them, they’ll see
                        that you are highly qualified for the available
                        position.
                      </p>
                      <p>Here are some examples:</p>
                      <div
                        style={{
                          padding: '1rem',
                          borderRadius: '10px',
                          background: '#FFFFFF',
                          width: '60%',
                          marginBottom: '1rem',
                        }}
                      >
                        <p>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'red' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path
                                d='M0 0h24v24H0V0z'
                                fill='none'
                                opacity='.87'
                              />
                              <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z' />
                            </svg>
                          </span>
                          ’Expanded operations to global markets’
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'green' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path d='M0 0h24v24H0V0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z' />
                            </svg>
                          </span>
                          ‘Expanded operations to 12 new countries in Europe’
                        </p>

                        <p>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'red' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path
                                d='M0 0h24v24H0V0z'
                                fill='none'
                                opacity='.87'
                              />
                              <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z' />
                            </svg>
                          </span>
                          ’Expanded operations to global markets’
                        </p>
                        <p style={{ marginBottom: '0' }}>
                          <span style={{ fontWeight: 'bold' }}>
                            <svg
                              style={{ fill: 'green' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='24px'
                            >
                              <path d='M0 0h24v24H0V0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z' />
                            </svg>
                          </span>
                          ‘Expanded operations to 12 new countries in Europe’
                        </p>
                      </div>
                      <p style={{ fontWeight: 'bold' }}>
                        <span style={{ color: 'red' }}>*Caveat:</span> When
                        using pre-written, automated sentences, remember: your
                        goal is to be unique and stand out from the crowd, not
                        blend in. In this case, it’s better to use pre-written
                        bullet points only as guides. Add you own punchy to
                        them!
                      </p>
                      <p></p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='3'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      YOUR WORK EXPERIENCE
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Make no mistakes. The weight of your CV or resume work
                        history section cannot be overemphasised.
                      </p>
                      <p>
                        Top secret: That section is your most valuable real
                        estate. It is not just a conventional segment of your
                        CV. It is where the real gold mine lies if you situate
                        it effectively.
                      </p>
                      <p>
                        Some report confirms that 91% of hiring recruiters
                        require applicants to have relatable work experience.
                      </p>
                      <p>
                        Another study equally proves that over two-third of
                        hiring managers find the professional history section
                        the most crucial aspect of a candidate’s CV.
                      </p>

                      <p>Therefore—</p>
                      <p>
                        One smart move you can make in your favour is by
                        ensuring that this section is compelling enough not to
                        miss the recruiter’s notice in split seconds! Spotting
                        this section at first glance is the easiest way for them
                        to grasp what value you are bringing to the table
                        immediately.
                      </p>

                      <p>
                        Below is a step-by-step approach on how to list work
                        experience on your CV:
                      </p>
                      <ol>
                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Have an Outstanding Section Heading
                          </p>
                          <p>
                            Label your professional experience section with one
                            of the headings below:
                          </p>
                          <ul>
                            <li>Employment History</li>
                            <li>Experience</li>
                            <li>Work Experience</li>
                            <li>Work History</li>
                          </ul>
                          <p>
                            Ensure that the section title stands out from the
                            job descriptions by writing it in CAPS or bold
                            fonts.
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Place your professional experience section in a
                            strategic spot
                          </p>
                          <ul>
                            <li>
                              If you a fresh graduate with little notable work
                              experience, put it below your education section
                            </li>
                            <li>
                              If you have got an extensive work history, put it
                              just below your CV summary
                            </li>
                          </ul>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            A Reverse-chronological Sequence is the Right Order
                            of Listing Job
                          </p>
                          <p>Descriptions on your CV</p>
                          <ul>
                            <li>
                              Begin with your present or last official position
                            </li>
                            <li>
                              Followed by the previous one, then the one before
                              it (in that order).
                            </li>
                          </ul>
                          <p>
                            It is only natural that the apex of your career will
                            get the most attention. Hence, the smart thing to do
                            is put your best foot forward by placing your recent
                            job at the forefront.
                          </p>
                          <p>
                            This chronologically descending order of listing job
                            roles has proven to almost always work in favour of
                            most job seekers.
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Ensure that Each Entry is Legible and Explicit
                          </p>
                          <p>Above each job description, place:</p>
                          <ul>
                            <li>Your job title</li>
                            <li>Company name and location</li>
                            <li>Dates worked</li>
                          </ul>

                          <p style={{ marginTop: '1rem' }}>For instance:</p>
                          <p
                            style={{ fontWeight: 'bold', marginBottom: '2rem' }}
                          >
                            CV Professional Experience Example—Heading
                          </p>

                          <p style={{ fontWeight: 'bold' }}>Bank Teller</p>
                          <p>The Bank of Scotland Plc, Edinburgh, Scotland</p>
                          <p style={{ marginBottom: '2rem' }}>2014–2020</p>

                          <p>
                            <span
                              style={{
                                fontWeight: 'bold',
                                color: 'red',
                                marginBottom: '2rem',
                              }}
                            >
                              Note:
                            </span>
                            It is okay to begin each entry with either the
                            company name or your position. What matters is the
                            consistency of your layout. Ensure to maintain the
                            same pattern for all entries. This also includes the
                            dates and duration of each job. If the dates are
                            aligned to the left, make sure all of them are
                            aligned to the left. The last thing you would want
                            to do is to make recruiters search for these
                            details. As you already know, they do not have that
                            luxury of time. Maximise every second spent on your
                            CV.
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            In a situation where you transitioned to different
                            job roles and positions in the same organisation,
                            creating separate entries for each position will be
                            unnecessary.
                          </p>

                          <p>Do this instead:</p>
                          <p style={{ marginBottom: '2rem' }}>
                            For similar positions, assemble your job titles,
                            include one set of bullet points.
                          </p>

                          <p>For instance:</p>
                          <p
                            style={{ fontWeight: 'bold', marginBottom: '2rem' }}
                          >
                            Sample CV Job Description with Hospitality Sector
                          </p>

                          <p style={{ fontWeight: 'bold' }}>
                            The Palms Restaurant Inc., London
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            March 2014 - Present
                          </p>

                          <p style={{ fontWeight: 'bold' }}>Barista</p>
                          <p style={{ marginBottom: '2rem' }}>
                            July 2016 - Present
                          </p>

                          <p style={{ fontWeight: 'bold' }}>
                            Assistant Manager
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            March 2014 – July 2016
                          </p>

                          <ul>
                            <li>Mention Promotion</li>
                            <li>Duties</li>
                            <li>Accomplishments.</li>
                          </ul>
                          <p style={{ marginTop: '2rem' }}>
                            But in cases where your responsibilities are very
                            different, enter each title as a separate subheading
                            followed by a list of bullet points.
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Description for each job should be between 3-5
                            bullet points
                          </p>
                          <ul>
                            <li>
                              Endeavour to spell out your tangible achievements,
                              and not only your responsibilities and duties.
                            </li>
                            <li>
                              Ensure that your most recent job has more role
                              descriptions and bullets points than the others.
                              As you descend, minimise the number of bullet
                              points and include only significant achievements.
                            </li>
                            <li>
                              Never add unnecessary details to your CV. Ensure
                              that every bullet point adds to your suitability
                              for the specified role. Remember that the goal is
                              to tailor or modify each job description to the
                              competencies listed in the job advert.
                            </li>
                          </ul>

                          <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>
                            By tailoring or modifying each job description, I
                            mean:
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            When you go through the job requirement included in
                            an advert, focus on keywords that apply to the need
                            roles.
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            If you come across responsibilities that you may
                            have handled in the past, clearly add them in the
                            bullet points of your CV job description.
                          </p>

                          <p>Here’s an illustration:</p>
                          <p>
                            If there’s a job advert for a Barista role that
                            requires candidates to:
                          </p>
                          <ul>
                            <li>
                              Provide{' '}
                              <span style={{ color: 'green' }}>
                                {' '}
                                in-depth information to customers
                              </span>{' '}
                              on beverage preparation (1)
                            </li>
                            <li>
                              <span style={{ color: 'green' }}>
                                {' '}
                                Offer samples of latest brews
                              </span>
                              (2)
                            </li>
                            <li>
                              <span style={{ color: 'green' }}>
                                {' '}
                                Memorise recipes for speciality coffee beverages
                              </span>{' '}
                              and{' '}
                              <span style={{ color: 'green' }}>
                                {' '}
                                seasonal offerings
                              </span>{' '}
                              (3)
                            </li>
                            <li>
                              Complete successful{' '}
                              <span style={{ color: 'green' }}>
                                {' '}
                                cash audits to correctly balance drawers
                              </span>{' '}
                              at the end of each shift (4)
                            </li>
                            <li>
                              <span style={{ color: 'green' }}>
                                Operate espresso machines, blenders
                              </span>{' '}
                              and{' '}
                              <span style={{ color: 'green' }}>
                                {' '}
                                commercial coffee brewers
                              </span>{' '}
                              (5)
                            </li>
                          </ul>

                          <p
                            style={{
                              fontWeight: 'bold',
                              marginBottom: '2rem',
                              marginTop: '2rem',
                            }}
                          >
                            A well-tailored example of a job description for a
                            CV:
                          </p>

                          <p style={{ fontWeight: 'bold' }}>Barista</p>
                          <p>The Palms Restaurant Inc, London, UK</p>
                          <p>2012–2020</p>

                          <ul>
                            <li>
                              <span style={{ color: 'green' }}>
                                Provided in-depth information to over 200
                                customers on beverage preparation
                              </span>
                              (1)
                            </li>
                            <li>
                              Offered{' '}
                              <span style={{ color: 'green' }}>
                                150 samples of latest brews{' '}
                              </span>{' '}
                              regularly (2)
                            </li>
                            <li>
                              <span style={{ color: 'green' }}>
                                Memorised recipes for 70+ speciality coffee
                                beverages{' '}
                              </span>{' '}
                              and{' '}
                              <span style={{ color: 'green' }}>seasonal </span>{' '}
                              (3)
                            </li>
                          </ul>

                          <p
                            style={{ marginBottom: '2rem', marginTop: '2rem' }}
                          >
                            Key achievement: Improved{' '}
                            <span style={{ color: 'green' }}>deals</span> of{' '}
                            <span style={{ color: 'green' }}>
                              cocktail drinks by 52%{' '}
                            </span>
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            There you go! Have you seen that?
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            This applicant didn’t necessarily have to stuff her
                            work history section with all her previous
                            responsibilities. Instead, she just spelt out the
                            ones that showcased her abilities to handle her
                            prospective duties competently and effectively.
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            {' '}
                            <span style={{ color: 'red' }}> Note: </span> When
                            it comes to CV: bullet points are more effective
                            than paragraphs! This is because bullet points make
                            for a concise presentation as it saves space.
                            Paragraphs are only preferable when you are writing
                            an academic CV.
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            In each of your CV bullet points, necessity is
                            vital. Some study shows that over 40% of recruiters
                            impulsively trash CVs that are generic and not
                            tailored to the specific position.
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            It doesn’t end there though—
                          </p>

                          <p style={{ marginBottom: '2rem' }}>
                            Did you notice something unique about the example
                            above? There’s a specific section that stands out
                            like Wonder Woman in a neon A-Line skirt. For the
                            finishing touch on your CV job description...
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Always Include a “Key Achievement” Section
                          </p>
                          <ul>
                            <li>
                              It immediately grabs the attention of the
                              recruiters.
                            </li>
                            <li>
                              It should contain a value that the prospective
                              employers will not afford to miss.
                            </li>
                            <li>
                              Always adopt the Challenge-Action-Result (CAR)
                              style to define your achievement.
                            </li>
                          </ul>

                          <p style={{ marginTop: '2rem' }}>
                            Below is an example of how the CAR formula works.
                            Remember the sample job description above?
                          </p>
                          <p style={{ marginBottom: '2rem' }}>
                            Key achievement: Improved deals of Cocktail drinks
                            by 52%
                          </p>

                          <p>
                            <span style={{ fontWeight: 'bold' }}>
                              Challenge, what is the problem?{' '}
                            </span>
                            Lesser customer satisfaction.
                          </p>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>Action? </span>
                            Provided exceptional customer service.
                          </p>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>Result? </span>
                            Improving customer retention and increasing sales
                            margin.
                          </p>
                        </li>

                        <li>
                          <p style={{ fontWeight: 'bold' }}>
                            Use ‘Earlier Work Experience’
                          </p>

                          <p>
                            If you have other relevant work experience earlier
                            than 2008, you may list them after your last ‘Work
                            Experience’, but without dates; to avoid ageism
                            bias.
                          </p>
                        </li>
                      </ol>
                      <p></p>
                      <p></p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='4'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      EDUCATION
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        For experienced applicants, move your education section
                        farther down. For fresh graduates or young
                        professionals, place your education section near the top
                        (after the{' '}
                        <span style={{ fontWeight: 'bold' }}> ‘Profile’ </span>{' '}
                        segment).
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          <span style={{ fontWeight: 'bold' }}>
                            You should include:
                          </span>{' '}
                          Qualification name <br /> Example: Bachelor of Science
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Your{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            field of study
                          </span>{' '}
                          and the{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            name of the university or college
                          </span>{' '}
                          you attended and{' '}
                          <span style={{ fontWeight: 'bold' }}>location</span>.
                          Starting and ending dates are optional.
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          For new graduates and young professionals, add{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            academic honours, leadership, activities, sports,{' '}
                          </span>
                          and other distinguishing information. Employers love
                          to know about your accomplishments both inside and
                          outside the classroom.
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Add the grade if you graduated with a first or
                          high-upper (magna cum laude)
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          A{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            ‘Project Highlights’
                          </span>{' '}
                          section can be added to showcase classwork and
                          assignments that are most relevant to your career
                          goals. <br />
                          If you have{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            internship
                          </span>{' '}
                          experience — especially if it relates to and supports
                          your
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          career goals — add a section here. This is
                          particularly useful if you interned with a well-known
                          organisation or held essential responsibilities.
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='5'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      SKILLS
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>Showcase both your hard and soft skills here.</p>
                      <p style={{ marginBottom: '2rem' }}>Tips:</p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Hard skill examples include{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            professional expertise, qualifications,{' '}
                          </span>
                          and{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            project highlights
                          </span>
                          .
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Soft skills include things like{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            effective communication, organisation, personal
                            traits,
                          </span>{' '}
                          and{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            attributes
                          </span>
                          .
                        </div>
                      </p>

                      <p style={{ margin: '2rem 0' }}>
                        Listing specific examples of these will help increase
                        your chances of beating CV ATS.
                      </p>

                      <p style={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                        256 SOFT SKILLS YOU CAN SHOUT ABOUT ON CV
                      </p>

                      <div>
                        <p style={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                          Classifications of Soft Skills
                        </p>
                        Communication Skills <br />
                        Creativity Skills <br />
                        Critical Thinking Skills <br />
                        Influencing Skills <br />
                        Leadership Skills <br />
                        Negotiation Skills <br />
                        Networking Skills <br />
                        Organization and Management Skills <br />
                        Problem Solving Skills <br />
                        Research & Planning Skills <br />
                        Teamwork Skills <br />
                        Time Management Skills <br />
                        Work Ethic Skills <br />
                        Attention to Detail Skills <br />
                        Diversity Skills <br />
                        Courtesy Skills <br />
                        Flexibility Skills <br />
                        Integrity Skills <br />
                        Professionalism Skills <br />
                        Resilience Skills <br />
                        Responsibility Skills <br />
                        Social Skills <br />
                        Work Survival Skills <br />
                        Work-Life Balance Skills <br />
                      </div>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Communication Skills:{' '}
                          </p>
                          Choosing a Communication Medium <br />
                          Clarity of Speech and Writing <br />
                          Describing feelings <br />
                          Editing <br />
                          Empathy Expressing Ideas <br />
                          Facilitating Group Discussion <br />
                          Giving and Receiving Feedback <br />
                          Interviewing <br />
                          Knowing When to Communicate <br />
                          Listening Attentively <br />
                          Negotiating <br />
                          Non-Verbal Communication <br />
                          Open-Mindedness <br />
                          Perceiving Nonverbal Messages <br />
                          Persuading Others <br />
                          Persuasion <br />
                          Presentation Skills <br />
                          Providing Appropriate Feedback, Either <br />
                          Independently or When Asked <br />
                          Public Speaking <br />
                          Reporting Information <br />
                          Speaking Effectively <br />
                          Writing Concisely <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Creativity Skills:{' '}
                          </p>
                          Entrepreneurial Spirit <br />
                          Imagining Alternatives <br />
                          Innovation <br />
                          Perseverance <br />
                          Product and Market Knowledge <br />
                          Teamwork <br />
                          Uncertainty Management <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Critical Thinking Skills:{' '}
                          </p>
                          Asking Thought-provoking Questions
                          <br />
                          Being Imaginative <br />
                          Conceptualizing Situations
                          <br />
                          Confidence <br />
                          Creativity
                          <br />
                          Curiosity
                          <br />
                          Demonstrating Cognitive Flexibility
                          <br />
                          Making Abstract Connections
                          <br />
                          Making Inferences
                          <br />
                          Open-mindedness
                          <br />
                          Predicting and Anticipating Shortfalls
                          <br />
                          Self-reflection <br />
                          Showing Curiosity <br />
                          Showing Foresight <br />
                          Synthesizing Ideas <br />
                          Thinking Outside the Box <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Influencing Skills:{' '}
                          </p>
                          Assertiveness <br />
                          Emotional intelligence <br />
                          Excellent communication <br />
                          Negotiation skills <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Leadership Skills:{' '}
                          </p>
                          Ability to Mentor <br />
                          Active Listening <br />
                          Conflict Resolution <br />
                          Empathy <br />
                          Positive Attitude <br />
                          Risk-taking <br />
                          Valuing Feedback <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Negotiation Skills:{' '}
                          </p>
                          Ability to Convince, Argue and Negotiate <br />
                          Active Listening <br />
                          Communication Skills <br />
                          Cooperation <br />
                          Open-mindedness <br />
                          Questioning <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Networking Skills:{' '}
                          </p>
                          Active Listening <br />
                          Confidence <br />
                          Cross-cultural Working Habits <br />
                          Cross-functional, Interdisciplinary Habits <br />
                          Empathy <br />
                          Interpersonal Skills <br />
                          Public Speaking <br />
                          Relational Ability <br />
                          Relationship Building <br />
                          Resilience <br />
                          Social Skills <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Organization and Management Skills:{' '}
                          </p>
                          Change Management <br />
                          Coaching <br />
                          Coordinating and Planning Tasks <br />
                          Counselling <br />
                          Decision Making with Others <br />
                          Delegating Responsibility to Others <br />
                          Demonstrating Effective Time Management <br />
                          External Awareness <br />
                          Following Through on Tasks <br />
                          Handling Details <br />
                          Initiating New Ideas <br />
                          Legal and Regulatory Awareness <br />
                          Management of Complex Issues <br />
                          Managing Conflict <br />
                          Managing Groups <br />
                          Multitasking <br />
                          Organizational Awareness <br />
                          Project Management Mastery <br />
                          Promoting Change <br />
                          Selling Ideas or Products <br />
                          Teaching <br />
                          Technologic Monitoring <br />
                          Uncertainty Management <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Problem-Solving Skills:{' '}
                          </p>
                          Ability to Conduct Information Search <br />
                          Analytical Thinking Skills <br />
                          Creativity <br />
                          Innovative Approach <br />
                          Listening Skills <br />
                          Uncertainty Management <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Research & Planning Skills:{' '}
                          </p>
                          Identifying Appropriate Resources <br />
                          Identifying Problems <br />
                          Imagining Alternatives <br />
                          Independence <br />
                          Internationally Recognized Profiles <br />
                          Knowledge and Practice of Digital Tools <br />
                          Setting Goals <br />
                          Solving Problems <br />
                          Strong Capacity for Analysis and Synthesis <br />
                          Time Management <br />
                          Ability to Communicate Results <br />
                          Analyzing Information <br />
                          Attention to Detail <br />
                          Capacity for Concentration <br />
                          Capacity for Self-assessment and Questioning <br />
                          Creating Ideas <br />
                          Defining Needs and Requirements <br />
                          Developing Evaluation Strategies <br />
                          Extracting Important Information <br />
                          Forecasting and Predicting <br />
                          Gathering Information <br />
                          High-level Scientific Expertise <br />
                          High-level Technical Expertise <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Teamwork Skills:{' '}
                          </p>
                          Agreeability <br />
                          Collaboration <br />
                          Conflict Resolution <br />
                          Cooperation <br />
                          Facilitation <br />
                          Helpfulness <br />
                          Influence <br />
                          Likeability <br />
                          Persuasiveness <br />
                          Supportiveness <br />
                        </div>
                        <div style={{ width: '50%' }}>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Work Ethic Skills:{' '}
                          </p>
                          Passion <br />
                          Professionalism <br />
                          Teamwork <br />
                          Time Management <br />
                          Value for Feedback <br />
                          Decisiveness <br />
                          Delegation <br />
                          Dependability <br />
                          Determination <br />
                          Discipline <br />
                          Emotional Intelligence <br />
                          Entrepreneurial Mindset <br />
                          Forward-looking Work Approach <br />
                          Great Capacity for Work <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Attention to Detail skills:{' '}
                          </p>
                          Active Listening Skills <br />
                          Analytical Skills <br />
                          Observational Skills <br />
                          Organizational Skills <br />
                          Time Management Skills <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Diversity Skills:{' '}
                          </p>
                          Accurately Perceiving Feelings or Situations
                          Collaboration Skills Communication Skills Empathy
                          Leveraging Diversity Proficiency in Foreign Languages
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Flexibility Skills:{' '}
                          </p>
                          Acceptance <br />
                          Adaptability <br />
                          Adjustability <br />
                          Calmness <br />
                          Focusing on Solutions <br />
                          Improvisation <br />
                          Lifelong Learning <br />
                          Teachability <br />
                          Versatility <br />
                          Willingness to Change <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Courtesy Skills:{' '}
                          </p>
                          Apologizing <br />
                          Being Polite <br />
                          Business Etiquette <br />
                          Decency <br />
                          Good Manners <br />
                          Graciousness <br />
                          Gratefulness <br />
                          Patience <br />
                          Phone Etiquette <br />
                          Respectfulness <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Integrity Skills:{' '}
                          </p>
                          Attentiveness <br />
                          Being Ethical <br />
                          Displaying Personal Values <br />
                          Doing What's Right <br />
                          Focusing <br />
                          Having High Moral Standards <br />
                          Having Principles <br />
                          Honesty <br />
                          Kindness <br />
                          Trustworthiness <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Professionalism Skills:{' '}
                          </p>
                          Client-facing Skills <br />
                          Commercial Acumen <br />
                          Compliance <br />
                          Friendliness <br />
                          Phone Etiquette <br />
                          Professional Awareness <br />
                          Self-control <br />
                          Sharing Credit with Colleagues <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Resilience Skills:{' '}
                          </p>
                          Calmness <br />
                          Enthusiasm <br />
                          Growth Mindset <br />
                          Optimism <br />
                          Perseverance <br />
                          Tenacity <br />
                          Willingness to Change <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Responsibility Skills:{' '}
                          </p>
                          Accountability <br />
                          Aspiration <br />
                          Common Sense <br />
                          Conscientiousness <br />
                          Dependability <br />
                          Follow-Through <br />
                          Maturity <br />
                          Resourcefulness <br />
                          Self-Discipline <br />
                          Virtuousness <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Social Skills:{' '}
                          </p>
                          Consideration <br />
                          Empathy <br />
                          Friendliness <br />
                          Self-Control <br />
                          Showing Warmth <br />
                          Sociability <br />
                          Humor <br />
                          Nurturing <br />
                          Open Body Language <br />
                          Personability <br />
                          Persuasion. <br />
                          Relational Ability <br />
                          Relationship Building <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Work Survival Skills:{' '}
                          </p>
                          Accepting Responsibility <br />
                          Adaptability <br />
                          Attending to Detail <br />
                          Being Punctual <br />
                          Cooperating <br />
                          Cross-cultural Working Habits <br />
                          Cross-functional, Interdisciplinary Habits <br />
                          Current Industry Trends <br />
                          Editing Skills <br />
                          Enforcing Policies or Established Rules <br />
                          Enlisting the Help of Others When You Need It <br />
                          Making and Implementing Decisions <br />
                          Managing Time Wisely <br />
                          Meeting Goals, Both Short-term and Long-term <br />
                          Motivation <br />
                          Multiple and Important Responsibilities <br />
                          Networking <br />
                          Open-mindedness <br />
                          Organizing <br />
                          Research Skills <br />
                          Risk-taking <br />
                          Setting Deadlines and Meeting Them <br />
                          Speed <br />
                          Strategic Thinking <br />
                          Writing Concisely <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Work-Life Balance Skills:{' '}
                          </p>
                          Courage <br />
                          Creativity <br />
                          Delegation <br />
                          Excellent Communication <br />
                          Information Management <br />
                          People Management <br />
                          Planning <br />
                          Professional Awarenessment <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Time Management Skills:{' '}
                          </p>
                          Delegation <br />
                          Effective Stress Management <br />
                          Focus <br />
                          Organization <br />
                          Planning <br />
                          Speed <br />
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='6'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      INTERESTS
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        These include topics you feel will lead to creating
                        avenues for a conversation with interviewers.
                      </p>
                      <p>Tips:</p>
                      <p>
                        Only use topics that aren’t contentious. Some examples:
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Artistic Activities</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>House Hobbies</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Leisure & Entertainment</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Music</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Online Activities</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Outdoor Pastimes</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Sports</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Technology</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Tourism and Travel</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Volunteering </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div> Writing </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Artistic Activities :
                          </p>
                          Connect the dots <br />
                          Create a natural collage <br />
                          Create Pan art <br />
                          Design <br />
                          Make tracks <br />
                          Painting / drawing <br />
                          Photography / video production <br />
                          Sculpture <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            House Hobbies :
                          </p>
                          Board games
                          <br />
                          DIY
                          <br />
                          Learn an instrument
                          <br />
                          Learn how to cook
                          <br />
                          Mindfulness
                          <br />
                          Paint
                          <br />
                          Pick up needlework
                          <br />
                          Practice meditation
                          <br />
                          Work out online
                          <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Leisure & Entertainment :
                          </p>
                          Acting <br />
                          Circus <br />
                          Comedy clubs <br />
                          Open Mic Nights <br />
                          Stand-up comedy <br />
                          Theatre <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Music :
                          </p>
                          Band or orchestra <br />
                          Choir Conducting <br />
                          Singing / gigging <br />
                          Song writing <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Online Activities :
                          </p>
                          Case Studies <br />
                          E-sports <br />
                          Group Projects. <br />
                          Guest Lectures. <br />
                          Peer-Editing/Review <br />
                          Presentations <br />
                          Social media <br />
                          Vlogging <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Outdoor Pastimes :
                          </p>
                          Birding <br />
                          Camping <br />
                          Fishing <br />
                          Gardening <br />
                          Hunting <br />
                          Mountain climbing <br />
                          Orienteering <br />
                          Photography <br />
                        </div>
                        <div style={{ width: '50%' }}>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Sports :
                          </p>
                          Baseball <br />
                          Dance <br />
                          Gym <br />
                          Skiing <br />
                          Swimming <br />
                          Tennis <br />
                          Yoga <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Technology :
                          </p>
                          Artificial intelligence <br></br>
                          Blockchain <br></br>
                          Coding <br></br>
                          Cryptocurrencies <br></br>
                          Stock trading <br></br>
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Tourism & Travel :
                          </p>
                          Canoeing and water sports <br />
                          Cycling and mountain biking <br />
                          Fishing <br />
                          Garden and forests <br />
                          International experience <br />
                          Language learning <br />
                          Walking and hiking <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Volunteering :
                          </p>
                          Charity / fundraising <br />
                          Coaching / mentoring <br />
                          Community events <br />
                          Environmental & Political Organisations <br />
                          Environmental work <br />
                          Homeless Shelters & Food Banks <br />
                          Hospitals & Blood Banks. <br />
                          Libraries & Museums. <br />
                          Tutoring & Mentoring <br />
                          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Writing :
                          </p>
                          Blogging <br />
                          Journaling <br />
                          Journalism <br />
                          Poetry <br />
                          Short stories <br />
                        </div>
                      </p>

                      <p>
                        Be specific. Instead of saying ‘sports’, talk about
                        which sport you love in particular. Rather than saying
                        ‘food’, let them know your favourite dish and why you
                        enjoy it so much. Here are a few more examples:
                      </p>

                      <p style={{ fontWeight: 'bold' }}>INTERESTS</p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Volunteering (Parish treasurer, Fullness of Joy
                          Parish, Redeemed Christian Church of God, PH).
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Visiting Tourism Sites (Elegushi Beach and Burj
                          Khalifa).
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Listening to Music (Falz, Olamide, Jon Bellion, J
                          Cole, Kenya West).
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Sports (Liverpool FC, Enyimba International FC, Kano
                          Pillars FC).
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Delicacies (hot-sauced food, pounded yam/white soup,
                          unripe plantain porridge, beans & plantain).
                        </div>
                      </p>

                      <p style={{ fontWeight: 'bold' }}>INTERESTS</p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Travelling: Enjoy travelling, especially road trips by
                          car and bike.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>Spending Quality Time with Family and Friends</div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Listening to Music: Indian contemporary, rock and pop,
                          special interest in retro pop, disco and rock bands.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Reading: New concepts and knowledge excite me. I am
                          into all forms of reading: print, ebooks and
                          audiobooks.
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='7'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘EXPERIENCE HIGHLIGHTS’ OR ‘CAREER HIGHLIGHTS’, OR ‘CAREER
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Any of these captions will help create a functional CV.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p>
                        A functional CV pulls all your relevant skills,
                        knowledge, experiences, and qualifications into this
                        section.
                      </p>
                      <p style={{ marginBottom: '2rem' }}>
                        Don’t worry about when and where the events happened.
                        Focus on the best aspects of the experience.
                      </p>

                      <p>Here is an example:</p>
                      <p style={{ fontWeight: 'bold' }}>
                        EXPERIENCE HIGHLIGHTS
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>
                              NETWORK ADMINISTRATOR:
                            </span>{' '}
                            Provided workable and proven solutions to maintain
                            various operating environments. Installed,
                            configured, and maintained the network for military
                            training school, achieving zero classroom downtime
                            for more than three years. Demonstrated strong
                            diagnostic abilities with attention to detail and
                            ability to work effectively and efficiently in a
                            fast-paced environment.
                          </p>
                          <p>
                            Recognised as a competent and credible authority on
                            establishing procedures, conducting tests to verify
                            correct operation of equipment/ systems,
                            implementing fault-tolerant procedures for hardware
                            and software failures, and designing audit
                            procedures to test systems integrity and
                            reliability.
                          </p>
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>
                              PROJECT MANAGER:
                            </span>{' '}
                            Managed $3.9M supply inventory and an annual budget
                            of $710K. Provided all logistics, including parts
                            issues, contingency purchasing, and emergency field
                            delivery, with no measurable losses
                          </p>
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>
                              RISK ANALYST:
                            </span>{' '}
                            Identified potential liabilities in computerised
                            military accounting system training programme.
                            Analysed accuracy, usage feasibility, and
                            deficiencies while providing solutions to obstacles.
                          </p>
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' />
                            </svg>
                          </span>
                        </div>
                        <div>
                          <p>
                            <span style={{ fontWeight: 'bold' }}>LEADER: </span>{' '}
                            Earned multiple awards for performance excellence.
                            Motivated and inspired organisations ranging in size
                            from 35-450 personnel. Effectively guided and
                            directed associates to achieve their highest
                            potential.
                          </p>
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='8'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘ACHIEVEMENT HIGHLIGHTS’ OR ‘ACCOMPLISHMENT
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        If you prefer grouping your most significant and
                        relevant accomplishments in one place, add this section.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Using this style can help recruiters to more easily
                          see how your experience, skills, and knowledge fit the
                          present role.
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Place this section at the beginning of your CV.
                        </div>
                      </p>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#195190ff'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Don’t bury your biggest accomplishments in a sea of
                          small type of dense text. Be specific; not complex.
                        </div>
                      </p>

                      <p style={{ Margin_top: '2rem' }}>Here is an example:</p>
                      <p style={{ fontWeight: 'bold' }}>
                        ACHIEVEMENT HIGHLIGHTS
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Manage and monitor 2016-2018 Budget Support Programme
                          to realise the provision of EUR98 million to the Niger
                          Republic government budget to support fiscal
                          responsibility and reforms.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Co-formulated the 2019-2020 Budget Support Programme
                          with funding of EUR54 million.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Designed technical assistance in the EUR8 million
                          State Building Contract project, 2017-2020
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Trained 1,570 staff successfully from the Ministries
                          of Finance, Health, Infrastructure, Agriculture, and
                          Education in programme-based budgeting.
                        </div>
                      </p>

                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ width: '20px' }}>
                          <span>
                            <svg
                              style={{ marginRight: '1rem' }}
                              height='20px'
                              viewBox='0 0 24 24'
                              width='20px'
                              fill='#000000'
                            >
                              <path d='M0 0h24v24H0z' fill='none' />
                              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                            </svg>{' '}
                          </span>
                        </div>
                        <div>
                          Drafted and developed laws, procedures, rules,
                          regulations, and guides related to the budget process.
                        </div>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='9'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘HONOURS AND AWARDS’
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Add this section if you wish to showcase any
                        distinguishing honours or awards.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p>Include this section in any of the following ways:</p>
                      <p>
                        As a separate category either near the start or the end
                        of your CV As a category integrated into the{' '}
                        <span style={{ fontWeight: 'bold' }}> ‘Summary’ </span>
                        section with a
                        <span style={{ fontWeight: 'bold' }}>
                          {' '}
                          ‘Honours and Awards’
                        </span>{' '}
                        subheading
                      </p>
                      <p style={{ marginBottom: '2rem' }}>
                        Integrated into the jobs where you won the{' '}
                        <span style={{ fontWeight: 'bold' }}>Honours</span> or
                        <span style={{ fontWeight: 'bold' }}>Awards</span>{' '}
                        Listed in the{' '}
                        <span style={{ fontWeight: 'bold' }}> ‘Education’</span>{' '}
                        section
                      </p>

                      <p style={{ marginBottom: '2rem' }}>
                        Depending on your needs, you can include. . .
                        <br />
                        board of directors’ affiliations
                        <br />
                        media mentions
                        <br />
                        patents
                        <br />
                        public speaking activities
                        <br />
                        publications
                      </p>

                      <p style={{ marginBottom: '2rem' }}>
                        . . . or anything that tells people you’re an expert in
                        your field, known by your peers, and valued for your
                        contributions and achievements.
                      </p>

                      <p>
                        Like{' '}
                        <span style={{ fontWeight: 'bold' }}>
                          ‘Honours and Awards’
                        </span>{' '}
                        , the list above can be added in a separate section or
                        integrated into your{' '}
                        <span style={{ fontWeight: 'bold' }}>‘Summary’,</span>{' '}
                        <span style={{ fontWeight: 'bold' }}>‘Experience’</span>{' '}
                        , or{' '}
                        <span style={{ fontWeight: 'bold' }}>‘Education’ </span>{' '}
                        section.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='10'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘PUBLICATIONS’ AND ‘PUBLIC SPEAKING’
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        Separate sections containing third-party endorsements of
                        your expertise.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p>
                        These types of achievements are precious for most CVs
                        and can be a large boost to being recognised by
                        recruiters.
                      </p>
                      <p>
                        Create a separate section for each, integrate them into
                        your{' '}
                        <span style={{ fontWeight: 'bold' }}>‘Summary’</span>{' '}
                        section, or add them to the appropriate work or school
                        listing in{' '}
                        <span style={{ fontWeight: 'bold' }}> ‘Education’</span>
                        .
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='11'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      ‘PROFESSIONAL ASSOCIATIONS’, OR ‘PROFESSIONAL
                      AFFILIATIONS’, OR ‘ASSOCIATION MEMBERSHIPS’
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        This section includes any committees, leadership roles,
                        or accomplishments you’ve earned.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p>
                        Feel free to experiment in using any of these titles.
                      </p>
                      <p style={{ marginBottom: '2rem' }}>
                        If you were involved in any professional associations
                        you feel are relevant to your industry, list them here.
                      </p>

                      <p>
                        Don’t leave any relevant accomplishment out! This can be
                        a valuable section of your CV if used properly.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='12'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      CERTIFICATIONS
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p>
                        In this section, you can include any professional
                        certifications that are relevant to the job role you’re
                        applying for.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p style={{ marginBottom: '2rem' }}>
                        It’s good to include the certification date and the
                        awarding body.
                      </p>

                      <p>
                        Here are some examples in the IT field you can shout
                        about in this section:
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Microsoft
                        Certified Systems Engineer (MSCE)
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> CompTIA
                        A+
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> CompTIA
                        Linux+
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> CompTIA
                        Network+
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> ITIL
                        Foundations
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Sun
                        Certified System Administrator (SCSA)
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Linux +
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> MCSA
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> VMware
                        Certified Professional (VCP)
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Cisco
                        Certified Network Associate, Routing &
                      </p>
                      <p>
                        <span style={{ marginRight: '2rem' }}>o</span> Switching
                        (CCNA-R&S)
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='13'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      SOFTWARE
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p style={{ marginBottom: '2rem' }}>
                        In this section, you list hands-on tech professional
                        software that you can demonstrate or have technical
                        proficiency in.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p style={{ marginBottom: '2rem' }}>
                        Think of any computer software you use in your field
                        that makes a method to work. List them here. And
                        indicate the level of your proficiency in using it.
                      </p>

                      <p>
                        Here are some examples in data analytics and helpdesk
                        fields:
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'end',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            AzureDesk
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Dreamweaver
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Eviews
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> Flash
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            HappyFox
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Hitachi HCP/HDI
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> NVivo
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            HelpSpot
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> NVivo
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Oracle ZFS
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Python
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Qualtrics
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> R
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> SPSS
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> Stata
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Tableau
                          </p>
                        </div>
                        <div style={{ width: '50%' }}>
                          <div>
                            <p
                              style={{
                                color: '#e7264c',
                                fontSize: '20px',
                                fontWeight: 'bold',
                              }}
                            >
                              SOFTWARE
                            </p>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>HelpSpot</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '75%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>AzureDesk</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '50%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>SPSS</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '40%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>Happyfox</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '90%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>Flash</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '70%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>Dreamweaver</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '80%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className='proTips_Accordian_Item'
                    eventKey='14'
                  >
                    <Accordion.Header className='proTips_Accordian_Header'>
                      LANGUAGES
                    </Accordion.Header>
                    <Accordion.Body className='proTips_Accordian_Body'>
                      <p style={{ marginBottom: '2rem' }}>
                        In this section, you list hands-on tech professional
                        software that you can demonstrate or have technical
                        proficiency in.
                      </p>
                      <p style={{ fontWeight: 'bold' }}>Tips:</p>
                      <p style={{ marginBottom: '2rem' }}>
                        If you speak, read, or write multiple international
                        languages, prominently shout about them ─ especially if
                        the job you’re applying for considers these languages
                        important. And indicate your proficiency level as well.
                      </p>

                      <p>Here are some examples:</p>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'end',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            English
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            French
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            German
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span> Hindi
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Italian
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Mandarin
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Polish
                          </p>
                          <p>
                            <span style={{ marginRight: '2rem' }}>o</span>{' '}
                            Portuguese
                          </p>
                        </div>
                        <div style={{ width: '50%' }}>
                          <div>
                            <p
                              style={{
                                color: '#e7264c',
                                fontSize: '20px',
                                fontWeight: 'bold',
                              }}
                            >
                              LANGUAGES
                            </p>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>English</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '90%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>French</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '40%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '1rem',
                              }}
                            >
                              <div style={{ width: '105px' }}>Spanish</div>
                              <div style={{ marginLeft: '3px' }}>
                                <div
                                  style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#D3D0C8',
                                    width: '200px',
                                    height: '3px',
                                  }}
                                  className='progressBarContainer_template_4'
                                >
                                  <div
                                    style={{
                                      width: '80%',
                                      backgroundColor: '#000000',
                                      height: '3px',
                                    }}
                                    className='progressBarCompleted'
                                  >
                                    {' '}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

  function updateBuilderDocument() {
    return resumeId && pageUpdatableData === null ? (
      <div className='builder_loader_wrapper'>
        <ThreeDots wrapperClass='loader' />
      </div>
    ) : (
      // <div className='builder_loader_wrapper'>
      //   <ThreeDots wrapperClass='loader' />
      // </div>
      <BuilderDocument
        loginPopup={loginPopup}
        loginPopupBG={loginPopupBG}
        userLoggedIn={userLoggedIn}
        userData={userData}
        resumeId={resumeId}
        saveBuilderData={saveBuilderData}
        pageDocumentData={pageDocumentData}
        document_name={resumeId ? resumeData?.documentName : document_name}
        setDocument_name={setDocument_name}
        templateName={TemplateSelector}
        templateDataSelector={templateDataSelector}
        addSectionModal={addSectionModal}
        addSectionModalBG={addSectionModalBG}
        pageBorderColor={pageBorderColor}
        pageBorderWidth={pageBorderWidth}
        pageBorderStyle={pageBorderStyle}
        borderedPage={borderedPage}
        headingTextStyleConditions={headingTextStyleConditions}
        bodyTextStyleConditions={bodyTextStyleConditions}
        headingTextSizeConditions={headingTextSizeConditions}
        bodyTextSizeConditions={bodyTextSizeConditions}
        mainPanelBgColor={mainPanelBgColor}
        sidePanelTextColor={sidePanelTextColor}
        sidePanelBgColor={sidePanelBgColor}
        pageUpdatableData={pageUpdatableData}
        pageLayout={pageLayout}
        lineHeight={lineHeight}
        docummentMargin={docummentMargin}
        docummentDateFormat={docummentDateFormat}
        documentHeadingTextStyle={documentHeadingTextStyle}
        documentBodyTextStyle={documentBodyTextStyle}
        documentBodyTextSize={documentBodyTextSize}
      />
    );
  }

  // console.log('pageUpdatableData', pageUpdatableData);

  useEffect(() => {
    templateUpdatableData &&
      setDataUpdatableRight(setDataUpdatableRightConditions);
    templateUpdatableData &&
      setDataUpdatableLeft(setDataUpdatableLeftConditions);
    templateUpdatableData && setSidePanelBgColor(setSidePanelBgColorSelector);
    templateUpdatableData &&
      setSidePanelTextColor(setSidePanelTextColorSelector);
    templateUpdatableData && setMainPanelBgColor(setMainPanelBgColorSelector);

    // // console.log('from useEffect ', dataUpdatableRight)
    // // console.log('from useEffect ', dataUpdatableLeft)
    templateUpdatableData &&
      (template === 'executiveTemplate_8' ||
      template === 'executiveTemplate_9' ||
      template === 'executiveTemplate_10'
        ? setPageUpdatableData([
            {
              key: 1,
              template: TemplateSelector,
              rightMainRef: rightMainRef,
              wholePageMainRef: wholePageMainRef,
              setDataUpdatableRight: setDataUpdatableRight,
              setDataUpdatableLeft: setDataUpdatableLeft,
              dataUpdatableRight: setDataUpdatableRightConditions,
              dataUpdatableLeft: setDataUpdatableLeftConditions,
              page: pageNo,
            },
            {
              key: 2,
              template: TemplateSelector,
              rightMainRef: rightMainRef,
              wholePageMainRef: wholePageMainRef,
              setDataUpdatableRight: setDataUpdatableRight,
              setDataUpdatableLeft: setDataUpdatableLeft,
              dataUpdatableRight: setDataUpdatableRightConditions,
              dataUpdatableLeft: setDataUpdatableLeftConditions,
              page: pageNo + 1,
            },
          ])
        : setPageUpdatableData([
            {
              key: 1,
              template: TemplateSelector,
              rightMainRef: rightMainRef,
              wholePageMainRef: wholePageMainRef,
              setDataUpdatableRight: setDataUpdatableRight,
              setDataUpdatableLeft: setDataUpdatableLeft,
              dataUpdatableRight: setDataUpdatableRightConditions,
              dataUpdatableLeft: setDataUpdatableLeftConditions,
              page: pageNo,
            },
          ]));

    updateBuilderDocument();
    // setKey(key+1)
  }, [template, templateUpdatableData]);

  // useEffect(() => {

  // }, [])

  const login_Modal = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal login_modal '>
            <div>
              <h1>Loving it?</h1>
              <p>Let's create your Resumix account.</p>
              <div>
                <a href='/login'>
                  <button>Login</button>
                </a>
                <a href='/signup'>
                  <button className='login_modal_secondary_btn'>SignUp</button>
                </a>
              </div>
              {/* <button onClick={onClose}>No</button> */}
            </div>
          </div>
        );
      },
    });
  };

  const [filterResume, setFilterResume] = useState('All');

  const dropdownOptions = ['All', 'Resumes', 'Executive Resumes'];
  const defaultDropdownOption = dropdownOptions[0];

  const chooseTemplateData = [
    {
      name: 'template_1',
      img: '/assets/images/Templates/template_1.png',
      alt: 'template_1',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_2',
      img: '/assets/images/Templates/template_2.png',
      alt: 'template_2',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_3',
      img: '/assets/images/Templates/template_3.png',
      alt: 'template_3',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_4',
      img: '/assets/images/Templates/template_4.png',
      alt: 'template_4',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_5',
      img: '/assets/images/Templates/template_5.png',
      alt: 'template_5',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_6',
      img: '/assets/images/Templates/template_6.png',
      alt: 'template_6',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_7',
      img: '/assets/images/Templates/template_7.png',
      alt: 'template_7',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_8',
      img: '/assets/images/Templates/template_8.png',
      alt: 'template_8',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_9',
      img: '/assets/images/Templates/template_9.png',
      alt: 'template_9',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_10',
      img: '/assets/images/Templates/template_10.png',
      alt: 'template_10',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_11',
      img: '/assets/images/Templates/template_11.png',
      alt: 'template_11',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_12',
      img: '/assets/images/Templates/template_12.png',
      alt: 'template_12',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_13',
      img: '/assets/images/Templates/template_13.png',
      alt: 'template_13',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_14',
      img: '/assets/images/Templates/template_14.png',
      alt: 'template_14',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_15',
      img: '/assets/images/Templates/template_15.png',
      alt: 'template_15',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_16',
      img: '/assets/images/Templates/template_16.png',
      alt: 'template_16',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_17',
      img: '/assets/images/Templates/template_17.png',
      alt: 'template_17',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_18',
      img: '/assets/images/Templates/template_18.png',
      alt: 'template_18',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_19',
      img: '/assets/images/Templates/template_19.png',
      alt: 'template_19',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_20',
      img: '/assets/images/Templates/template_20.png',
      alt: 'template_20',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_21',
      img: '/assets/images/Templates/template_21.png',
      alt: 'template_21',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_22',
      img: '/assets/images/Templates/template_22.png',
      alt: 'template_22',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_23',
      img: '/assets/images/Templates/template_23.png',
      alt: 'template_23',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_24',
      img: '/assets/images/Templates/template_24.png',
      alt: 'template_24',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_25',
      img: '/assets/images/Templates/template_25.png',
      alt: 'template_25',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_26',
      img: '/assets/images/Templates/template_26.png',
      alt: 'template_26',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_27',
      img: '/assets/images/Templates/template_27.png',
      alt: 'template_27',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_28',
      img: '/assets/images/Templates/template_28.png',
      alt: 'template_28',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_29',
      img: '/assets/images/Templates/template_29.png',
      alt: 'template_29',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: 'template_30',
      img: '/assets/images/Templates/template_30.png',
      alt: 'template_30',
      type: 'Resumes',
      sort: 'all',
    },
    {
      name: null,
      img: null,
      alt: null,
      section: 'separator',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_1',
      img: '/assets/images/Templates/executiveTemplate_1.png',
      alt: 'executiveTemplate_1',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_2',
      img: '/assets/images/Templates/executiveTemplate_2.png',
      alt: 'executiveTemplate_2',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_3',
      img: '/assets/images/Templates/executiveTemplate_3.png',
      alt: 'executiveTemplate_3',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_4',
      img: '/assets/images/Templates/executiveTemplate_4.png',
      alt: 'executiveTemplate_4',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_5',
      img: '/assets/images/Templates/executiveTemplate_5.png',
      alt: 'executiveTemplate_5',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_6',
      img: '/assets/images/Templates/executiveTemplate_6.png',
      alt: 'executiveTemplate_6',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_7',
      img: '/assets/images/Templates/executiveTemplate_7.png',
      alt: 'executiveTemplate_7',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_8',
      img: '/assets/images/Templates/executiveTemplate_8.png',
      alt: 'executiveTemplate_8',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_9',
      img: '/assets/images/Templates/executiveTemplate_9.png',
      alt: 'executiveTemplate_9',
      type: 'Executive Resumes',
      sort: 'all',
    },
    {
      name: 'executiveTemplate_10',
      img: '/assets/images/Templates/executiveTemplate_10.png',
      alt: 'executiveTemplate_10',
      type: 'Executive Resumes',
      sort: 'all',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (!userLoggedIn) {
        localStorage.setItem('pageData', pageDocumentData);
        loginPopup.current && (loginPopup.current.style.display = 'flex'); // modal visible
        loginPopupBG.current && (loginPopupBG.current.style.display = 'flex'); // modal bg visible
      }
    }, 20000);
    if (userLoggedIn) {
      // login_Modal()
      loginPopup.current && (loginPopup.current.style.display = 'none'); // modal visible
      loginPopupBG.current && (loginPopupBG.current.style.display = 'none'); // modal bg visible
    }
  });

  return (
    <div className='builder'>
      <BuilderHeader
        builderData={dataUpdatableRight ? dataUpdatableRight : { length: 0 }}
        userLoggedIn={userLoggedIn}
        userData={userData}
      />
      <BuilderSubHeader
        pageBorderColor={pageBorderColor}
        setPageBorderColor={setPageBorderColor}
        pageBorderWidth={pageBorderWidth}
        setPageBorderWidth={setPageBorderWidth}
        pageBorderStyle={pageBorderStyle}
        setPageBorderStyle={setPageBorderStyle}
        borderedPage={borderedPage}
        setBorderedPage={setBorderedPage}
        sidePanelTextColor={sidePanelTextColor}
        setSidePanelTextColor={setSidePanelTextColor}
        sidePanelBgColor={sidePanelBgColor}
        setSidePanelBgColor={setSidePanelBgColor}
        setPageLayout={setPageLayout}
        setDocummentMargin={setDocummentMargin}
        setLineHeight={setLineHeight}
        lineHeight={lineHeight}
        setDocummentDateFormat={setDocummentDateFormat}
        setDocumentHeadingTextStyle={setDocumentHeadingTextStyle}
        setDocumentBodyTextStyle={setDocumentBodyTextStyle}
        setDocumentBodyTextSize={setDocumentBodyTextSize}
      />

      <div style={{ overflowX: 'hidden' }}>
        <div
          style={{ display: showChangeTemplateSidebar ? 'block' : 'none' }}
          onClick={() =>
            setShowChangeTemplateSidebar(!showChangeTemplateSidebar)
          }
          className='change_template_sidebar_BG'
        ></div>
      </div>
      {updateBuilderDocument()}

      <div
        ref={addSectionModalBG}
        onClick={() => {
          addSectionModal.current.style.display = 'none'; // modal hidden
          addSectionModalBG.current.style.display = 'none'; // modal bg hidden
        }}
        className='addSectionModal_bg'
      ></div>
      <div ref={addSectionModal} className='addSectionModal'>
        <div className='addSectionModal_Main'>
          <div className='addSectionModal_header'>Choose Section to Add:</div>
          <div className='addSectionModal_types'>
            <button onClick={AddParagraphSelector} className='add_paragraph'>
              Paragraph
            </button>
            <button onClick={AddHeadingSelector} className='add_Heading'>
              Heading
            </button>
            <button onClick={AddSectionSelector} className='add_SubHeading'>
              Section
            </button>
          </div>
        </div>
      </div>

      <div ref={loginPopupBG} className='addSectionModal_bg loginModalBG'></div>
      <div ref={loginPopup} className='addSectionModal loginModal'>
        <div className='addPage_Modal login_modal'>
          <div>
            <h1>Loving it?</h1>
            <p>Let's create your CVJury account.</p>
            <div>
              <a href='/login'>
                <button>Login</button>
              </a>
              <a href='/signup'>
                <button className='login_modal_secondary_btn'>SignUp</button>
              </a>
            </div>
            {/* <button onClick={onClose}>No</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
