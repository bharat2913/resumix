import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export default function ProTipData(chosenCategory, chosenDesign) {
  //   // console.log( category, ' -> ', design );

  const standard_ProTipsData = [
    {
      class: '',
      heading: 'Re-state the Role',
      headingColor: '',
      description: 'Recall the act position applied for ',
      descriptionColor: '#3626d0',
      top:
        chosenDesign === 'design_1' ? 6 + 1 : 
        chosenDesign === 'design_2' ? 8 + 2 :
        chosenDesign === 'design_3' ? 3 + 1 : 
        chosenDesign === 'design_4' ? 3 + 5 : 
        chosenDesign === 'design_5' ? 15 + 2 : 
        chosenDesign === 'design_6' ? 10 + 2 : 
        chosenDesign === 'design_7' ? 8 + 6 : 
        chosenDesign === 'design_8' ? 1 + 2 : 
        chosenDesign === 'design_9' ? 9 + 2 : 
        chosenDesign === 'design_10' ? 9 + 3 : 
        chosenDesign === 'design_11' ? 6 + 2 : 
        chosenDesign === 'design_12' ? 10 + 2 : 
        chosenDesign === 'design_13' ? 8 + 2 : 
        chosenDesign === 'design_14' ? 14 + 2 : 
        chosenDesign === 'design_15' ? 6 + 2 : 
        chosenDesign === 'design_16' ? 14 + 2 : 
        chosenDesign === 'design_17' ? 10 + 2 : 
        chosenDesign === 'design_18' ? 7 + 2 : 
        chosenDesign === 'design_19' ? 15 + 1 : 
        chosenDesign === 'design_20' ? 10 + 2 : 
        chosenDesign === 'design_21' ? 4 + 2 :
        chosenDesign === 'design_22' ? 4 + 2 :
        chosenDesign === 'design_23' ? 4 + 2 :
        chosenDesign === 'design_24' ? 11 + 2 :
        chosenDesign === 'design_25' ? 7 + 3 :
        chosenDesign === 'design_26' ? 3 + 2 :
        chosenDesign === 'design_27' ? 2 + 2 :
        chosenDesign === 'design_28' ? 2 + 2 :
        chosenDesign === 'design_29' ? 4 + 2 :
        chosenDesign === 'design_30' ? 8 + 2 :
        chosenDesign === 'design_31' ? 2 + 2 :
        chosenDesign === 'design_32' ? 2 + 2 :
        chosenDesign === 'design_33' ? 2 + 2 :
        chosenDesign === 'design_34' ? 2 + 2 :
        chosenDesign === 'design_35' ? 5 + 2 :
        chosenDesign === 'design_36' ? 2 + 2 :
        chosenDesign === 'design_37' ? 2 + 2 :
        chosenDesign === 'design_38' ? 2 + 2 :
        chosenDesign === 'design_39' ? 2 + 2 :
        chosenDesign === 'design_40' ? 3 + 2 :
        6, // prettier-ignore
    },
    {
      class: '',
      heading: 'What Can You offer?',
      headingColor: '',
      description:
        "Years of experience \n What do you do best related to the job description? \n List strongest personality traits. \n What will you skills/ experience allow you to achieve - in line with the current role's needs?",
      descriptionColor: '#c95204',
      top:
        chosenDesign === 'design_1' ? 9 + 2 : 
        chosenDesign === 'design_2' ? 11 + 2 : 
        chosenDesign === 'design_3' ? 6 + 2 : 
        chosenDesign === 'design_4' ? 6 + 5 : 
        chosenDesign === 'design_5' ? 18 + 2 : 
        chosenDesign === 'design_6' ? 13 + 2 : 
        chosenDesign === 'design_7' ? 11 + 6 : 
        chosenDesign === 'design_8' ? 5 + 2 : 
        chosenDesign === 'design_9' ? 12 + 2 : 
        chosenDesign === 'design_10' ? 12 + 3 : 
        chosenDesign === 'design_11' ? 10 + 2 : 
        chosenDesign === 'design_12' ? 13 + 2 : 
        chosenDesign === 'design_13' ? 11 + 2 : 
        chosenDesign === 'design_14' ? 17 + 2 : 
        chosenDesign === 'design_15' ? 9 + 2 : 
        chosenDesign === 'design_16' ? 17 + 2 : 
        chosenDesign === 'design_17' ? 13 + 2 : 
        chosenDesign === 'design_18' ? 11 + 2 : 
        chosenDesign === 'design_19' ? 18 + 2 : 
        chosenDesign === 'design_20' ? 13 + 2 : 
        chosenDesign === 'design_21' ? 7 + 2 :
        chosenDesign === 'design_22' ? 7 + 2 :
        chosenDesign === 'design_23' ? 7 + 2 :
        chosenDesign === 'design_24' ? 14 + 2 :
        chosenDesign === 'design_25' ? 10 + 4 :
        chosenDesign === 'design_26' ? 6 + 2 :
        chosenDesign === 'design_27' ? 5 + 2 :
        chosenDesign === 'design_28' ? 5 + 2 :
        chosenDesign === 'design_29' ? 7 + 2 :
        chosenDesign === 'design_30' ? 11 + 2 :
        chosenDesign === 'design_31' ? 5 + 2 :
        chosenDesign === 'design_32' ? 5 + 2 :
        chosenDesign === 'design_33' ? 5 + 2 :
        chosenDesign === 'design_34' ? 5 + 2 :
        chosenDesign === 'design_35' ? 8 + 2 :
        chosenDesign === 'design_36' ? 5 + 2 :
        chosenDesign === 'design_37' ? 5 + 2 :
        chosenDesign === 'design_38' ? 5 + 2 :
        chosenDesign === 'design_39' ? 5 + 2 :
        chosenDesign === 'design_40' ? 6 + 2 :
        9, // prettier-ignore
    },
    {
      class: '',
      heading: 'Wrap it Up:',
      headingColor: '',
      description:
        'Highlight one key skill you have related in the job that will add the highest value to the organization',
      descriptionColor: '#1c7dfc',
      top:
        chosenDesign === 'design_1'? 17 + 2 :
        chosenDesign === 'design_2' ? 20 + 2 :
        chosenDesign === 'design_3' ? 15 + 2 :
        chosenDesign === 'design_4' ? 15 + 5 :
        chosenDesign === 'design_5' ? 26 + 2 : 
        chosenDesign === 'design_6' ? 21 + 2 : 
        chosenDesign === 'design_7' ? 19 + 6 : 
        chosenDesign === 'design_8' ? 13 + 2 : 
        chosenDesign === 'design_9' ? 20 + 2 : 
        chosenDesign === 'design_10' ? 20 + 3 : 
        chosenDesign === 'design_11' ? 19 + 2 :
        chosenDesign === 'design_13' ? 19 + 2 :
        chosenDesign === 'design_12' ? 21 + 2 :
        chosenDesign === 'design_14' ? 25 + 2 :
        chosenDesign === 'design_15' ? 18 + 2 :
        chosenDesign === 'design_16' ? 25 + 2 :
        chosenDesign === 'design_17' ? 21 + 2 :
        chosenDesign === 'design_18' ? 20 + 2 :
        chosenDesign === 'design_19' ? 26 + 2 :
        chosenDesign === 'design_20' ? 21 + 2 :
        chosenDesign === 'design_21' ? 15 + 2 :
        chosenDesign === 'design_22' ? 15 + 2 :
        chosenDesign === 'design_23' ? 15 + 2 :
        chosenDesign === 'design_24' ? 22 + 2 :
        chosenDesign === 'design_25' ? 18 + 4 :
        chosenDesign === 'design_26' ? 14 + 2 :
        chosenDesign === 'design_27' ? 13 + 2 :
        chosenDesign === 'design_28' ? 13 + 2 :
        chosenDesign === 'design_29' ? 15 + 5 :
        chosenDesign === 'design_30' ? 19 + 2 :
        chosenDesign === 'design_31' ? 13 + 2 :
        chosenDesign === 'design_32' ? 13 + 2 :
        chosenDesign === 'design_33' ? 13 + 2 :
        chosenDesign === 'design_34' ? 13 + 2 :
        chosenDesign === 'design_35' ? 16 + 2 :
        chosenDesign === 'design_36' ? 14 + 2 :
        chosenDesign === 'design_37' ? 13 + 2 :
        chosenDesign === 'design_38' ? 13 + 2 :
        chosenDesign === 'design_39' ? 13 + 2 :
        chosenDesign === 'design_40' ? 15 + 2 :
        17, // prettier-ignore
    },
  ];

  const currentlyEmployed1_ProTipsData = [
    {
      class: 'tip_PerfectMatch',
      heading: 'Perfect Match',
      headingColor: '',
      description:
        'Use the opening statement to show how your current job matches the advertised role.',
      descriptionColor: '#3626d0',
      top: 
      chosenDesign === 'design_1' ? 8 + 2 : 
      chosenDesign === 'design_2' ? 8 + 5 :
      chosenDesign === 'design_3' ? 3 + 4 :
      chosenDesign === 'design_4' ? 8 + 1 :
      chosenDesign === 'design_5' ? 16 + 2 :
      chosenDesign === 'design_6' ? 11 + 2 :
      chosenDesign === 'design_7' ? 12 + 4 :
      chosenDesign === 'design_8' ? 4 + 2 :
      chosenDesign === 'design_9' ? 8 + 4 :
      chosenDesign === 'design_10' ? 8 + 5 :
      chosenDesign === 'design_11' ? 8 + 2 :
      chosenDesign === 'design_12' ? 11 + 2 :
      chosenDesign === 'design_13' ? 9 + 2 :
      chosenDesign === 'design_14' ? 15 + 2 :
      chosenDesign === 'design_15' ? 8 + 2 :
      chosenDesign === 'design_16' ? 14 + 4 :
      chosenDesign === 'design_17' ? 11 + 2 :
      chosenDesign === 'design_18' ? 11 + 2 :
      chosenDesign === 'design_19' ? 15 + 2 :
      chosenDesign === 'design_20' ? 11 + 2 :
      chosenDesign === 'design_21' ? 5 + 2 :
      chosenDesign === 'design_22' ? 7 + 2 :
      chosenDesign === 'design_23' ? 7 + 2 :
      chosenDesign === 'design_24' ? 13 + 2 :
      chosenDesign === 'design_25' ? 8 + 2 :
      chosenDesign === 'design_26' ? 5 + 2 :
      chosenDesign === 'design_27' ? 3 + 2 :
      chosenDesign === 'design_28' ? 4 + 2 :
      chosenDesign === 'design_29' ? 7 + 2 :
      chosenDesign === 'design_30' ? 11 + 2 :
      chosenDesign === 'design_31' ? 3 + 2 :
      chosenDesign === 'design_32' ? 3 + 2 :
      chosenDesign === 'design_33' ? 3 + 2 :
      chosenDesign === 'design_34' ? 3 + 2 :
      chosenDesign === 'design_35' ? 6 + 2 :
      chosenDesign === 'design_36' ? 3 + 2 :
      chosenDesign === 'design_37' ? 3 + 2 :
      chosenDesign === 'design_38' ? 3 + 2 :
      chosenDesign === 'design_39' ? 3 + 2 :
      chosenDesign === 'design_40' ? 5 + 2 :
      10, // prettier-ignore
    },
    {
      class: 'tip_ShowAchievements',
      heading: 'Show Achievements',
      headingColor: '',
      description:
        "State what you've achieved in your current role that's related to the job description",
      descriptionColor: '#5e589c',
      top: 
      chosenDesign === 'design_1' ? 14 + 2 :
      chosenDesign === 'design_2' ? 14 + 5 :
      chosenDesign === 'design_3' ? 9 + 4 :
      chosenDesign === 'design_4' ? 13 + 1 :
      chosenDesign === 'design_5' ? 21 + 2 :
      chosenDesign === 'design_6' ? 16 + 2 :
      chosenDesign === 'design_7' ? 17 + 4 :
      chosenDesign === 'design_8' ? 10 + 2 :
      chosenDesign === 'design_9' ? 14 + 3 :
      chosenDesign === 'design_10' ? 14 + 4 :
      chosenDesign === 'design_11' ? 14 + 2 :
      chosenDesign === 'design_12'? 16 + 2 :
      chosenDesign === 'design_13' ? 14 + 2 :
      chosenDesign === 'design_14' ? 20 + 2 :
      chosenDesign === 'design_15' ? 14 + 2 :
      chosenDesign === 'design_16' ? 19 + 4 :
      chosenDesign === 'design_17' ? 16 + 2 :
      chosenDesign === 'design_18' ? 16 + 2 :
      chosenDesign === 'design_19' ? 20 + 2 :
      chosenDesign === 'design_20' ? 16 + 2 :
      chosenDesign === 'design_21' ? 10 + 2 :
      chosenDesign === 'design_22' ? 12 + 2 :
      chosenDesign === 'design_23' ? 12 + 2 :
      chosenDesign === 'design_24' ? 18 + 2 :
      chosenDesign === 'design_25' ? 13 + 2 :
      chosenDesign === 'design_26' ? 10 + 2 :
      chosenDesign === 'design_27' ? 8 + 2 :
      chosenDesign === 'design_28' ? 9 + 2 :
      chosenDesign === 'design_29' ? 13 + 2 :
      chosenDesign === 'design_30' ? 16 + 2 :
      chosenDesign === 'design_31' ? 8 + 2 :
      chosenDesign === 'design_32' ? 8 + 2 :
      chosenDesign === 'design_33' ? 8 + 2 :
      chosenDesign === 'design_34' ? 8 + 2 :
      chosenDesign === 'design_35' ? 11 + 2 :
      chosenDesign === 'design_36' ? 8 + 2 :
      chosenDesign === 'design_37' ? 8 + 2 :
      chosenDesign === 'design_38' ? 8 + 2 :
      chosenDesign === 'design_39' ? 8 + 2 :
      chosenDesign === 'design_40' ? 10 + 2 :
      15, // prettier-ignore
    },
    {
      class: 'tip_YourWhy',
      heading: 'Your Why',
      headingColor: '',
      description:
        "Enumerate the reasons your value will benefit the company. Mention one of the company's charitable/sustainable/social initiatives.",
      descriptionColor: '#1c7dfc',
      top: 
      chosenDesign === 'design_1' ? 19 + 2 :
      chosenDesign === 'design_2' ? 19 + 5 :
      chosenDesign === 'design_3' ? 15 + 4 :
      chosenDesign === 'design_3' ? 15 + 2 :
      chosenDesign === 'design_4' ? 18 + 1 :
      chosenDesign === 'design_5' ? 26 + 2 :
      chosenDesign === 'design_6' ? 21 + 2 :
      chosenDesign === 'design_7' ? 22 + 4 :
      chosenDesign === 'design_8' ? 15 + 2 :
      chosenDesign === 'design_9' ? 19 + 3 :
      chosenDesign === 'design_10' ? 19 + 4 :
      chosenDesign === 'design_11' ? 19 + 2 :
      chosenDesign === 'design_12' ? 21 + 2 :
      chosenDesign === 'design_13' ? 19 + 2 :
      chosenDesign === 'design_14' ? 25 + 2 :
      chosenDesign === 'design_15' ? 19 + 2 :
      chosenDesign === 'design_16' ? 24 + 4 :
      chosenDesign === 'design_17' ? 21 + 2 :
      chosenDesign === 'design_18' ? 21 + 2 :
      chosenDesign === 'design_19' ? 25 + 2 :
      chosenDesign === 'design_20' ? 21 + 2 :
      chosenDesign === 'design_21' ? 15 + 2 :
      chosenDesign === 'design_22' ? 17 + 2 :
      chosenDesign === 'design_23' ? 17 + 2 :
      chosenDesign === 'design_24' ? 23 + 2 :
      chosenDesign === 'design_25' ? 18 + 2 :
      chosenDesign === 'design_26' ? 15 + 2 :
      chosenDesign === 'design_27' ? 13 + 2 :
      chosenDesign === 'design_28' ? 14 + 2 :
      chosenDesign === 'design_29' ? 18 + 2 :
      chosenDesign === 'design_30' ? 21 + 2 :
      chosenDesign === 'design_31' ? 13 + 2 :
      chosenDesign === 'design_32' ? 13 + 2 :
      chosenDesign === 'design_33' ? 13 + 2 :
      chosenDesign === 'design_34' ? 13 + 2 :
      chosenDesign === 'design_35' ? 16 + 2 :
      chosenDesign === 'design_36' ? 13 + 2 :
      chosenDesign === 'design_37' ? 13 + 2 :
      chosenDesign === 'design_38' ? 13 + 2 :
      chosenDesign === 'design_39' ? 13 + 2 :
      chosenDesign === 'design_40' ? 15 + 2 :
      20, // prettier-ignore
    },
    {
      class: 'tip_TieItTogether',
      heading: 'Tie it Together',
      headingColor: '',
      description:
        'Drive home the point on how your experience and skills fit the key role of the job description',
      descriptionColor: '#c95204',
      top: 
      chosenDesign === 'design_1' ? 26 + 2 :
      chosenDesign === 'design_2' ? 26 + 5 :
      chosenDesign === 'design_3' ? 22 + 4 :
      chosenDesign === 'design_4' ? 25 + 1 :
      chosenDesign === 'design_5' ? 33 + 2 :
      chosenDesign === 'design_6' ? 28 + 2 :
      chosenDesign === 'design_7' ? 29 + 4 :
      chosenDesign === 'design_8' ? 22 + 2 :
      chosenDesign === 'design_9' ? 26 + 3 :
      chosenDesign === 'design_10' ? 26 + 4 :
      chosenDesign === 'design_11' ? 26 + 2 :
      chosenDesign === 'design_12' ? 28 + 2 :
      chosenDesign === 'design_13' ? 26 + 2 :
      chosenDesign === 'design_14' ? 32 + 2 :
      chosenDesign === 'design_15' ? 26 + 2 :
      chosenDesign === 'design_16' ? 31 + 4 :
      chosenDesign === 'design_17' ? 28 + 2 :
      chosenDesign === 'design_18' ? 28 + 2 :
      chosenDesign === 'design_19' ? 32 + 2 :
      chosenDesign === 'design_20' ? 28 + 2 :
      chosenDesign === 'design_21' ? 22 + 2 :
      chosenDesign === 'design_22' ? 24 + 2 :
      chosenDesign === 'design_23' ? 24 + 2 :
      chosenDesign === 'design_24' ? 30 + 2 :
      chosenDesign === 'design_25' ? 25 + 2 :
      chosenDesign === 'design_26' ? 22 + 2 :
      chosenDesign === 'design_27' ? 20 + 2 :
      chosenDesign === 'design_28' ? 21 + 2 :
      chosenDesign === 'design_29' ? 25 + 2 :
      chosenDesign === 'design_30' ? 28 + 2 :
      chosenDesign === 'design_31' ? 20 + 2 :
      chosenDesign === 'design_32' ? 20 + 2 :
      chosenDesign === 'design_33' ? 20 + 2 :
      chosenDesign === 'design_34' ? 20 + 2 :
      chosenDesign === 'design_35' ? 23 + 2 :
      chosenDesign === 'design_36' ? 20 + 2 :
      chosenDesign === 'design_37' ? 20 + 2 :
      chosenDesign === 'design_38' ? 20 + 2 :
      chosenDesign === 'design_39' ? 20 + 2 :
      chosenDesign === 'design_40' ? 22 + 2 :
      27, // prettier-ignore
    },
  ];

  const currentlyEmployed2_ProTipsData = [
    {
      class: '',
      heading: "Show You're Adventurous",
      headingColor: '',
      description: 'Exude adventure, enthusiasm, and keenness for the role.',
      descriptionColor: '#3626d0',
      top:
        chosenDesign === 'design_1' ? 5 + 2 : 
        chosenDesign === 'design_2' ? 7 + 3 :
        chosenDesign === 'design_3' ? 2 + 2 :
        chosenDesign === 'design_4' ? 3 + 4 :
        chosenDesign === 'design_5' ? 14 + 2 :
        chosenDesign === 'design_6' ? 10 + 2 :
        chosenDesign === 'design_7' ? 8 + 5 :
        chosenDesign === 'design_8' ? 1 + 2 :
        chosenDesign === 'design_9' ? 9 + 2 :
        chosenDesign === 'design_10' ? 9 + 2 :
        chosenDesign === 'design_11' ? 5 + 4 :
        chosenDesign === 'design_12' ? 9 + 2 :
        chosenDesign === 'design_13' ? 7 + 2 :
        chosenDesign === 'design_14' ? 14 + 2 :
        chosenDesign === 'design_15' ? 5 + 3 :
        chosenDesign === 'design_16' ? 13 + 2 :
        chosenDesign === 'design_17' ? 9 + 2 :
        chosenDesign === 'design_18' ? 7 + 2 :
        chosenDesign === 'design_19' ? 14 + 2 :
        chosenDesign === 'design_20' ? 9 + 2 :
        chosenDesign === 'design_21' ? 3 + 2 :
        chosenDesign === 'design_22' ? 3 + 2 :
        chosenDesign === 'design_23' ? 3 + 3 :
        chosenDesign === 'design_24' ? 10 + 3 :
        chosenDesign === 'design_25' ? 6 + 2 :
        chosenDesign === 'design_26' ? 2 + 2 :
        chosenDesign === 'design_27' ? 1 + 2 :
        chosenDesign === 'design_28' ? 1 + 2 :
        chosenDesign === 'design_29' ? 4 + 2 :
        chosenDesign === 'design_30' ? 7 + 4 :
        chosenDesign === 'design_31' ? 1 + 2 :
        chosenDesign === 'design_32' ? 1 + 2 :
        chosenDesign === 'design_33' ? 1 + 2 :
        chosenDesign === 'design_34' ? 1 + 2 :
        chosenDesign === 'design_35' ? 4 + 2 :
        chosenDesign === 'design_36' ? 2 + 2 :
        chosenDesign === 'design_37' ? 1 + 2 :
        chosenDesign === 'design_38' ? 1 + 2 :
        chosenDesign === 'design_39' ? 1 + 2 :
        chosenDesign === 'design_40' ? 3 + 2 :
        6, // prettier-ignore
    },
    {
      class: '',
      heading: 'Academic Prowess',
      headingColor: '',
      description:
        'If you smashed a first-class or high upper degree, showcase it. And the key subjects that are related to the role.',
      descriptionColor: '#c95204',
      top:
      chosenDesign === 'design_1' ? 9 + 2 : 
      chosenDesign === 'design_2' ? 11 + 3 :
      chosenDesign === 'design_3' ? 6 + 2 :
      chosenDesign === 'design_4' ? 8 + 3 :
      chosenDesign === 'design_5' ? 18 + 2 :
      chosenDesign === 'design_6' ? 14 + 2 :
      chosenDesign === 'design_7' ? 12 + 5 :
      chosenDesign === 'design_8' ? 5 + 2 :
      chosenDesign === 'design_9' ? 13 + 2 :
      chosenDesign === 'design_10' ? 13 + 2 :
      chosenDesign === 'design_11' ? 9 + 4 :
      chosenDesign === 'design_12' ? 13 + 2 :
      chosenDesign === 'design_13' ? 11 + 2 :
      chosenDesign === 'design_14' ? 18 + 2 :
      chosenDesign === 'design_15' ? 9 + 3 :
      chosenDesign === 'design_16' ? 17 + 2 :
      chosenDesign === 'design_17' ? 13 + 2 :
      chosenDesign === 'design_18' ? 11 + 2 :
      chosenDesign === 'design_19' ? 18 + 2 :
      chosenDesign === 'design_20' ? 13 + 2 :
      chosenDesign === 'design_21' ? 7 + 2 :
      chosenDesign === 'design_22' ? 7 + 2 :
      chosenDesign === 'design_23' ? 7 + 3 :
      chosenDesign === 'design_24' ? 14 + 3 :
      chosenDesign === 'design_25' ? 10 + 2 :
      chosenDesign === 'design_26' ? 6 + 2 :
      chosenDesign === 'design_27' ? 5 + 2 :
      chosenDesign === 'design_28' ? 5 + 2 :
      chosenDesign === 'design_29' ? 8 + 2 :
      chosenDesign === 'design_30' ? 11 + 4 :
      chosenDesign === 'design_31' ? 5 + 2 :
      chosenDesign === 'design_32' ? 5 + 2 :
      chosenDesign === 'design_33' ? 5 + 2 :
      chosenDesign === 'design_34' ? 5 + 2 :
      chosenDesign === 'design_35' ? 8 + 2 :
      chosenDesign === 'design_36' ? 6 + 2 :
      chosenDesign === 'design_37' ? 5 + 2 :
      chosenDesign === 'design_38' ? 5 + 2 :
      chosenDesign === 'design_39' ? 5 + 2 :
      chosenDesign === 'design_40' ? 7 + 2 :
      10, // prettier-ignore
    },
    {
      class: '',
      heading: 'Talk About Your Experience',
      headingColor: '',
      description:
        "Tie your experience to knowledge and skills related to the job description's",
      descriptionColor: '#1c7dfc',
      top : 
        chosenDesign === 'design_1' ? 15 + 2 :
        chosenDesign === 'design_2' ? 17 + 3 :
        chosenDesign === 'design_3' ? 12 + 2 :
        chosenDesign === 'design_4' ? 15 + 2 :
        chosenDesign === 'design_5' ? 24 + 2 :
        chosenDesign === 'design_6' ? 20 + 2 :
        chosenDesign === 'design_7' ? 18 + 5 :
        chosenDesign === 'design_8' ? 11 + 2 :
        chosenDesign === 'design_9' ? 19 + 2 :
        chosenDesign === 'design_10' ? 19 + 2 :
        chosenDesign === 'design_11' ? 15 + 4 :
        chosenDesign === 'design_12' ? 19 + 2 :
        chosenDesign === 'design_13' ? 17 + 2 :
        chosenDesign === 'design_14' ? 24 + 2 :
        chosenDesign === 'design_15' ? 15 + 3 :
        chosenDesign === 'design_16' ? 23 + 2 :
        chosenDesign === 'design_17' ? 19 + 2 :
        chosenDesign === 'design_18' ? 17 + 2 :
        chosenDesign === 'design_19' ? 24 + 2 :
        chosenDesign === 'design_20' ? 19 + 2 :
        chosenDesign === 'design_21' ? 13 + 2 :
        chosenDesign === 'design_22' ? 13 + 2 :
        chosenDesign === 'design_23' ? 13 + 3 :
        chosenDesign === 'design_24' ? 20 + 3 :
        chosenDesign === 'design_25' ? 16 + 2 :
        chosenDesign === 'design_26' ? 12 + 2 :
        chosenDesign === 'design_27' ? 11 + 2 :
        chosenDesign === 'design_28' ? 11 + 2 :
        chosenDesign === 'design_29' ? 14 + 2 :
        chosenDesign === 'design_30' ? 17 + 4 :
        chosenDesign === 'design_31' ? 11 + 2 :
        chosenDesign === 'design_32' ? 11 + 2 :
        chosenDesign === 'design_33' ? 11 + 2 :
        chosenDesign === 'design_34' ? 11 + 2 :
        chosenDesign === 'design_35' ? 14 + 2 :
        chosenDesign === 'design_36' ? 12 + 2 :
        chosenDesign === 'design_37' ? 11 + 2 :
        chosenDesign === 'design_38' ? 11 + 2 :
        chosenDesign === 'design_39' ? 11 + 2 :
        chosenDesign === 'design_40' ? 13 + 2 :
        17, // prettier-ignore
    },
  ];

  const currentlyEmployed3_ProTipsData = [
    {
      class: '',
      heading: 'State Years of Experience',
      headingColor: '',
      description: 'State that you have the experience they need early enough',
      descriptionColor: '#3626d0',
      top:
        chosenDesign === 'design_1' ? 7 + 2 : 
        chosenDesign === 'design_2' ? 8 + 2 : 
        chosenDesign === 'design_3' ? 3 + 2 : 
        chosenDesign === 'design_4' ? 6 + 2 : 
        chosenDesign === 'design_5' ? 16 + 2 : 
        chosenDesign === 'design_6' ? 11 + 2 : 
        chosenDesign === 'design_7' ? 12 + 2 : 
        chosenDesign === 'design_8' ? 4 + 2 : 
        chosenDesign === 'design_9' ? 9 + 2 : 
        chosenDesign === 'design_10' ? 8 + 2 : 
        chosenDesign === 'design_11' ? 8 + 2 : 
        chosenDesign === 'design_12' ? 11 + 2 : 
        chosenDesign === 'design_13' ? 9 + 2 : 
        chosenDesign === 'design_14' ? 15 + 2 : 
        chosenDesign === 'design_15' ? 8 + 2 : 
        chosenDesign === 'design_16' ? 14 + 2 : 
        chosenDesign === 'design_17' ? 11 + 2 : 
        chosenDesign === 'design_18' ? 9 + 2 : 
        chosenDesign === 'design_19' ? 15 + 2 : 
        chosenDesign === 'design_20' ? 11 + 2 : 
        chosenDesign === 'design_21' ? 5 + 2 : 
        chosenDesign === 'design_22' ? 7 + 2 : 
        chosenDesign === 'design_23' ? 7 + 2 : 
        chosenDesign === 'design_24' ? 13 + 2 : 
        chosenDesign === 'design_25' ? 8 + 2 : 
        chosenDesign === 'design_26' ? 3 + 2 : 
        chosenDesign === 'design_27' ? 3 + 2 : 
        chosenDesign === 'design_28' ? 4 + 2 : 
        chosenDesign === 'design_29' ? 7 + 2 : 
        chosenDesign === 'design_30' ? 10 + 2 : 
        chosenDesign === 'design_31' ? 3 + 2 : 
        chosenDesign === 'design_32' ? 3 + 2 : 
        chosenDesign === 'design_33' ? 3 + 2 : 
        chosenDesign === 'design_34' ? 3 + 2 : 
        chosenDesign === 'design_35' ? 6 + 2 : 
        chosenDesign === 'design_36' ? 3 + 2 : 
        chosenDesign === 'design_37' ? 3 + 2 : 
        chosenDesign === 'design_38' ? 3 + 2 : 
        chosenDesign === 'design_39' ? 3 + 2 : 
        chosenDesign === 'design_40' ? 5 + 2 : 
        7, // prettier-ignore
    },
    {
      class: '',
      heading: 'State Accomplishments',
      headingColor: '',
      description:
        'List accomplishments, results, positive outcomes (related to job description) and how these helped your organization',
      descriptionColor: '#5e589c',
      top:
        chosenDesign === 'design_1' ? 12 + 2 : 
        chosenDesign === 'design_2' ? 13 + 2 : 
        chosenDesign === 'design_3' ? 8 + 2 : 
        chosenDesign === 'design_4' ? 10 + 2 : 
        chosenDesign === 'design_5' ? 20 + 2 : 
        chosenDesign === 'design_6' ? 15 + 2 : 
        chosenDesign === 'design_7' ? 16 + 2 : 
        chosenDesign === 'design_8' ? 8 + 2 : 
        chosenDesign === 'design_9' ? 13 + 2 : 
        chosenDesign === 'design_10' ? 13 + 2 : 
        chosenDesign === 'design_11' ? 13 + 2 : 
        chosenDesign === 'design_12' ? 15 + 2 : 
        chosenDesign === 'design_13' ? 13 + 2 : 
        chosenDesign === 'design_14' ? 19 + 2 : 
        chosenDesign === 'design_15' ? 12 + 2 : 
        chosenDesign === 'design_16' ? 18 + 2 : 
        chosenDesign === 'design_17' ? 15 + 2 : 
        chosenDesign === 'design_18' ? 13 + 2 : 
        chosenDesign === 'design_19' ? 19 + 2 : 
        chosenDesign === 'design_20' ? 15 + 2 : 
        chosenDesign === 'design_21' ? 9 + 2 : 
        chosenDesign === 'design_22' ? 11 + 2 : 
        chosenDesign === 'design_23' ? 11 + 2 : 
        chosenDesign === 'design_24' ? 17 + 2 : 
        chosenDesign === 'design_25' ? 12 + 2 : 
        chosenDesign === 'design_26' ? 7 + 2 : 
        chosenDesign === 'design_27' ? 7 + 2 : 
        chosenDesign === 'design_28' ? 8 + 2 : 
        chosenDesign === 'design_29' ? 11 + 2 : 
        chosenDesign === 'design_30' ? 14 + 2 : 
        chosenDesign === 'design_31' ? 7 + 2 : 
        chosenDesign === 'design_32' ? 7 + 2 : 
        chosenDesign === 'design_33' ? 7 + 2 : 
        chosenDesign === 'design_34' ? 7 + 2 : 
        chosenDesign === 'design_35' ? 10 + 2 : 
        chosenDesign === 'design_36' ? 7 + 2 : 
        chosenDesign === 'design_37' ? 7 + 2 : 
        chosenDesign === 'design_38' ? 7 + 2 : 
        chosenDesign === 'design_39' ? 7 + 2 : 
        chosenDesign === 'design_40' ? 9 + 2 : 
        12, // prettier-ignore
    },
    {
      class: '',
      heading: 'Your Why',
      headingColor: '',
      description:
        "- what will the role allow you to do? \n - Tie these to the organization's core values or CSR ",
      descriptionColor: '#c95204',
      top:
        chosenDesign === 'design_1' ? 18 + 2 : 
        chosenDesign === 'design_2' ? 20 + 2 : 
        chosenDesign === 'design_3' ? 15 + 2 : 
        chosenDesign === 'design_4' ? 16 + 2 : 
        chosenDesign === 'design_5' ? 26 + 2 : 
        chosenDesign === 'design_6' ? 21 + 2 : 
        chosenDesign === 'design_7' ? 22 + 2 : 
        chosenDesign === 'design_8' ? 14 + 2 : 
        chosenDesign === 'design_9' ? 19 + 2 : 
        chosenDesign === 'design_10' ? 19 + 2 : 
        chosenDesign === 'design_11' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 25 + 2 : 
        chosenDesign === 'design_15' ? 19 + 2 : 
        chosenDesign === 'design_16' ? 24 + 2 : 
        chosenDesign === 'design_17' ? 21 + 2 : 
        chosenDesign === 'design_18' ? 19 + 2 : 
        chosenDesign === 'design_19' ? 25 + 2 : 
        chosenDesign === 'design_20' ? 21 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_22' ? 17 + 2 : 
        chosenDesign === 'design_23' ? 17 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 13 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 17 + 2 : 
        chosenDesign === 'design_30' ? 21 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 16 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        18, // prettier-ignore
    },
    {
      class: '',
      heading: "How You Met the Role's Job Description",
      headingColor: '',
      description:
        "State how you've met the key requirements of the job description",
      descriptionColor: '#1c7dfc',
      top:
        chosenDesign === 'design_1' ? 25 + 2 : 
        chosenDesign === 'design_2' ? 26 + 2 : 
        chosenDesign === 'design_3' ? 22 + 2 : 
        chosenDesign === 'design_4' ? 22 + 2 : 
        chosenDesign === 'design_5' ? 31 + 2 : 
        chosenDesign === 'design_6' ? 26 + 2 : 
        chosenDesign === 'design_7' ? 27 + 2 : 
        chosenDesign === 'design_8' ? 20 + 2 : 
        chosenDesign === 'design_9' ? 24 + 2 : 
        chosenDesign === 'design_10' ? 24 + 2 : 
        chosenDesign === 'design_11' ? 24 + 2 : 
        chosenDesign === 'design_12' ? 26 + 2 : 
        chosenDesign === 'design_13' ? 24 + 2 : 
        chosenDesign === 'design_14' ? 30 + 2 : 
        chosenDesign === 'design_15' ? 24 + 2 : 
        chosenDesign === 'design_16' ? 29 + 2 : 
        chosenDesign === 'design_17' ? 26 + 2 : 
        chosenDesign === 'design_18' ? 26 + 2 : 
        chosenDesign === 'design_19' ? 30 + 2 : 
        chosenDesign === 'design_20' ? 26 + 2 : 
        chosenDesign === 'design_21' ? 20 + 2 : 
        chosenDesign === 'design_22' ? 22 + 2 : 
        chosenDesign === 'design_23' ? 22 + 2 : 
        chosenDesign === 'design_24' ? 28 + 2 : 
        chosenDesign === 'design_25' ? 23 + 2 : 
        chosenDesign === 'design_26' ? 18 + 2 : 
        chosenDesign === 'design_27' ? 18 + 2 : 
        chosenDesign === 'design_28' ? 19 + 2 : 
        chosenDesign === 'design_29' ? 22 + 2 : 
        chosenDesign === 'design_30' ? 26 + 2 : 
        chosenDesign === 'design_31' ? 18 + 2 : 
        chosenDesign === 'design_32' ? 18 + 2 : 
        chosenDesign === 'design_33' ? 18 + 2 : 
        chosenDesign === 'design_34' ? 18 + 2 : 
        chosenDesign === 'design_35' ? 21 + 2 : 
        chosenDesign === 'design_36' ? 18 + 2 : 
        chosenDesign === 'design_37' ? 18 + 2 : 
        chosenDesign === 'design_38' ? 18 + 2 : 
        chosenDesign === 'design_39' ? 18 + 2 : 
        chosenDesign === 'design_40' ? 20 + 2 : 
        25, // prettier-ignore
    },
  ];

  const notcurrentlyEmployed_ProTipsData = [
    {
      class: '',
      heading: 'Track Records + Positions',
      headingColor: '',
      description:
        'Show your track records and tie them to what positions you held before.',
      descriptionColor: '#3626d0',
      top:
      chosenDesign === 'design_1' ? 8 + 1 : 
        chosenDesign === 'design_2' ? 8 + 2 : 
        chosenDesign === 'design_3' ? 3 + 2 : 
        chosenDesign === 'design_4' ? 4 + 2 : 
        chosenDesign === 'design_5' ? 15 + 2 : 
        chosenDesign === 'design_6' ? 11 + 2 : 
        chosenDesign === 'design_7' ? 9 + 4 : 
        chosenDesign === 'design_8' ? 2 + 2 : 
        chosenDesign === 'design_9' ? 10 + 2 : 
        chosenDesign === 'design_10' ? 10 + 2 : 
        chosenDesign === 'design_11' ? 6 + 2 : 
        chosenDesign === 'design_12' ? 10 + 2 : 
        chosenDesign === 'design_13' ? 8 + 2 : 
        chosenDesign === 'design_14' ? 15 + 2 : 
        chosenDesign === 'design_15' ? 6 + 2 : 
        chosenDesign === 'design_16' ? 14 + 2 : 
        chosenDesign === 'design_17' ? 10 + 2 : 
        chosenDesign === 'design_18' ? 8 + 2 : 
        chosenDesign === 'design_19' ? 15 + 2 : 
        chosenDesign === 'design_20' ? 10 + 2 : 
        chosenDesign === 'design_21' ? 4 + 2 : 
        chosenDesign === 'design_22' ? 4 + 4 : 
        chosenDesign === 'design_23' ? 4 + 2 : 
        chosenDesign === 'design_24' ? 11 + 2 : 
        chosenDesign === 'design_25' ? 7 + 2 : 
        chosenDesign === 'design_26' ? 3 + 2 : 
        chosenDesign === 'design_27' ? 2 + 2 : 
        chosenDesign === 'design_28' ? 2 + 4 : 
        chosenDesign === 'design_29' ? 5 + 2 : 
        chosenDesign === 'design_30' ? 8 + 4 : 
        chosenDesign === 'design_31' ? 2 + 2 : 
        chosenDesign === 'design_32' ? 2 + 2 : 
        chosenDesign === 'design_33' ? 2 + 2 : 
        chosenDesign === 'design_34' ? 2 + 2 : 
        chosenDesign === 'design_35' ? 5 + 2 : 
        chosenDesign === 'design_36' ? 3 + 2 : 
        chosenDesign === 'design_37' ? 2 + 2 : 
        chosenDesign === 'design_38' ? 2 + 2 : 
        chosenDesign === 'design_39' ? 2 + 2 : 
        chosenDesign === 'design_40' ? 4 + 2 : 
        7, // prettier-ignore
    },
    {
      class: '',
      heading: 'Show Achievements',
      headingColor: '',
      description:
        'State your achievements, what method you deployed, and the exact outcomes.',
      descriptionColor: '#c95204',
      top:
      chosenDesign === 'design_1' ? 12 + 1 : 
      chosenDesign === 'design_2' ? 12 + 2 : 
      chosenDesign === 'design_3' ? 7 + 2 : 
      chosenDesign === 'design_4' ? 9 + 2 : 
      chosenDesign === 'design_5' ? 19 + 2 : 
      chosenDesign === 'design_6' ? 15 + 2 : 
      chosenDesign === 'design_7' ? 13 + 4 : 
      chosenDesign === 'design_8' ? 6 + 2 : 
      chosenDesign === 'design_9' ? 14 + 2 : 
      chosenDesign === 'design_10' ? 14 + 2 : 
      chosenDesign === 'design_11' ? 10 + 2 : 
      chosenDesign === 'design_12' ? 14 + 2 : 
      chosenDesign === 'design_13' ? 12 + 2 : 
      chosenDesign === 'design_14' ? 19 + 2 : 
      chosenDesign === 'design_15' ? 10 + 2 : 
      chosenDesign === 'design_16' ? 18 + 2 : 
      chosenDesign === 'design_17' ? 14 + 2 : 
      chosenDesign === 'design_18' ? 12 + 2 : 
      chosenDesign === 'design_19' ? 19 + 2 : 
      chosenDesign === 'design_20' ? 14 + 2 : 
      chosenDesign === 'design_21' ? 8 + 2 : 
      chosenDesign === 'design_22' ? 8 + 4 : 
      chosenDesign === 'design_23' ? 8 + 2 : 
      chosenDesign === 'design_24' ? 15 + 2 : 
      chosenDesign === 'design_25' ? 11 + 2 : 
      chosenDesign === 'design_26' ? 7 + 2 : 
      chosenDesign === 'design_27' ? 6 + 2 : 
      chosenDesign === 'design_28' ? 6 + 4 : 
      chosenDesign === 'design_29' ? 9 + 2 : 
      chosenDesign === 'design_30' ? 12 + 4 : 
      chosenDesign === 'design_31' ? 6 + 2 : 
      chosenDesign === 'design_32' ? 6 + 2 : 
      chosenDesign === 'design_33' ? 6 + 2 : 
      chosenDesign === 'design_34' ? 6 + 2 : 
      chosenDesign === 'design_35' ? 9 + 2 : 
      chosenDesign === 'design_36' ? 7 + 2 : 
      chosenDesign === 'design_37' ? 6 + 2 : 
      chosenDesign === 'design_38' ? 6 + 2 : 
      chosenDesign === 'design_39' ? 6 + 2 : 
      chosenDesign === 'design_40' ? 8 + 2 : 
      11, // prettier-ignore
    },
    {
      class: '',
      heading: 'Be Proactive',
      headingColor: '',
      description:
        '- Find what project the company is doing recently \n - Ask whether they are hiring \n - State relevant skills for your proposed role.',
      descriptionColor: '#1c7dfc',
      top: 
      chosenDesign === 'design_1' ? 16 + 2 : 
      chosenDesign === 'design_2' ? 17 + 2 : 
      chosenDesign === 'design_3' ? 12 + 2 : 
      chosenDesign === 'design_4' ? 15 + 2 : 
      chosenDesign === 'design_5' ? 24 + 2 : 
      chosenDesign === 'design_6' ? 20 + 2 : 
      chosenDesign === 'design_7' ? 18 + 4 : 
      chosenDesign === 'design_8' ? 11 + 2 : 
      chosenDesign === 'design_9' ? 19 + 2 : 
      chosenDesign === 'design_10' ? 19 + 2 : 
      chosenDesign === 'design_11' ? 15 + 2 : 
      chosenDesign === 'design_12' ? 19 + 2 : 
      chosenDesign === 'design_13' ? 17 + 2 : 
      chosenDesign === 'design_14' ? 24 + 2 : 
      chosenDesign === 'design_15' ? 15 + 2 : 
      chosenDesign === 'design_16' ? 23 + 2 : 
      chosenDesign === 'design_17' ? 19 + 2 : 
      chosenDesign === 'design_18' ? 17 + 2 : 
      chosenDesign === 'design_19' ? 24 + 2 : 
      chosenDesign === 'design_20' ? 19 + 2 : 
      chosenDesign === 'design_21' ? 13 + 2 : 
      chosenDesign === 'design_22' ? 13 + 4 : 
      chosenDesign === 'design_23' ? 13 + 2 : 
      chosenDesign === 'design_24' ? 20 + 2 : 
      chosenDesign === 'design_25' ? 16 + 2 : 
      chosenDesign === 'design_26' ? 12 + 2 : 
      chosenDesign === 'design_27' ? 11 + 2 : 
      chosenDesign === 'design_28' ? 11 + 4 : 
      chosenDesign === 'design_29' ? 14 + 2 : 
      chosenDesign === 'design_30' ? 17 + 4 : 
      chosenDesign === 'design_31' ? 11 + 2 : 
      chosenDesign === 'design_32' ? 11 + 2 : 
      chosenDesign === 'design_33' ? 11 + 2 : 
      chosenDesign === 'design_34' ? 11 + 2 : 
      chosenDesign === 'design_35' ? 14 + 2 : 
      chosenDesign === 'design_36' ? 12 + 2 : 
      chosenDesign === 'design_37' ? 11 + 2 : 
      chosenDesign === 'design_38' ? 11 + 2 : 
      chosenDesign === 'design_39' ? 11 + 2 : 
      chosenDesign === 'design_40' ? 13 + 2 : 
      16, // prettier-ignore
    },
  ];

  const recentGraduateWithInternship_ProTipsData = [
    {
      class: '',
      heading: 'Position Yourself',
      headingColor: '',
      description:
        'State what university you graduated from, degree type, field of study, and your confidence level.',
      descriptionColor: '#3626d0',
      top:
        chosenDesign === 'design_1' ? 7 + 2 : 
        chosenDesign === 'design_2' ? 8 + 2 : 
        chosenDesign === 'design_3' ? 3 + 2 : 
        chosenDesign === 'design_4' ? 6 + 2 : 
        chosenDesign === 'design_5' ? 15 + 2 : 
        chosenDesign === 'design_6' ? 10 + 2 : 
        chosenDesign === 'design_7' ? 11 + 2 : 
        chosenDesign === 'design_8' ? 3 + 2 : 
        chosenDesign === 'design_9' ? 8 + 2 : 
        chosenDesign === 'design_10' ? 9 + 2 : 
        chosenDesign === 'design_11' ? 8 + 2 : 
        chosenDesign === 'design_12' ? 10 + 2 : 
        chosenDesign === 'design_13' ? 8 + 2 : 
        chosenDesign === 'design_14' ? 14 + 2 : 
        chosenDesign === 'design_15' ? 7 + 2 : 
        chosenDesign === 'design_16' ? 15 + 2 : 
        chosenDesign === 'design_17' ? 10 + 2 : 
        chosenDesign === 'design_18' ? 8 + 4 : 
        chosenDesign === 'design_19' ? 14 + 2 : 
        chosenDesign === 'design_20' ? 10 + 2 : 
        chosenDesign === 'design_21' ? 4 + 2 : 
        chosenDesign === 'design_22' ? 6 + 2 : 
        chosenDesign === 'design_23' ? 6 + 2 : 
        chosenDesign === 'design_24' ? 12 + 2 : 
        chosenDesign === 'design_25' ? 7 + 2 : 
        chosenDesign === 'design_26' ? 2 + 2 : 
        chosenDesign === 'design_27' ? 2 + 2 : 
        chosenDesign === 'design_28' ? 3 + 2 : 
        chosenDesign === 'design_29' ? 6 + 2 : 
        chosenDesign === 'design_30' ? 9 + 2 : 
        chosenDesign === 'design_31' ? 2 + 2 : 
        chosenDesign === 'design_32' ? 2 + 2 : 
        chosenDesign === 'design_33' ? 2 + 2 : 
        chosenDesign === 'design_34' ? 2 + 2 : 
        chosenDesign === 'design_35' ? 5 + 2 : 
        chosenDesign === 'design_36' ? 2 + 2 : 
        chosenDesign === 'design_37' ? 2 + 2 : 
        chosenDesign === 'design_38' ? 2 + 2 : 
        chosenDesign === 'design_39' ? 2 + 2 : 
        chosenDesign === 'design_40' ? 4 + 2 : 
        7, // prettier-ignore
    },
    {
      class: '',
      heading: 'Internship Profile',
      headingColor: '',
      description:
        '- What type of roles did you intern - What skills did you garner. \n- Explain what the team worked on. \n - State what feedback you got. ',
      descriptionColor: '#c95204',
      top:
        chosenDesign === 'design_1' ? 12 + 2 : 
        chosenDesign === 'design_2' ? 13 + 2 : 
        chosenDesign === 'design_3' ? 8 + 2 : 
        chosenDesign === 'design_4' ? 11 + 2 : 
        chosenDesign === 'design_5' ? 20 + 2 : 
        chosenDesign === 'design_6' ? 15 + 2 : 
        chosenDesign === 'design_7' ? 16 + 2 : 
        chosenDesign === 'design_8' ? 8 + 2 : 
        chosenDesign === 'design_9' ? 13 + 2 : 
        chosenDesign === 'design_10' ? 14 + 2 : 
        chosenDesign === 'design_11' ? 13 + 2 : 
        chosenDesign === 'design_12' ? 15 + 2 : 
        chosenDesign === 'design_13' ? 13 + 2 : 
        chosenDesign === 'design_14' ? 19 + 2 : 
        chosenDesign === 'design_15' ? 12 + 2 : 
        chosenDesign === 'design_16' ? 20 + 2 : 
        chosenDesign === 'design_17' ? 15 + 2 : 
        chosenDesign === 'design_18' ? 13 + 4 : 
        chosenDesign === 'design_19' ? 19 + 2 : 
        chosenDesign === 'design_20' ? 15 + 2 : 
        chosenDesign === 'design_21' ? 9 + 2 : 
        chosenDesign === 'design_22' ? 11 + 2 : 
        chosenDesign === 'design_23' ? 11 + 2 : 
        chosenDesign === 'design_24' ? 17 + 2 : 
        chosenDesign === 'design_25' ? 12 + 2 : 
        chosenDesign === 'design_26' ? 7 + 2 : 
        chosenDesign === 'design_27' ? 7 + 2 : 
        chosenDesign === 'design_28' ? 8 + 2 : 
        chosenDesign === 'design_29' ? 11 + 2 : 
        chosenDesign === 'design_30' ? 14 + 2 : 
        chosenDesign === 'design_31' ? 7 + 2 : 
        chosenDesign === 'design_32' ? 7 + 2 : 
        chosenDesign === 'design_33' ? 7 + 2 : 
        chosenDesign === 'design_34' ? 7 + 2 : 
        chosenDesign === 'design_35' ? 10 + 2 : 
        chosenDesign === 'design_36' ? 7 + 2 : 
        chosenDesign === 'design_37' ? 7 + 2 : 
        chosenDesign === 'design_38' ? 7 + 2 : 
        chosenDesign === 'design_39' ? 7 + 2 : 
        chosenDesign === 'design_40' ? 9 + 2 : 
        12, // prettier-ignore
    },
    {
      class: '',
      heading: "Why You're Excited",
      headingColor: '',
      description:
        '- Give example of your passion - relevant to the target position. \n - Enumerate the skills & give 1 example. \n - State the outcome.',
      descriptionColor: '#1c7dfc',
      top:
        chosenDesign === 'design_1' ? 18 + 2 : 
        chosenDesign === 'design_2' ? 20 + 2 : 
        chosenDesign === 'design_3' ? 15 + 2 : 
        chosenDesign === 'design_4' ? 17 + 2 : 
        chosenDesign === 'design_5' ? 26 + 2 : 
        chosenDesign === 'design_6' ? 21 + 2 : 
        chosenDesign === 'design_7' ? 22 + 2 : 
        chosenDesign === 'design_8' ? 14 + 2 : 
        chosenDesign === 'design_9' ? 19 + 2 : 
        chosenDesign === 'design_10' ? 20 + 2 : 
        chosenDesign === 'design_11' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 25 + 2 : 
        chosenDesign === 'design_15' ? 19 + 2 : 
        chosenDesign === 'design_16' ? 26 + 2 : 
        chosenDesign === 'design_17' ? 21 + 2 : 
        chosenDesign === 'design_18' ? 20 + 4 : 
        chosenDesign === 'design_19' ? 25 + 2 : 
        chosenDesign === 'design_20' ? 21 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_22' ? 17 + 2 : 
        chosenDesign === 'design_23' ? 17 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 13 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 17 + 2 : 
        chosenDesign === 'design_30' ? 21 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 16 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        19, // prettier-ignore
    },
    {
      class: '',
      heading: 'Interned Company',
      headingColor: '',
      description:
        '- Take one intern company and state the valuable contribution it gave you that will benefit the current organization.',
      descriptionColor: '#5e589c',
      top:
        chosenDesign === 'design_1' ? 25 + 2 : 
        chosenDesign === 'design_2' ? 26 + 2 : 
        chosenDesign === 'design_3' ? 22 + 2 : 
        chosenDesign === 'design_4' ? 23 + 2 : 
        chosenDesign === 'design_5' ? 32 + 2 : 
        chosenDesign === 'design_6' ? 27 + 2 : 
        chosenDesign === 'design_7' ? 28 + 2 : 
        chosenDesign === 'design_8' ? 21 + 2 : 
        chosenDesign === 'design_9' ? 25 + 2 : 
        chosenDesign === 'design_10' ? 26 + 2 : 
        chosenDesign === 'design_11' ? 25 + 2 : 
        chosenDesign === 'design_12' ? 27 + 2 : 
        chosenDesign === 'design_13' ? 25 + 2 : 
        chosenDesign === 'design_14' ? 31 + 2 : 
        chosenDesign === 'design_15' ? 25 + 2 : 
        chosenDesign === 'design_16' ? 32 + 2 : 
        chosenDesign === 'design_17' ? 27 + 2 : 
        chosenDesign === 'design_18' ? 26 + 4 : 
        chosenDesign === 'design_19' ? 31 + 2 : 
        chosenDesign === 'design_20' ? 27 + 2 : 
        chosenDesign === 'design_21' ? 21 + 2 : 
        chosenDesign === 'design_22' ? 23 + 2 : 
        chosenDesign === 'design_23' ? 23 + 2 : 
        chosenDesign === 'design_24' ? 29 + 2 : 
        chosenDesign === 'design_25' ? 24 + 2 : 
        chosenDesign === 'design_26' ? 19 + 2 : 
        chosenDesign === 'design_27' ? 19 + 2 : 
        chosenDesign === 'design_28' ? 20 + 2 : 
        chosenDesign === 'design_29' ? 23 + 2 : 
        chosenDesign === 'design_30' ? 27 + 2 : 
        chosenDesign === 'design_31' ? 19 + 2 : 
        chosenDesign === 'design_32' ? 19 + 2 : 
        chosenDesign === 'design_33' ? 19 + 2 : 
        chosenDesign === 'design_34' ? 19 + 2 : 
        chosenDesign === 'design_35' ? 22 + 2 : 
        chosenDesign === 'design_36' ? 19 + 2 : 
        chosenDesign === 'design_37' ? 19 + 2 : 
        chosenDesign === 'design_38' ? 19 + 2 : 
        chosenDesign === 'design_39' ? 19 + 2 : 
        chosenDesign === 'design_40' ? 21 + 2 : 
        26, // prettier-ignore
    },
  ];

  const recentGraduateNoInternship_ProTipsData = [
    {
      class: '',
      heading: "Show You're Excited",
      headingColor: '',
      description: 'Show excitement about the role.',
      descriptionColor: '#3626d0',
      height: 100,
      top:
        chosenDesign === 'design_1' ? 7 + 2 : 
        chosenDesign === 'design_2' ? 9 + 2 : 
        chosenDesign === 'design_3' ? 4 + 2 : 
        chosenDesign === 'design_4' ? 6 + 2 : 
        chosenDesign === 'design_5' ? 15 + 2 : 
        chosenDesign === 'design_6' ? 10 + 2 : 
        chosenDesign === 'design_7' ? 11 + 5 : 
        chosenDesign === 'design_8' ? 3 + 2 : 
        chosenDesign === 'design_9' ? 9 + 2 : 
        chosenDesign === 'design_10' ? 9 + 2 : 
        chosenDesign === 'design_11' ? 8 + 2 : 
        chosenDesign === 'design_12' ? 10 + 2 : 
        chosenDesign === 'design_13' ? 8 + 2 : 
        chosenDesign === 'design_14' ? 14 + 2 : 
        chosenDesign === 'design_15' ? 7 + 2 : 
        chosenDesign === 'design_16' ? 15 + 2 : 
        chosenDesign === 'design_17' ? 10 + 2 : 
        chosenDesign === 'design_18' ? 8 + 2 : 
        chosenDesign === 'design_19' ? 14 + 2 : 
        chosenDesign === 'design_20' ? 10 + 2 : 
        chosenDesign === 'design_21' ? 4 + 2 : 
        chosenDesign === 'design_22' ? 6 + 2 : 
        chosenDesign === 'design_23' ? 6 + 2 : 
        chosenDesign === 'design_24' ? 12 + 2 : 
        chosenDesign === 'design_25' ? 7 + 2 : 
        chosenDesign === 'design_26' ? 2 + 2 : 
        chosenDesign === 'design_27' ? 2 + 2 : 
        chosenDesign === 'design_28' ? 3 + 2 : 
        chosenDesign === 'design_29' ? 6 + 2 : 
        chosenDesign === 'design_30' ? 9 + 2 : 
        chosenDesign === 'design_31' ? 2 + 2 : 
        chosenDesign === 'design_32' ? 2 + 2 : 
        chosenDesign === 'design_33' ? 2 + 2 : 
        chosenDesign === 'design_34' ? 2 + 2 : 
        chosenDesign === 'design_35' ? 5 + 2 : 
        chosenDesign === 'design_36' ? 2 + 2 : 
        chosenDesign === 'design_37' ? 2 + 2 : 
        chosenDesign === 'design_38' ? 2 + 2 : 
        chosenDesign === 'design_39' ? 2 + 2 : 
        chosenDesign === 'design_40' ? 4 + 2 : 
        7, // prettier-ignore
    },
    {
      class: '',
      heading: 'State Skills Developed',
      headingColor: '',
      description:
        '- List 2-3 skills developed \n -Team membership \n - Projects and purpose /tasks \n - Tools / techniques / expertise \n - Tie the skills to some tasks & accomplishments',
      descriptionColor: '#1c7dfc',
      top:
        chosenDesign === 'design_1' ? 15 + 2 : 
        chosenDesign === 'design_2' ? 17 + 2 : 
        chosenDesign === 'design_3' ? 12 + 2 : 
        chosenDesign === 'design_4' ? 13 + 2 : 
        chosenDesign === 'design_5' ? 22 + 2 : 
        chosenDesign === 'design_6' ? 17 + 2 : 
        chosenDesign === 'design_7' ? 18 + 5 : 
        chosenDesign === 'design_8' ? 8 + 6 : 
        chosenDesign === 'design_9' ? 16 + 2 : 
        chosenDesign === 'design_10' ? 16 + 2 : 
        chosenDesign === 'design_11' ? 16 + 2 : 
        chosenDesign === 'design_12' ? 17 + 2 : 
        chosenDesign === 'design_13' ? 15 + 2 : 
        chosenDesign === 'design_14' ? 21 + 2 : 
        chosenDesign === 'design_15' ? 14 + 2 : 
        chosenDesign === 'design_16' ? 22 + 2 : 
        chosenDesign === 'design_17' ? 17 + 2 : 
        chosenDesign === 'design_18' ? 17 + 2 : 
        chosenDesign === 'design_19' ? 21 + 2 : 
        chosenDesign === 'design_20' ? 17 + 2 : 
        chosenDesign === 'design_21' ? 11 + 2 : 
        chosenDesign === 'design_22' ? 13 + 2 : 
        chosenDesign === 'design_23' ? 13 + 2 : 
        chosenDesign === 'design_24' ? 19 + 2 : 
        chosenDesign === 'design_25' ? 14 + 2 : 
        chosenDesign === 'design_26' ? 9 + 2 : 
        chosenDesign === 'design_27' ? 9 + 2 : 
        chosenDesign === 'design_28' ? 10 + 2 : 
        chosenDesign === 'design_29' ? 15 + 2 : 
        chosenDesign === 'design_30' ? 18 + 2 : 
        chosenDesign === 'design_31' ? 9 + 2 : 
        chosenDesign === 'design_32' ? 9 + 2 : 
        chosenDesign === 'design_33' ? 9 + 2 : 
        chosenDesign === 'design_34' ? 9 + 2 : 
        chosenDesign === 'design_35' ? 12 + 2 : 
        chosenDesign === 'design_36' ? 9 + 2 : 
        chosenDesign === 'design_37' ? 9 + 2 : 
        chosenDesign === 'design_38' ? 9 + 2 : 
        chosenDesign === 'design_39' ? 9 + 2 : 
        chosenDesign === 'design_40' ? 11 + 2 : 
        12, // prettier-ignore
    },
    {
      class: '',
      heading: 'Why This Organization?',
      headingColor: '',
      description:
        '- Identify 2-3 values of the company that you share \n - State how these will help you to contribute to their goals.',
      descriptionColor: '#c95204',
      top:
        chosenDesign === 'design_1' ? 23 + 2 : 
        chosenDesign === 'design_2' ? 25 + 2 : 
        chosenDesign === 'design_3' ? 21 + 2 : 
        chosenDesign === 'design_4' ? 20 + 2 : 
        chosenDesign === 'design_5' ? 29 + 2 : 
        chosenDesign === 'design_6' ? 24 + 2 : 
        chosenDesign === 'design_7' ? 25 + 5 : 
        chosenDesign === 'design_8' ? 14 + 8 : 
        chosenDesign === 'design_9' ? 23 + 2 : 
        chosenDesign === 'design_10' ? 23 + 2 : 
        chosenDesign === 'design_11' ? 24 + 2 : 
        chosenDesign === 'design_12' ? 25 + 2 : 
        chosenDesign === 'design_13' ? 22 + 2 : 
        chosenDesign === 'design_14' ? 28 + 2 : 
        chosenDesign === 'design_15' ? 24 + 2 : 
        chosenDesign === 'design_16' ? 29 + 2 : 
        chosenDesign === 'design_17' ? 24 + 2 : 
        chosenDesign === 'design_18' ? 25 + 2 : 
        chosenDesign === 'design_19' ? 28 + 2 : 
        chosenDesign === 'design_20' ? 24 + 2 : 
        chosenDesign === 'design_21' ? 18 + 2 : 
        chosenDesign === 'design_22' ? 20 + 2 : 
        chosenDesign === 'design_23' ? 20 + 2 : 
        chosenDesign === 'design_24' ? 26 + 2 : 
        chosenDesign === 'design_25' ? 21 + 2 : 
        chosenDesign === 'design_26' ? 16 + 2 : 
        chosenDesign === 'design_27' ? 16 + 2 : 
        chosenDesign === 'design_28' ? 17 + 2 : 
        chosenDesign === 'design_29' ? 23 + 2 : 
        chosenDesign === 'design_30' ? 27 + 2 : 
        chosenDesign === 'design_31' ? 16 + 2 : 
        chosenDesign === 'design_32' ? 16 + 2 : 
        chosenDesign === 'design_33' ? 16 + 2 : 
        chosenDesign === 'design_34' ? 16 + 2 : 
        chosenDesign === 'design_35' ? 19 + 2 : 
        chosenDesign === 'design_36' ? 16 + 2 : 
        chosenDesign === 'design_37' ? 16 + 2 : 
        chosenDesign === 'design_38' ? 16 + 2 : 
        chosenDesign === 'design_39' ? 16 + 2 : 
        chosenDesign === 'design_40' ? 18 + 2 : 
        19, // prettier-ignore
    },
    {
      class: '',
      heading: 'Wrap Up',
      headingColor: '',
      description:
        '- Tie how your qualifications, and adopted methodologies will help the organization positively',
      descriptionColor: '#5e589c',
      top:
        chosenDesign === 'design_1' ? 31 + 2 : 
        chosenDesign === 'design_2' ? 33 + 2 : 
        chosenDesign === 'design_3' ? 28 + 2 : 
        chosenDesign === 'design_4' ? 25 + 2 : 
        chosenDesign === 'design_5' ? 34 + 2 : 
        chosenDesign === 'design_6' ? 30 + 2 : 
        chosenDesign === 'design_7' ? 31 + 5 : 
        chosenDesign === 'design_8' ? 21 + 8 : 
        chosenDesign === 'design_9' ? 29 + 2 : 
        chosenDesign === 'design_10' ? 29 + 2 : 
        chosenDesign === 'design_11' ? 30 + 2 : 
        chosenDesign === 'design_12' ? 31 + 2 : 
        chosenDesign === 'design_13' ? 28 + 2 : 
        chosenDesign === 'design_14' ? 34 + 2 : 
        chosenDesign === 'design_15' ? 30 + 2 : 
        chosenDesign === 'design_16' ? 35 + 2 : 
        chosenDesign === 'design_17' ? 30 + 2 : 
        chosenDesign === 'design_18' ? 32 + 2 : 
        chosenDesign === 'design_19' ? 34 + 2 : 
        chosenDesign === 'design_20' ? 30 + 2 : 
        chosenDesign === 'design_21' ? 24 + 2 : 
        chosenDesign === 'design_22' ? 26 + 2 : 
        chosenDesign === 'design_23' ? 25 + 2 : 
        chosenDesign === 'design_24' ? 31 + 2 : 
        chosenDesign === 'design_25' ? 26 + 2 : 
        chosenDesign === 'design_26' ? 21 + 2 : 
        chosenDesign === 'design_27' ? 21 + 2 : 
        chosenDesign === 'design_28' ? 22 + 2 : 
        chosenDesign === 'design_29' ? 30 + 2 : 
        chosenDesign === 'design_30' ? 33 + 2 : 
        chosenDesign === 'design_31' ? 21 + 2 : 
        chosenDesign === 'design_32' ? 22 + 2 : 
        chosenDesign === 'design_33' ? 22 + 2 : 
        chosenDesign === 'design_34' ? 21 + 2 : 
        chosenDesign === 'design_35' ? 25 + 2 : 
        chosenDesign === 'design_36' ? 22 + 2 : 
        chosenDesign === 'design_37' ? 21 + 2 : 
        chosenDesign === 'design_38' ? 21 + 2 : 
        chosenDesign === 'design_39' ? 21 + 2 : 
        chosenDesign === 'design_40' ? 23 + 2 : 
        26, // prettier-ignore
    },
  ];

  const careerChange1_ProTipsData = [
    {
      class: '',
      heading: 'Intro?',
      headingColor: '',
      description:
        '• Mention years of experience \n • List 2-3 of your main duties/tasks that closely match the top 2-3 duties/requirements of the job description. \n • State the job role/dept you are transitioning into.',
      descriptionColor: '#3626d0',
      baseHeadingValue:
        chosenDesign === 'design_1' ? 17 + 2 : 
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 14 + 2 : 
        chosenDesign === 'design_4' ? 32 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 27 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 21 + 2 : 
        chosenDesign === 'design_10' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 20 + 2 : 
        chosenDesign === 'design_13' ? 20 + 2 : 
        chosenDesign === 'design_14' ? 25 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 19 + 2 : 
        chosenDesign === 'design_19' ? 25 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_24' ? 24 + 2 : 
        chosenDesign === 'design_26' ? 15 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 15 + 2 : 
        chosenDesign === 'design_30' ? 19 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      left: true,
      height: 30,
      top:
      chosenDesign === 'design_4' ? -7 + 2 : 
      chosenDesign === 'design_5' ? 10 + 2 : 
      chosenDesign === 'design_6' ? 10 + 2 : 
      9, // prettier-ignore
    },
    {
      class: '',
      heading: 'What Sector Were You in?',
      headingColor: '',
      description:
        '• What previous job aspects do you now feel most rewarding? \n • Tie 2 of such job aspects to the main function of the job you are applying for.',
      descriptionColor: '#c95204',
      baseHeadingValue:
        chosenDesign === 'design_1' ? 17 + 2 : 
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 14 + 2 : 
        chosenDesign === 'design_4' ? 32 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 27 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 21 + 2 : 
        chosenDesign === 'design_10' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 20 + 2 : 
        chosenDesign === 'design_13' ? 20 + 2 : 
        chosenDesign === 'design_14' ? 25 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 19 + 2 : 
        chosenDesign === 'design_19' ? 25 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_24' ? 24 + 2 : 
        chosenDesign === 'design_26' ? 15 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 15 + 2 : 
        chosenDesign === 'design_30' ? 19 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      height: 30,
      left: true,
      top:
      chosenDesign === 'design_4' ? 1 + 2 : 
      chosenDesign === 'design_5' ? 17 + 2 : 
      chosenDesign === 'design_6' ? 17 + 2 : 
      16, // prettier-ignore
    },
    {
      class: '',
      heading: 'Why the Present organization?',
      headingColor: '',
      description:
        '• State what the role will allow you to do-some thing you enjoy doing. • Mention a value(s) that you share with the com pany and explain why. the value is important to you.',
      descriptionColor: '#1c7dfc',
      baseHeadingValue:
        chosenDesign === 'design_1' ? 17 + 2 : 
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 14 + 2 : 
        chosenDesign === 'design_4' ? 32 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 27 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 21 + 2 : 
        chosenDesign === 'design_10' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 20 + 2 : 
        chosenDesign === 'design_14' ? 25 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 19 + 2 : 
        chosenDesign === 'design_19' ? 25 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_24' ? 24 + 2 : 
        chosenDesign === 'design_26' ? 15 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 15 + 2 : 
        chosenDesign === 'design_30' ? 19 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      left: true,
      height: 150,
      top:
      chosenDesign === 'design_4' ? 16 + 2 : 
      chosenDesign === 'design_5' ? 31 + 2 : 
      chosenDesign === 'design_6' ? 31 + 2 : 
      chosenDesign === 'design_7' ? 28 + 2 : 
      chosenDesign === 'design_12' ? 33 + 2 : 
      chosenDesign === 'design_14' ? 33 + 2 : 
      chosenDesign === 'design_16' ? 35 + 2 : 
      chosenDesign === 'design_17' ? 35 + 2 : 
      chosenDesign === 'design_19' ? 32 + 2 : 
      chosenDesign === 'design_20' ? 32 + 2 : 
      chosenDesign === 'design_21' ? 31 + 2 : 
      chosenDesign === 'design_22' ? 29 + 2 : 
      chosenDesign === 'design_23' ? 29 + 2 : 
      chosenDesign === 'design_24' ? 29 + 2 : 
      chosenDesign === 'design_25' ? 29 + 2 : 
      chosenDesign === 'design_26' ? 29 + 2 : 
      chosenDesign === 'design_27' ? 29 + 2 : 
      chosenDesign === 'design_28' ? 31 + 2 : 
      chosenDesign === 'design_31' ? 30 + 2 : 
      chosenDesign === 'design_32' ? 30 + 2 : 
      chosenDesign === 'design_33' ? 30 + 2 : 
      chosenDesign === 'design_34' ? 30 + 2 : 
      chosenDesign === 'design_35' ? 30 + 2 : 
      chosenDesign === 'design_36' ? 30 + 2 : 
      chosenDesign === 'design_37' ? 30 + 2 : 
      chosenDesign === 'design_38' ? 30 + 2 : 
      chosenDesign === 'design_39' ? 30 + 2 : 
      chosenDesign === 'design_40' ? 30 + 2 : 
      36, // prettier-ignore
    },
    {
      class: '',
      heading: 'Wrapping Up',
      headingColor: '',
      description:
        'State 1-2 transferable skills related to the pres ent role that you have that will contribute the best value to the organization.',
      descriptionColor: '#5e589c',
      baseHeadingValue:
        chosenDesign === 'design_1' ? 17 + 2 : 
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 14 + 2 : 
        chosenDesign === 'design_4' ? 32 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 27 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 21 + 2 : 
        chosenDesign === 'design_10' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 20 + 2 : 
        chosenDesign === 'design_14' ? 25 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 19 + 2 : 
        chosenDesign === 'design_19' ? 25 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_24' ? 24 + 2 : 
        chosenDesign === 'design_26' ? 15 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 15 + 2 : 
        chosenDesign === 'design_30' ? 19 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      left: true,
      height: 60,
      top:
      chosenDesign === 'design_4' ? 29 + 2 : 
      chosenDesign === 'design_5' ? 44 + 2 : 
      chosenDesign === 'design_6' ? 44 + 2 : 
      chosenDesign === 'design_7' ? 41 + 2 : 
      chosenDesign === 'design_12' ? 49 + 2 : 
      chosenDesign === 'design_14' ? 48 + 2 : 
      chosenDesign === 'design_16' ? 48 + 2 : 
      chosenDesign === 'design_17' ? 48 + 2 : 
      chosenDesign === 'design_19' ? 45 + 2 : 
      chosenDesign === 'design_20' ? 45 + 2 : 
      chosenDesign === 'design_21' ? 42 + 2 : 
      chosenDesign === 'design_22' ? 45 + 2 : 
      chosenDesign === 'design_23' ? 43 + 2 : 
      chosenDesign === 'design_24' ? 43 + 2 : 
      chosenDesign === 'design_25' ? 43 + 2 : 
      chosenDesign === 'design_26' ? 43 + 2 : 
      chosenDesign === 'design_27' ? 43 + 2 : 
      chosenDesign === 'design_28' ? 45 + 2 : 
      chosenDesign === 'design_31' ? 44 + 2 : 
      chosenDesign === 'design_32' ? 44 + 2 : 
      chosenDesign === 'design_33' ? 44 + 2 : 
      chosenDesign === 'design_34' ? 44 + 2 : 
      chosenDesign === 'design_35' ? 44 + 2 : 
      chosenDesign === 'design_36' ? 44 + 2 : 
      chosenDesign === 'design_37' ? 44 + 2 : 
      chosenDesign === 'design_38' ? 44 + 2 : 
      chosenDesign === 'design_39' ? 44 + 2 : 
      chosenDesign === 'design_40' ? 44 + 2 : 
      52, // prettier-ignore
    },
    {
      class: '',
      heading: 'Re-state the Role',
      headingColor: '',
      description: 'Recall the exact position applied for.',
      descriptionColor: '#3626d0',
      baseHeadingValue:
        chosenDesign === 'design_1' ? 17 + 2 : 
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 14 + 2 : 
        chosenDesign === 'design_4' ? 32 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 27 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 21 + 2 : 
        chosenDesign === 'design_10' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 20 + 2 : 
        chosenDesign === 'design_13' ? 20 + 2 : 
        chosenDesign === 'design_14' ? 25 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 19 + 2 : 
        chosenDesign === 'design_19' ? 25 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_24' ? 24 + 2 : 
        chosenDesign === 'design_26' ? 15 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 15 + 2 : 
        chosenDesign === 'design_30' ? 19 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      height: 30,
      top: 
        chosenDesign === 'design_4' ? -10 + 2 : 
        chosenDesign === 'design_6' ? 7 + 2 : 
        chosenDesign === 'design_7' ? 5 + 2 : 
        6, // prettier-ignore
    },
    {
      class: '',
      heading: 'Explain in the first',
      headingColor: '',
      description:
        '• Outline how your skills fit with current specific needs. \n • List transferable skill related to the job requirements. \n • Explain in the first person how you demonstrated this skill and include a positive outcome/result/ achievement. Where possible include. numerical data-numbers/figures/%/$/£',
      descriptionColor: '#c95204',
      baseHeadingValue:
        chosenDesign === 'design_1' ? 17 + 2 : 
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 14 + 2 : 
        chosenDesign === 'design_4' ? 32 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 18 + 2 : 
        chosenDesign === 'design_7' ? 27 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 21 + 2 : 
        chosenDesign === 'design_10' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 20 + 2 : 
        chosenDesign === 'design_14' ? 25 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 19 + 2 : 
        chosenDesign === 'design_19' ? 25 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_24' ? 24 + 2 : 
        chosenDesign === 'design_26' ? 15 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 15 + 2 : 
        chosenDesign === 'design_30' ? 19 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      height: 160,
      top:
      chosenDesign === 'design_4' ? 5 + 2 : 
      chosenDesign === 'design_5' ? 20 + 2 : 
      chosenDesign === 'design_7' ? 17 + 2 : 
      chosenDesign === 'design_14' ? 20 + 2 : 
      chosenDesign === 'design_16' ? 20 + 2 : 
      chosenDesign === 'design_17' ? 20 + 2 : 
      chosenDesign === 'design_19' ? 20 + 2 : 
      chosenDesign === 'design_20' ? 20 + 2 : 
      chosenDesign === 'design_21' ? 20 + 2 : 
      chosenDesign === 'design_22' ? 17 + 2 : 
      chosenDesign === 'design_23' ? 17 + 2 : 
      chosenDesign === 'design_24' ? 17 + 2 : 
      chosenDesign === 'design_25' ? 17 + 2 : 
      chosenDesign === 'design_26' ? 17 + 2 : 
      chosenDesign === 'design_27' ? 17 + 2 : 
      chosenDesign === 'design_28' ? 19 + 2 : 
      chosenDesign === 'design_31' ? 19 + 2 : 
      chosenDesign === 'design_32' ? 19 + 2 : 
      chosenDesign === 'design_33' ? 19 + 2 : 
      chosenDesign === 'design_34' ? 19 + 2 : 
      chosenDesign === 'design_35' ? 19 + 2 : 
      chosenDesign === 'design_36' ? 19 + 2 : 
      chosenDesign === 'design_37' ? 19 + 2 : 
      chosenDesign === 'design_38' ? 19 + 2 : 
      chosenDesign === 'design_39' ? 19 + 2 : 
      chosenDesign === 'design_40' ? 19 + 2 : 
      23, // prettier-ignore
    },
    {
      class: '',
      heading: '• Mention Any Key CSR of the Organization',
      headingColor: '',
      description:
        '. Mention what charitable/sustainable/corporate social responsibilities (CSR) the company is working on or have done in the past',
      descriptionColor: '#5e589c',
      baseHeadingValue:
        chosenDesign === 'design_1' ? 17 + 2 : 
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 14 + 2 : 
        chosenDesign === 'design_4' ? 32 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 27 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 21 + 2 : 
        chosenDesign === 'design_10' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 20 + 2 : 
        chosenDesign === 'design_14' ? 25 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 19 + 2 : 
        chosenDesign === 'design_19' ? 25 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_24' ? 24 + 2 : 
        chosenDesign === 'design_26' ? 15 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 15 + 2 : 
        chosenDesign === 'design_30' ? 19 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      height: 50,
      top:
      chosenDesign === 'design_4' ? 25 + 2 : 
      chosenDesign === 'design_5' ? 40 + 2 : 
      chosenDesign === 'design_6' ? 40 + 2 : 
      chosenDesign === 'design_7' ? 37 + 2 : 
      chosenDesign === 'design_12' ? 44 + 2 : 
      chosenDesign === 'design_14' ? 43 + 2 : 
      chosenDesign === 'design_16' ? 43 + 2 : 
      chosenDesign === 'design_17' ? 43 + 2 : 
      chosenDesign === 'design_19' ? 41 + 2 : 
      chosenDesign === 'design_20' ? 41 + 2 : 
      chosenDesign === 'design_21' ? 40 + 2 : 
      chosenDesign === 'design_22' ? 39 + 2 : 
      chosenDesign === 'design_23' ? 39 + 2 : 
      chosenDesign === 'design_24' ? 39 + 2 : 
      chosenDesign === 'design_25' ? 39 + 2 : 
      chosenDesign === 'design_26' ? 39 + 2 : 
      chosenDesign === 'design_27' ? 39 + 2 : 
      chosenDesign === 'design_28' ? 41 + 2 : 
      chosenDesign === 'design_31' ? 40 + 2 : 
      chosenDesign === 'design_32' ? 40 + 2 : 
      chosenDesign === 'design_33' ? 40 + 2 : 
      chosenDesign === 'design_34' ? 40 + 2 : 
      chosenDesign === 'design_35' ? 40 + 2 : 
      chosenDesign === 'design_36' ? 40 + 2 : 
      chosenDesign === 'design_37' ? 40 + 2 : 
      chosenDesign === 'design_38' ? 38 + 2 : 
      chosenDesign === 'design_39' ? 38 + 2 : 
      chosenDesign === 'design_40' ? 40 + 2 : 
      47, // prettier-ignore
    },
  ];

  const careerChange2_ProTipsData = [
    {
      class: '',
      heading: 'Activities Carried Out',
      headingColor: '',
      description:
        "- State activities and types of tasks you've done before \n - State your transition intent.",
      descriptionColor: '#3626d0',
      top:
        chosenDesign === 'design_1' ? 7 + 2 : 
        chosenDesign === 'design_2' ? 9 + 2 : 
        chosenDesign === 'design_3' ? 5 + 2 : 
        chosenDesign === 'design_4' ? 6 + 2 : 
        chosenDesign === 'design_5' ? 16 + 2 : 
        chosenDesign === 'design_6' ? 11 + 2 : 
        chosenDesign === 'design_7' ? 14 + 2 : 
        chosenDesign === 'design_8' ? 2 + 2 : 
        chosenDesign === 'design_9' ? 10 + 2 : 
        chosenDesign === 'design_10' ? 10 + 2 : 
        chosenDesign === 'design_11' ? 8 + 2 : 
        chosenDesign === 'design_12' ? 10 + 2 : 
        chosenDesign === 'design_13' ? 8 + 2 : 
        chosenDesign === 'design_14' ? 14 + 2 : 
        chosenDesign === 'design_15' ? 7 + 2 : 
        chosenDesign === 'design_16' ? 15 + 2 : 
        chosenDesign === 'design_17' ? 10 + 2 : 
        chosenDesign === 'design_18' ? 8 + 2 : 
        chosenDesign === 'design_19' ? 14 + 2 : 
        chosenDesign === 'design_20' ? 10 + 2 : 
        chosenDesign === 'design_21' ? 4 + 2 : 
        chosenDesign === 'design_22' ? 6 + 2 : 
        chosenDesign === 'design_23' ? 6 + 2 : 
        chosenDesign === 'design_24' ? 12 + 2 : 
        chosenDesign === 'design_25' ? 7 + 2 : 
        chosenDesign === 'design_26' ? 3 + 2 : 
        chosenDesign === 'design_27' ? 3 + 2 : 
        chosenDesign === 'design_28' ? 3 + 2 : 
        chosenDesign === 'design_29' ? 6 + 2 : 
        chosenDesign === 'design_30' ? 9 + 2 : 
        chosenDesign === 'design_31' ? 2 + 2 : 
        chosenDesign === 'design_32' ? 2 + 2 : 
        chosenDesign === 'design_33' ? 2 + 2 : 
        chosenDesign === 'design_34' ? 2 + 2 : 
        chosenDesign === 'design_35' ? 5 + 2 : 
        chosenDesign === 'design_36' ? 2 + 2 : 
        chosenDesign === 'design_37' ? 2 + 2 : 
        chosenDesign === 'design_38' ? 2 + 2 : 
        chosenDesign === 'design_39' ? 2 + 2 : 
        chosenDesign === 'design_40' ? 4 + 2 : 
        7, // prettier-ignore
    },
    {
      class: '',
      heading: 'Why The Transition?',
      headingColor: '',
      description:
        '- State why you found some aspects of your work as enablers or levers for your transition.',
      descriptionColor: '#c95204',
      top:
        chosenDesign === 'design_1' ? 14 + 2 : 
        chosenDesign === 'design_2' ? 16 + 2 : 
        chosenDesign === 'design_3' ? 11 + 2 : 
        chosenDesign === 'design_4' ? 13 + 2 : 
        chosenDesign === 'design_5' ? 23 + 2 : 
        chosenDesign === 'design_6' ? 17 + 2 : 
        chosenDesign === 'design_7' ? 20 + 2 : 
        chosenDesign === 'design_8' ? 10 + 2 : 
        chosenDesign === 'design_9' ? 16 + 2 : 
        chosenDesign === 'design_10' ? 16 + 2 : 
        chosenDesign === 'design_11' ? 15 + 2 : 
        chosenDesign === 'design_12' ? 16 + 2 : 
        chosenDesign === 'design_13' ? 14 + 2 : 
        chosenDesign === 'design_14' ? 20 + 2 : 
        chosenDesign === 'design_15' ? 13 + 2 : 
        chosenDesign === 'design_16' ? 21 + 2 : 
        chosenDesign === 'design_17' ? 16 + 2 : 
        chosenDesign === 'design_18' ? 16 + 2 : 
        chosenDesign === 'design_19' ? 20 + 2 : 
        chosenDesign === 'design_20' ? 16 + 2 : 
        chosenDesign === 'design_21' ? 11 + 2 : 
        chosenDesign === 'design_22' ? 13 + 2 : 
        chosenDesign === 'design_23' ? 13 + 2 : 
        chosenDesign === 'design_24' ? 19 + 2 : 
        chosenDesign === 'design_25' ? 14 + 2 : 
        chosenDesign === 'design_26' ? 9 + 2 : 
        chosenDesign === 'design_27' ? 9 + 2 : 
        chosenDesign === 'design_28' ? 10 + 2 : 
        chosenDesign === 'design_29' ? 13 + 2 : 
        chosenDesign === 'design_30' ? 16 + 2 : 
        chosenDesign === 'design_31' ? 8 + 2 : 
        chosenDesign === 'design_32' ? 8 + 2 : 
        chosenDesign === 'design_33' ? 8 + 2 : 
        chosenDesign === 'design_34' ? 8 + 2 : 
        chosenDesign === 'design_35' ? 11 + 2 : 
        chosenDesign === 'design_36' ? 8 + 2 : 
        chosenDesign === 'design_37' ? 8 + 2 : 
        chosenDesign === 'design_38' ? 8 + 2 : 
        chosenDesign === 'design_39' ? 8 + 2 : 
        chosenDesign === 'design_40' ? 10 + 2 : 
        14, // prettier-ignore
    },
    {
      class: '',
      heading: 'How Your Skills Fit',
      headingColor: '',
      description:
        '- Take 2-3 key requirements of the JD and state how these fit the present role.',
      descriptionColor: '#1c7dfc',
      top:
        chosenDesign === 'design_1' ? 24 + 2 : 
        chosenDesign === 'design_2' ? 27 + 2 : 
        chosenDesign === 'design_3' ? 24 + 2 : 
        chosenDesign === 'design_4' ? 24 + 2 : 
        chosenDesign === 'design_5' ? 34 + 2 : 
        chosenDesign === 'design_6' ? 29 + 2 : 
        chosenDesign === 'design_7' ? 32 + 2 : 
        chosenDesign === 'design_8' ? 24 + 2 : 
        chosenDesign === 'design_9' ? 28 + 2 : 
        chosenDesign === 'design_10' ? 28 + 2 : 
        chosenDesign === 'design_11' ? 29 + 2 : 
        chosenDesign === 'design_12' ? 29 + 2 : 
        chosenDesign === 'design_13' ? 26 + 2 : 
        chosenDesign === 'design_14' ? 32 + 2 : 
        chosenDesign === 'design_15' ? 28 + 2 : 
        chosenDesign === 'design_16' ? 33 + 2 : 
        chosenDesign === 'design_17' ? 28 + 2 : 
        chosenDesign === 'design_18' ? 29 + 2 : 
        chosenDesign === 'design_19' ? 32 + 2 : 
        chosenDesign === 'design_20' ? 28 + 2 : 
        chosenDesign === 'design_21' ? 22 + 2 : 
        chosenDesign === 'design_22' ? 23 + 2 : 
        chosenDesign === 'design_23' ? 23 + 2 : 
        chosenDesign === 'design_24' ? 29 + 2 : 
        chosenDesign === 'design_25' ? 24 + 2 : 
        chosenDesign === 'design_26' ? 21 + 2 : 
        chosenDesign === 'design_27' ? 20 + 2 : 
        chosenDesign === 'design_28' ? 21 + 2 : 
        chosenDesign === 'design_29' ? 27 + 2 : 
        chosenDesign === 'design_30' ? 30 + 2 : 
        chosenDesign === 'design_31' ? 20 + 2 : 
        chosenDesign === 'design_32' ? 20 + 2 : 
        chosenDesign === 'design_33' ? 20 + 2 : 
        chosenDesign === 'design_34' ? 20 + 2 : 
        chosenDesign === 'design_35' ? 23 + 2 : 
        chosenDesign === 'design_36' ? 22 + 2 : 
        chosenDesign === 'design_37' ? 20 + 2 : 
        chosenDesign === 'design_38' ? 20 + 2 : 
        chosenDesign === 'design_39' ? 20 + 2 : 
        chosenDesign === 'design_40' ? 22 + 2 : 
        24, // prettier-ignore
    },
    {
      class: '',
      heading: 'Tie it Together',
      headingColor: '',
      description:
        '- Wrap up by stating how your experience and skills combine to contribute positively to the organization',
      descriptionColor: '#5e589c',
      top:
        chosenDesign === 'design_1' ? 37 + 2 : 
        chosenDesign === 'design_2' ? 40 + 2 : 
        chosenDesign === 'design_3' ? 34 + 2 : 
        chosenDesign === 'design_4' ? 31 + 2 : 
        chosenDesign === 'design_5' ? 41 + 2 : 
        chosenDesign === 'design_6' ? 36 + 2 : 
        chosenDesign === 'design_7' ? 39 + 2 : 
        chosenDesign === 'design_8' ? 33 + 2 : 
        chosenDesign === 'design_9' ? 36 + 2 : 
        chosenDesign === 'design_10' ? 36 + 2 : 
        chosenDesign === 'design_11' ? 38 + 2 : 
        chosenDesign === 'design_12' ? 37 + 2 : 
        chosenDesign === 'design_13' ? 33 + 2 : 
        chosenDesign === 'design_14' ? 39 + 2 : 
        chosenDesign === 'design_15' ? 36 + 2 : 
        chosenDesign === 'design_16' ? 40 + 2 : 
        chosenDesign === 'design_17' ? 35 + 2 : 
        chosenDesign === 'design_18' ? 39 + 2 : 
        chosenDesign === 'design_19' ? 39 + 2 : 
        chosenDesign === 'design_20' ? 35 + 2 : 
        chosenDesign === 'design_21' ? 29 + 2 : 
        chosenDesign === 'design_22' ? 31 + 2 : 
        chosenDesign === 'design_23' ? 30 + 2 : 
        chosenDesign === 'design_24' ? 36 + 2 : 
        chosenDesign === 'design_25' ? 31 + 2 : 
        chosenDesign === 'design_26' ? 28 + 2 : 
        chosenDesign === 'design_27' ? 27 + 2 : 
        chosenDesign === 'design_28' ? 29 + 2 : 
        chosenDesign === 'design_29' ? 36 + 2 : 
        chosenDesign === 'design_30' ? 39 + 2 : 
        chosenDesign === 'design_31' ? 26 + 2 : 
        chosenDesign === 'design_32' ? 28 + 2 : 
        chosenDesign === 'design_33' ? 28 + 2 : 
        chosenDesign === 'design_34' ? 27 + 2 : 
        chosenDesign === 'design_35' ? 30 + 2 : 
        chosenDesign === 'design_36' ? 28 + 2 : 
        chosenDesign === 'design_37' ? 26 + 2 : 
        chosenDesign === 'design_38' ? 26 + 2 : 
        chosenDesign === 'design_39' ? 26 + 2 : 
        chosenDesign === 'design_40' ? 28 + 2 : 
        37, // prettier-ignore
    },
  ];

  const careerChange3_ProTipsData = [
    {
      class: '',
      heading: 'Position & Track Record',
      headingColor: '',
      description:
        "- State your experience and positions held previously to show you're the best fit for the role.",
      descriptionColor: '#3626d0',
      top:
        chosenDesign === 'design_1' ? 7 + 2 : 
        chosenDesign === 'design_2' ? 9 + 2 : 
        chosenDesign === 'design_3' ? 4 + 2 : 
        chosenDesign === 'design_4' ? 6 + 2 : 
        chosenDesign === 'design_5' ? 16 + 2 : 
        chosenDesign === 'design_6' ? 11 + 2 : 
        chosenDesign === 'design_7' ? 14 + 2 : 
        chosenDesign === 'design_8' ? 2 + 2 : 
        chosenDesign === 'design_9' ? 10 + 2 : 
        chosenDesign === 'design_10' ? 10 + 2 : 
        chosenDesign === 'design_11' ? 8 + 2 : 
        chosenDesign === 'design_12' ? 10 + 2 : 
        chosenDesign === 'design_13' ? 8 + 2 : 
        chosenDesign === 'design_14' ? 15 + 2 : 
        chosenDesign === 'design_15' ? 7 + 2 : 
        chosenDesign === 'design_16' ? 15 + 2 : 
        chosenDesign === 'design_17' ? 11 + 2 : 
        chosenDesign === 'design_18' ? 8 + 2 : 
        chosenDesign === 'design_19' ? 15 + 2 : 
        chosenDesign === 'design_20' ? 11 + 2 : 
        chosenDesign === 'design_21' ? 4 + 2 : 
        chosenDesign === 'design_22' ? 6 + 2 : 
        chosenDesign === 'design_23' ? 6 + 2 : 
        chosenDesign === 'design_24' ? 12 + 2 : 
        chosenDesign === 'design_25' ? 7 + 2 : 
        chosenDesign === 'design_26' ? 3 + 2 : 
        chosenDesign === 'design_27' ? 2 + 2 : 
        chosenDesign === 'design_28' ? 3 + 2 : 
        chosenDesign === 'design_29' ? 5 + 2 : 
        chosenDesign === 'design_30' ? 9 + 2 : 
        chosenDesign === 'design_31' ? 3 + 2 : 
        chosenDesign === 'design_32' ? 3 + 2 : 
        chosenDesign === 'design_33' ? 3 + 2 : 
        chosenDesign === 'design_34' ? 3 + 2 : 
        chosenDesign === 'design_35' ? 6 + 2 : 
        chosenDesign === 'design_36' ? 3 + 2 : 
        chosenDesign === 'design_37' ? 3 + 2 : 
        chosenDesign === 'design_38' ? 3 + 2 : 
        chosenDesign === 'design_39' ? 3 + 2 : 
        chosenDesign === 'design_40' ? 5 + 2 : 
        7, // prettier-ignore
    },
    {
      class: '',
      heading: "What's Your Track Record",
      headingColor: '',
      description:
        '- Enumerate your valuable personal attributes \n State it that people can volunteer to talk about your work skills if the employer wants. ',
      descriptionColor: '#c95204',
      top:
        chosenDesign === 'design_1' ? 12 + 2 : 
        chosenDesign === 'design_2' ? 14 + 2 : 
        chosenDesign === 'design_3' ? 9 + 2 : 
        chosenDesign === 'design_4' ? 11 + 2 : 
        chosenDesign === 'design_5' ? 21 + 2 : 
        chosenDesign === 'design_6' ? 16 + 2 : 
        chosenDesign === 'design_7' ? 19 + 2 : 
        chosenDesign === 'design_8' ? 8 + 2 : 
        chosenDesign === 'design_9' ? 15 + 2 : 
        chosenDesign === 'design_10' ? 15 + 2 : 
        chosenDesign === 'design_11' ? 13 + 2 : 
        chosenDesign === 'design_12' ? 15 + 2 : 
        chosenDesign === 'design_13' ? 14 + 2 : 
        chosenDesign === 'design_14' ? 20 + 2 : 
        chosenDesign === 'design_15' ? 13 + 2 : 
        chosenDesign === 'design_16' ? 20 + 2 : 
        chosenDesign === 'design_17' ? 16 + 2 : 
        chosenDesign === 'design_18' ? 14 + 2 : 
        chosenDesign === 'design_19' ? 20 + 2 : 
        chosenDesign === 'design_20' ? 16 + 2 : 
        chosenDesign === 'design_21' ? 9 + 2 : 
        chosenDesign === 'design_22' ? 11 + 2 : 
        chosenDesign === 'design_23' ? 11 + 2 : 
        chosenDesign === 'design_24' ? 17 + 2 : 
        chosenDesign === 'design_25' ? 12 + 2 : 
        chosenDesign === 'design_26' ? 8 + 2 : 
        chosenDesign === 'design_27' ? 7 + 2 : 
        chosenDesign === 'design_28' ? 8 + 2 : 
        chosenDesign === 'design_29' ? 11 + 2 : 
        chosenDesign === 'design_30' ? 14 + 2 : 
        chosenDesign === 'design_31' ? 8 + 2 : 
        chosenDesign === 'design_32' ? 8 + 2 : 
        chosenDesign === 'design_33' ? 8 + 2 : 
        chosenDesign === 'design_34' ? 8 + 2 : 
        chosenDesign === 'design_35' ? 11 + 2 : 
        chosenDesign === 'design_36' ? 8 + 2 : 
        chosenDesign === 'design_37' ? 8 + 2 : 
        chosenDesign === 'design_38' ? 8 + 2 : 
        chosenDesign === 'design_39' ? 8 + 2 : 
        chosenDesign === 'design_40' ? 10 + 2 : 
        14, // prettier-ignore
    },
    {
      class: '',
      heading: 'Why The Transition',
      headingColor: '',
      description:
        '- What responsibilities have you held before? \n -Tie how and why you believe your abilities align with the key functions of the job role.',
      descriptionColor: '#1c7dfc',
      top:
        chosenDesign === 'design_1' ? 20 + 2 : 
        chosenDesign === 'design_2' ? 23 + 2 : 
        chosenDesign === 'design_3' ? 20 + 2 : 
        chosenDesign === 'design_4' ? 17 + 2 : 
        chosenDesign === 'design_5' ? 27 + 2 : 
        chosenDesign === 'design_6' ? 22 + 2 : 
        chosenDesign === 'design_7' ? 25 + 2 : 
        chosenDesign === 'design_8' ? 17 + 2 : 
        chosenDesign === 'design_9' ? 21 + 2 : 
        chosenDesign === 'design_10' ? 21 + 2 : 
        chosenDesign === 'design_11' ? 22 + 2 : 
        chosenDesign === 'design_12' ? 23 + 2 : 
        chosenDesign === 'design_13' ? 20 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_15' ? 21 + 2 : 
        chosenDesign === 'design_16' ? 27 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 23 + 2 : 
        chosenDesign === 'design_19' ? 26 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_22' ? 17 + 2 : 
        chosenDesign === 'design_23' ? 17 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 15 + 2 : 
        chosenDesign === 'design_27' ? 17 + 2 : 
        chosenDesign === 'design_28' ? 15 + 2 : 
        chosenDesign === 'design_29' ? 20 + 2 : 
        chosenDesign === 'design_30' ? 24 + 2 : 
        chosenDesign === 'design_31' ? 14 + 2 : 
        chosenDesign === 'design_32' ? 14 + 2 : 
        chosenDesign === 'design_33' ? 14 + 2 : 
        chosenDesign === 'design_34' ? 14 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 16 + 2 : 
        chosenDesign === 'design_37' ? 14 + 2 : 
        chosenDesign === 'design_38' ? 14 + 2 : 
        chosenDesign === 'design_39' ? 14 + 2 : 
        chosenDesign === 'design_40' ? 16 + 2 : 
        24, // prettier-ignore
    },
    {
      class: '',
      heading: 'How Your Skills Fit',
      headingColor: '',
      description:
        '- Mention 2-3 transferable skills related to the job requirements. \n - Briefly highlight how these skills position you as the best fit.',
      descriptionColor: '#5e589c',
      top:
        chosenDesign === 'design_1' ? 33 + 2 : 
        chosenDesign === 'design_2' ? 36 + 2 : 
        chosenDesign === 'design_3' ? 30 + 2 : 
        chosenDesign === 'design_4' ? 29 + 2 : 
        chosenDesign === 'design_5' ? 37 + 2 : 
        chosenDesign === 'design_6' ? 32 + 2 : 
        chosenDesign === 'design_7' ? 35 + 2 : 
        chosenDesign === 'design_8' ? 29 + 2 : 
        chosenDesign === 'design_9' ? 32 + 2 : 
        chosenDesign === 'design_10' ? 32 + 2 : 
        chosenDesign === 'design_11' ? 34 + 2 : 
        chosenDesign === 'design_12' ? 34 + 2 : 
        chosenDesign === 'design_13' ? 30 + 2 : 
        chosenDesign === 'design_14' ? 36 + 2 : 
        chosenDesign === 'design_15' ? 33 + 2 : 
        chosenDesign === 'design_16' ? 39 + 2 : 
        chosenDesign === 'design_17' ? 32 + 2 : 
        chosenDesign === 'design_18' ? 35 + 2 : 
        chosenDesign === 'design_19' ? 37 + 2 : 
        chosenDesign === 'design_20' ? 33 + 2 : 
        chosenDesign === 'design_21' ? 26 + 2 : 
        chosenDesign === 'design_22' ? 28 + 2 : 
        chosenDesign === 'design_23' ? 27 + 2 : 
        chosenDesign === 'design_24' ? 33 + 2 : 
        chosenDesign === 'design_25' ? 28 + 2 : 
        chosenDesign === 'design_26' ? 25 + 2 : 
        chosenDesign === 'design_27' ? 25 + 2 : 
        chosenDesign === 'design_28' ? 25 + 2 : 
        chosenDesign === 'design_29' ? 33 + 2 : 
        chosenDesign === 'design_30' ? 36 + 2 : 
        chosenDesign === 'design_31' ? 25 + 2 : 
        chosenDesign === 'design_32' ? 25 + 2 : 
        chosenDesign === 'design_33' ? 25 + 2 : 
        chosenDesign === 'design_34' ? 24 + 2 : 
        chosenDesign === 'design_35' ? 28 + 2 : 
        chosenDesign === 'design_36' ? 25 + 2 : 
        chosenDesign === 'design_37' ? 24 + 2 : 
        chosenDesign === 'design_38' ? 24 + 2 : 
        chosenDesign === 'design_39' ? 24 + 2 : 
        chosenDesign === 'design_40' ? 26 + 2 : 
        37, // prettier-ignore
    },
    {
      class: '',
      heading: 'State What Motivates You',
      headingColor: '',
      description:
        '- Tie this to your background, work approach and how these will help in the new role.',
      descriptionColor: '#3c6f35',
      top:
      chosenDesign === 'design_1' ? 43 + 2 : 
      chosenDesign === 'design_2' ? 45 + 2 : 
      chosenDesign === 'design_3' ? 39 + 2 : 
      chosenDesign === 'design_4' ? 36 + 2 : 
      chosenDesign === 'design_5' ? 45 + 2 : 
      chosenDesign === 'design_6' ? 41 + 2 : 
      chosenDesign === 'design_7' ? 44 + 2 : 
      chosenDesign === 'design_8' ? 39 + 2 : 
      chosenDesign === 'design_9' ? 41 + 2 : 
      chosenDesign === 'design_10' ? 41 + 2 : 
      chosenDesign === 'design_11' ? 44 + 2 : 
      chosenDesign === 'design_12' ? 43 + 2 : 
      chosenDesign === 'design_13' ? 38 + 2 : 
      chosenDesign === 'design_14' ? 44 + 2 : 
      chosenDesign === 'design_15' ? 43 + 2 : 
      chosenDesign === 'design_16' ? 46 + 2 : 
      chosenDesign === 'design_17' ? 40 + 2 : 
      chosenDesign === 'design_18' ? 45 + 2 : 
      chosenDesign === 'design_19' ? 45 + 2 : 
      chosenDesign === 'design_20' ? 40 + 2 : 
      chosenDesign === 'design_21' ? 34 + 2 : 
      chosenDesign === 'design_22' ? 36 + 2 : 
      chosenDesign === 'design_23' ? 35 + 2 : 
      chosenDesign === 'design_24' ? 41 + 2 : 
      chosenDesign === 'design_25' ? 36 + 2 : 
      chosenDesign === 'design_26' ? 33 + 2 : 
      chosenDesign === 'design_27' ? 31 + 2 : 
      chosenDesign === 'design_28' ? 33 + 2 : 
      chosenDesign === 'design_29' ? 42 + 2 : 
      chosenDesign === 'design_30' ? 46 + 2 : 
      chosenDesign === 'design_31' ? 32 + 2 : 
      chosenDesign === 'design_32' ? 32 + 2 : 
      chosenDesign === 'design_33' ? 32 + 2 : 
      chosenDesign === 'design_34' ? 31 + 2 : 
      chosenDesign === 'design_35' ? 35 + 2 : 
      chosenDesign === 'design_36' ? 33 + 2 : 
      chosenDesign === 'design_37' ? 32 + 2 : 
      chosenDesign === 'design_38' ? 32 + 2 : 
      chosenDesign === 'design_39' ? 32 + 2 : 
      chosenDesign === 'design_40' ? 34 + 2 : 
      43, // prettier-ignore
    },
  ];

  const triple_part_strategy_ProTipsData = [
    {
      class: '',
      heading: 'Who are you?',
      headingColor: '',
      description: 'Only one sentence. Say who you are as a professional.',
      descriptionColor: '#3626d0',
      top:
        chosenDesign === 'design_1' ? 4 + 2 : 
        chosenDesign === 'design_2' ? 6 + 2 : 
        chosenDesign === 'design_3' ? 1 + 2 : 
        chosenDesign === 'design_4' ? 3 + 2 : 
        chosenDesign === 'design_5' ? 13 + 2 : 
        chosenDesign === 'design_6' ? 8 + 2 : 
        chosenDesign === 'design_7' ? 6 + 2 : 
        chosenDesign === 'design_8' ? 0 + 2 : 
        chosenDesign === 'design_9' ? 7 + 2 : 
        chosenDesign === 'design_10' ? 7 + 2 : 
        chosenDesign === 'design_11' ? 5 + 2 : 
        chosenDesign === 'design_12' ? 7 + 2 : 
        chosenDesign === 'design_13' ? 6 + 2 : 
        chosenDesign === 'design_14' ? 12 + 2 : 
        chosenDesign === 'design_15' ? 4 + 2 : 
        chosenDesign === 'design_16' ? 12 + 2 : 
        chosenDesign === 'design_17' ? 8 + 2 : 
        chosenDesign === 'design_18' ? 5 + 2 : 
        chosenDesign === 'design_19' ? 13 + 2 : 
        chosenDesign === 'design_20' ? 8 + 2 : 
        chosenDesign === 'design_21' ? 2 + 2 : 
        chosenDesign === 'design_22' ? 2 + 2 : 
        chosenDesign === 'design_23' ? 2 + 2 : 
        chosenDesign === 'design_24' ? 9 + 2 : 
        chosenDesign === 'design_25' ? 5 + 2 : 
        chosenDesign === 'design_26' ? 1 + 2 : 
        chosenDesign === 'design_27' ? 0 + 2 : 
        chosenDesign === 'design_28' ? 0 + 2 : 
        chosenDesign === 'design_29' ? 3 + 2 : 
        chosenDesign === 'design_30' ? 7 + 2 : 
        chosenDesign === 'design_31' ? 0 + 2 : 
        chosenDesign === 'design_32' ? 0 + 2 : 
        chosenDesign === 'design_33' ? 0 + 2 : 
        chosenDesign === 'design_34' ? 0 + 2 : 
        chosenDesign === 'design_35' ? 3 + 2 : 
        chosenDesign === 'design_36' ? 0 + 2 : 
        chosenDesign === 'design_37' ? 0 + 2 : 
        chosenDesign === 'design_38' ? 0 + 2 : 
        chosenDesign === 'design_39' ? 0 + 2 : 
        chosenDesign === 'design_40' ? 1 + 2 : 
        6, // prettier-ignore
    },
    {
      class: '',
      heading: 'How do you best fit the role?',
      headingColor: '',
      description:
        '• Re-read the job description. \n • Locate the major themes and biggest problems that the hired candidate will need to solve. \n • Tell why you uniquely fit to solve it [Use a story or an explanation]. \n The point: \n A story ensures you do not simply repeat the experience listed on your resume. ',
      descriptionColor: '#c95204',
      top:
        chosenDesign === 'design_1' ? 8 + 2 : 
        chosenDesign === 'design_2' ? 10 + 2 : 
        chosenDesign === 'design_3' ? 5 + 2 : 
        chosenDesign === 'design_4' ? 7 + 2 : 
        chosenDesign === 'design_5' ? 17 + 2 : 
        chosenDesign === 'design_6' ? 12 + 2 : 
        chosenDesign === 'design_7' ? 10 + 2 : 
        chosenDesign === 'design_8' ? 4 + 2 : 
        chosenDesign === 'design_9' ? 11 + 2 : 
        chosenDesign === 'design_10' ? 11 + 2 : 
        chosenDesign === 'design_11' ? 9 + 2 : 
        chosenDesign === 'design_12' ? 11 + 2 : 
        chosenDesign === 'design_13' ? 10 + 2 : 
        chosenDesign === 'design_14' ? 16 + 2 : 
        chosenDesign === 'design_15' ? 8 + 2 : 
        chosenDesign === 'design_16' ? 16 + 2 : 
        chosenDesign === 'design_17' ? 12 + 2 : 
        chosenDesign === 'design_18' ? 10 + 2 : 
        chosenDesign === 'design_19' ? 17 + 2 : 
        chosenDesign === 'design_20' ? 12 + 2 : 
        chosenDesign === 'design_21' ? 6 + 2 : 
        chosenDesign === 'design_22' ? 6 + 2 : 
        chosenDesign === 'design_23' ? 6 + 2 : 
        chosenDesign === 'design_24' ? 13 + 2 : 
        chosenDesign === 'design_25' ? 9 + 2 : 
        chosenDesign === 'design_26' ? 5 + 2 : 
        chosenDesign === 'design_27' ? 4 + 2 : 
        chosenDesign === 'design_28' ? 4 + 2 : 
        chosenDesign === 'design_29' ? 7 + 2 : 
        chosenDesign === 'design_30' ? 11 + 2 : 
        chosenDesign === 'design_31' ? 4 + 2 : 
        chosenDesign === 'design_32' ? 4 + 2 : 
        chosenDesign === 'design_33' ? 4 + 2 : 
        chosenDesign === 'design_34' ? 4 + 2 : 
        chosenDesign === 'design_35' ? 7 + 2 : 
        chosenDesign === 'design_36' ? 4 + 2 : 
        chosenDesign === 'design_37' ? 4 + 2 : 
        chosenDesign === 'design_38' ? 4 + 2 : 
        chosenDesign === 'design_39' ? 4 + 2 : 
        chosenDesign === 'design_40' ? 5 + 2 : 
        9, // prettier-ignore
    },
    {
      class: '',
      heading: 'Why this organization?',
      headingColor: '',
      description:
        "Explain why you're interested in this specific company. This could be as short as one sentence.",
      descriptionColor: '#1c7dfc',
      top:
        chosenDesign === 'design_1'? 18 + 2 : 
        chosenDesign === 'design_2' ? 20 + 2 : 
        chosenDesign === 'design_3' ? 15 + 2 : 
        chosenDesign === 'design_4' ? 17 + 2 : 
        chosenDesign === 'design_5' ? 27 + 2 : 
        chosenDesign === 'design_6' ? 22 + 2 : 
        chosenDesign === 'design_7' ? 20 + 2 : 
        chosenDesign === 'design_8' ? 14 + 2 : 
        chosenDesign === 'design_9' ? 21 + 2 : 
        chosenDesign === 'design_10' ? 21 + 2 : 
        chosenDesign === 'design_11' ? 19 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 20 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_15' ? 19 + 2 : 
        chosenDesign === 'design_16' ? 26 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 21 + 2 : 
        chosenDesign === 'design_19' ? 27 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 16 + 2 : 
        chosenDesign === 'design_22' ? 16 + 2 : 
        chosenDesign === 'design_23' ? 16 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 19 + 2 : 
        chosenDesign === 'design_26' ? 15 + 2 : 
        chosenDesign === 'design_27' ? 14 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 17 + 2 : 
        chosenDesign === 'design_30' ? 21 + 2 : 
        chosenDesign === 'design_31' ? 14 + 2 : 
        chosenDesign === 'design_32' ? 14 + 2 : 
        chosenDesign === 'design_33' ? 14 + 2 : 
        chosenDesign === 'design_34' ? 14 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 14 + 2 : 
        chosenDesign === 'design_37' ? 14 + 2 : 
        chosenDesign === 'design_38' ? 14 + 2 : 
        chosenDesign === 'design_39' ? 14 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        17, // prettier-ignore
    },
  ];

  const propose_changes_ProTipsData = [
    {
      class: '',
      heading: 'Pain Points',
      headingColor: '',
      description:
        "Use the opening line to state the pain points you solve - ensure they are applicable to the job you're applying to.",
      descriptionColor: '#3626d0',
      top:
        chosenDesign === 'design_1' ? 3 + 2 : 
        chosenDesign === 'design_2' ? 5 + 2 : 
        chosenDesign === 'design_3' ? 1 + 2 : 
        chosenDesign === 'design_4' ? 4 + 2 : 
        chosenDesign === 'design_5' ? 13 + 2 : 
        chosenDesign === 'design_6' ? 7 + 2 : 
        chosenDesign === 'design_7' ? 7 + 2 : 
        chosenDesign === 'design_8' ? 0 + 2 : 
        chosenDesign === 'design_9' ? 7 + 2 : 
        chosenDesign === 'design_10' ? 7 + 2 : 
        chosenDesign === 'design_11' ? 4 + 2 : 
        chosenDesign === 'design_12' ? 7 + 2 : 
        chosenDesign === 'design_13' ? 6 + 2 : 
        chosenDesign === 'design_14' ? 13 + 2 : 
        chosenDesign === 'design_15' ? 4 + 2 : 
        chosenDesign === 'design_16' ? 12 + 2 : 
        chosenDesign === 'design_17' ? 8 + 2 : 
        chosenDesign === 'design_18' ? 6 + 2 : 
        chosenDesign === 'design_19' ? 13 + 2 : 
        chosenDesign === 'design_20' ? 8 + 2 : 
        chosenDesign === 'design_21' ? 2 + 2 : 
        chosenDesign === 'design_22' ? 2 + 2 : 
        chosenDesign === 'design_23' ? 2 + 2 : 
        chosenDesign === 'design_24' ? 10 + 2 : 
        chosenDesign === 'design_25' ? 5 + 2 : 
        chosenDesign === 'design_26' ? 1 + 2 : 
        chosenDesign === 'design_27' ? 0 + 2 : 
        chosenDesign === 'design_28' ? 1 + 2 : 
        chosenDesign === 'design_29' ? 3 + 2 : 
        chosenDesign === 'design_30' ? 5 + 2 : 
        chosenDesign === 'design_31' ? 0 + 2 : 
        chosenDesign === 'design_32' ? 0 + 2 : 
        chosenDesign === 'design_33' ? 0 + 2 : 
        chosenDesign === 'design_34' ? 0 + 2 : 
        chosenDesign === 'design_35' ? 4 + 2 : 
        chosenDesign === 'design_36' ? 0 + 2 : 
        chosenDesign === 'design_37' ? 0 + 2 : 
        chosenDesign === 'design_38' ? 0 + 2 : 
        chosenDesign === 'design_39' ? 0 + 2 : 
        chosenDesign === 'design_40' ? 2 + 2 : 
        7, // prettier-ignore
    },
    {
      class: '',
      heading: 'Why Here?',
      headingColor: '',
      description: 'Highlight why you want to join the organization.',
      descriptionColor: '#c95204',
      height: 100,
      top:
        chosenDesign === 'design_1' ? 9 + 2 : 
        chosenDesign === 'design_2' ? 11 + 2 : 
        chosenDesign === 'design_3' ? 7 + 2 : 
        chosenDesign === 'design_4' ? 10 + 2 : 
        chosenDesign === 'design_5' ? 19 + 2 : 
        chosenDesign === 'design_6' ? 13 + 2 : 
        chosenDesign === 'design_7' ? 13 + 2 : 
        chosenDesign === 'design_8' ? 6 + 2 : 
        chosenDesign === 'design_9' ? 13 + 2 : 
        chosenDesign === 'design_10' ? 13 + 2 : 
        chosenDesign === 'design_11' ? 10 + 2 : 
        chosenDesign === 'design_12' ? 13 + 2 : 
        chosenDesign === 'design_13' ? 12 + 2 : 
        chosenDesign === 'design_14' ? 19 + 2 : 
        chosenDesign === 'design_15' ? 10 + 2 : 
        chosenDesign === 'design_16' ? 18 + 2 : 
        chosenDesign === 'design_17' ? 14 + 2 : 
        chosenDesign === 'design_18' ? 12 + 2 : 
        chosenDesign === 'design_19' ? 19 + 2 : 
        chosenDesign === 'design_20' ? 14 + 2 : 
        chosenDesign === 'design_21' ? 8 + 2 : 
        chosenDesign === 'design_22' ? 8 + 2 : 
        chosenDesign === 'design_23' ? 8 + 2 : 
        chosenDesign === 'design_24' ? 16 + 2 : 
        chosenDesign === 'design_25' ? 11 + 2 : 
        chosenDesign === 'design_26' ? 7 + 2 : 
        chosenDesign === 'design_27' ? 6 + 2 : 
        chosenDesign === 'design_28' ? 7 + 2 : 
        chosenDesign === 'design_29' ? 9 + 2 : 
        chosenDesign === 'design_30' ? 11 + 2 : 
        chosenDesign === 'design_31' ? 6 + 2 : 
        chosenDesign === 'design_32' ? 6 + 2 : 
        chosenDesign === 'design_33' ? 6 + 2 : 
        chosenDesign === 'design_34' ? 6 + 2 : 
        chosenDesign === 'design_35' ? 10 + 2 : 
        chosenDesign === 'design_36' ? 6 + 2 : 
        chosenDesign === 'design_37' ? 6 + 2 : 
        chosenDesign === 'design_38' ? 6 + 2 : 
        chosenDesign === 'design_39' ? 6 + 2 : 
        chosenDesign === 'design_40' ? 8 + 2 : 
        12, // prettier-ignore
    },
    {
      class: '',
      heading: 'Value Proposition',
      headingColor: '',
      description: 'Add value to your application.',
      descriptionColor: '#1c7dfc',
      height: 150,
      top:
        chosenDesign === 'design_1' ? 16 + 2 : 
        chosenDesign === 'design_2' ? 18 + 2 : 
        chosenDesign === 'design_3' ? 14 + 2 : 
        chosenDesign === 'design_4' ? 17 + 2 : 
        chosenDesign === 'design_5' ? 26 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 20 + 2 : 
        chosenDesign === 'design_8' ? 13 + 2 : 
        chosenDesign === 'design_9' ? 20 + 2 : 
        chosenDesign === 'design_10' ? 20 + 2 : 
        chosenDesign === 'design_11' ? 17 + 2 : 
        chosenDesign === 'design_12' ? 20 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_15' ? 17 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 21 + 2 : 
        chosenDesign === 'design_18' ? 19 + 2 : 
        chosenDesign === 'design_19' ? 26 + 2 : 
        chosenDesign === 'design_20' ? 21 + 2 : 
        chosenDesign === 'design_21' ? 15 + 2 : 
        chosenDesign === 'design_22' ? 15 + 2 : 
        chosenDesign === 'design_23' ? 15 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 14 + 2 : 
        chosenDesign === 'design_27' ? 13 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 16 + 2 : 
        chosenDesign === 'design_30' ? 18 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 13 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        19, // prettier-ignore
    },
    {
      class: '',
      heading: 'Reference Mutual Connections ',
      headingColor: '',
      description:
        'Reference any mutual connections or common ground you share with the person (as an example, see the final line of the letter body below).',
      descriptionColor: '#5e589c',
      top:
        chosenDesign === 'design_1' ? 38 + 2 : 
        chosenDesign === 'design_2' ? 40 + 2 : 
        chosenDesign === 'design_3' ? 36 + 2 : 
        chosenDesign === 'design_4' ? 37 + 2 : 
        chosenDesign === 'design_5' ? 47 + 2 : 
        chosenDesign === 'design_6' ? 42 + 2 : 
        chosenDesign === 'design_7' ? 42 + 2 : 
        chosenDesign === 'design_8' ? 34 + 2 : 
        chosenDesign === 'design_9' ? 42 + 2 : 
        chosenDesign === 'design_10' ? 42 + 2 : 
        chosenDesign === 'design_11' ? 38 + 2 : 
        chosenDesign === 'design_12' ? 41 + 2 : 
        chosenDesign === 'design_13' ? 40 + 2 : 
        chosenDesign === 'design_14' ? 47 + 2 : 
        chosenDesign === 'design_15' ? 38 + 2 : 
        chosenDesign === 'design_16' ? 46 + 2 : 
        chosenDesign === 'design_17' ? 42 + 2 : 
        chosenDesign === 'design_18' ? 40 + 2 : 
        chosenDesign === 'design_19' ? 47 + 2 : 
        chosenDesign === 'design_20' ? 42 + 2 : 
        chosenDesign === 'design_21' ? 36 + 2 : 
        chosenDesign === 'design_22' ? 36 + 2 : 
        chosenDesign === 'design_23' ? 36 + 2 : 
        chosenDesign === 'design_24' ? 44 + 2 : 
        chosenDesign === 'design_25' ? 39 + 2 : 
        chosenDesign === 'design_26' ? 35 + 2 : 
        chosenDesign === 'design_27' ? 34 + 2 : 
        chosenDesign === 'design_28' ? 35 + 2 : 
        chosenDesign === 'design_29' ? 37 + 2 : 
        chosenDesign === 'design_30' ? 39 + 2 : 
        chosenDesign === 'design_31' ? 34 + 2 : 
        chosenDesign === 'design_32' ? 34 + 2 : 
        chosenDesign === 'design_33' ? 34 + 2 : 
        chosenDesign === 'design_34' ? 34 + 2 : 
        chosenDesign === 'design_35' ? 38 + 2 : 
        chosenDesign === 'design_36' ? 34 + 2 : 
        chosenDesign === 'design_37' ? 34 + 2 : 
        chosenDesign === 'design_38' ? 34 + 2 : 
        chosenDesign === 'design_39' ? 34 + 2 : 
        chosenDesign === 'design_40' ? 36 + 2 : 
        26, // prettier-ignore
    },
  ];

  const what_you_can_offer_ProTipsData = [
    {
      class: '',
      heading: 'The Recipient:',
      headingColor: '',
      description:
        'State the role you are applying for. helps in keyword spread & the ATS.',
      descriptionColor: '#3626d0',
      baseHeadingValue:
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 13 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 24 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 20 + 2 : 
        chosenDesign === 'design_10' ? 21 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 18 + 2 : 
        chosenDesign === 'design_19' ? 26 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 16 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 14 + 2 : 
        chosenDesign === 'design_27' ? 14 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 16 + 2 : 
        chosenDesign === 'design_30' ? 20 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 14 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      left: true,
      top:
      chosenDesign === 'design_4' ? -7 + 2 : 
      chosenDesign === 'design_5' ? -6 + 2 : 
      chosenDesign === 'design_6' ? -6 + 2 : 
      -8, // prettier-ignore
    },
    {
      class: '',
      heading: 'Heading:',
      headingColor: '',
      description:
        'State the role you are applying for. helps in keyword spread & the ATS.',
      descriptionColor: '#c95204',
      baseHeadingValue:
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 13 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 24 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 20 + 2 : 
        chosenDesign === 'design_10' ? 21 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 18 + 2 : 
        chosenDesign === 'design_19' ? 26 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 16 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 14 + 2 : 
        chosenDesign === 'design_27' ? 14 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 16 + 2 : 
        chosenDesign === 'design_30' ? 20 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 14 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      height: 30,
      left: true,
      top:
      chosenDesign === 'design_4' ? 1 + 2 : 
      chosenDesign === 'design_5' ? 2 + 2 : 
      chosenDesign === 'design_6' ? 2 + 2 : 
      1, // prettier-ignore
    },
    {
      class: '',
      heading: 'Body:',
      headingColor: '',
      description: "Now you get to prove you're the perfect candidate.",
      descriptionColor: '#1c7dfc',
      baseHeadingValue:
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 13 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 24 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 20 + 2 : 
        chosenDesign === 'design_10' ? 21 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 18 + 2 : 
        chosenDesign === 'design_19' ? 26 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 16 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 14 + 2 : 
        chosenDesign === 'design_27' ? 14 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 16 + 2 : 
        chosenDesign === 'design_30' ? 20 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 14 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      left: true,
      top:
      chosenDesign === 'design_4' ? 7 + 2 : 
      chosenDesign === 'design_17' ? 6 + 2 : 
      chosenDesign === 'design_19' ? 6 + 2 : 
      chosenDesign === 'design_20' ? 6 + 2 : 
      chosenDesign === 'design_21' ? 6 + 2 : 
      chosenDesign === 'design_22' ? 6 + 2 : 
      chosenDesign === 'design_23' ? 6 + 2 : 
      chosenDesign === 'design_24' ? 6 + 2 : 
      chosenDesign === 'design_25' ? 6 + 2 : 
      chosenDesign === 'design_26' ? 6 + 2 : 
      chosenDesign === 'design_27' ? 6 + 2 : 
      chosenDesign === 'design_28' ? 6 + 2 : 
      chosenDesign === 'design_30' ? 6 + 2 : 
      chosenDesign === 'design_31' ? 6 + 2 : 
      chosenDesign === 'design_32' ? 6 + 2 : 
      chosenDesign === 'design_33' ? 6 + 2 : 
      chosenDesign === 'design_34' ? 6 + 2 : 
      chosenDesign === 'design_35' ? 6 + 2 : 
      chosenDesign === 'design_36' ? 6 + 2 : 
      chosenDesign === 'design_37' ? 6 + 2 : 
      chosenDesign === 'design_38' ? 6 + 2 : 
      chosenDesign === 'design_39' ? 6 + 2 : 
      chosenDesign === 'design_40' ? 6 + 2 : 
      7, // prettier-ignore
    },
    {
      class: '',
      heading: 'Closing:',
      headingColor: '',
      description: 'Offer a complimentary close. Sign, followed by your name.',
      descriptionColor: '#5e589c',
      baseHeadingValue:
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 13 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 24 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 20 + 2 : 
        chosenDesign === 'design_10' ? 21 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 18 + 2 : 
        chosenDesign === 'design_19' ? 26 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 16 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 14 + 2 : 
        chosenDesign === 'design_27' ? 14 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 16 + 2 : 
        chosenDesign === 'design_30' ? 20 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 14 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      left: true,
      top:
      chosenDesign === 'design_4' ? 14 + 2 : 
      chosenDesign === 'design_7' ? 13 + 2 : 
      chosenDesign === 'design_10' ? 13 + 2 : 
      chosenDesign === 'design_12' ? 13 + 2 : 
      chosenDesign === 'design_13' ? 13 + 2 : 
      chosenDesign === 'design_14' ? 12 + 2 : 
      chosenDesign === 'design_16' ? 13 + 2 : 
      chosenDesign === 'design_17' ? 12 + 2 : 
      chosenDesign === 'design_19' ? 12 + 2 : 
      chosenDesign === 'design_20' ? 12 + 2 : 
      chosenDesign === 'design_21' ? 12 + 2 : 
      chosenDesign === 'design_22' ? 12 + 2 : 
      chosenDesign === 'design_23' ? 12 + 2 : 
      chosenDesign === 'design_24' ? 12 + 2 : 
      chosenDesign === 'design_25' ? 12 + 2 : 
      chosenDesign === 'design_26' ? 12 + 2 : 
      chosenDesign === 'design_27' ? 12 + 2 : 
      chosenDesign === 'design_28' ? 12 + 2 : 
      chosenDesign === 'design_30' ? 14 + 2 : 
      chosenDesign === 'design_31' ? 14 + 2 : 
      chosenDesign === 'design_32' ? 14 + 2 : 
      chosenDesign === 'design_33' ? 14 + 2 : 
      chosenDesign === 'design_34' ? 14 + 2 : 
      chosenDesign === 'design_35' ? 12 + 2 : 
      chosenDesign === 'design_36' ? 14 + 2 : 
      chosenDesign === 'design_37' ? 14 + 2 : 
      chosenDesign === 'design_38' ? 14 + 2 : 
      chosenDesign === 'design_39' ? 14 + 2 : 
      chosenDesign === 'design_40' ? 14 + 2 : 
      15, // prettier-ignore
    },
    {
      class: '',
      heading: 'Salutation or Greeting:',
      headingColor: '',
      description: 'Greet the person you are writing to',
      descriptionColor: '#3626d0',
      baseHeadingValue:
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 13 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 24 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 20 + 2 : 
        chosenDesign === 'design_10' ? 21 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 18 + 2 : 
        chosenDesign === 'design_19' ? 26 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 16 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 14 + 2 : 
        chosenDesign === 'design_27' ? 14 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 16 + 2 : 
        chosenDesign === 'design_30' ? 20 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 14 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      height: 30,
      top: 
        chosenDesign === 'design_4' ? -1 + 2 : 
        chosenDesign === 'design_7' ? -2 + 2 : 
        chosenDesign === 'design_9' ? -1 + 2 : 
        chosenDesign === 'design_10' ? -1 + 2 : 
        -2, // prettier-ignore
    },
    {
      class: '',
      heading: 'Intro:',
      headingColor: '',
      description:
        'One or two sentences to introduce and set yourself apart from other job seekers',
      descriptionColor: '#c95204',
      baseHeadingValue:
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 13 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 24 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 20 + 2 : 
        chosenDesign === 'design_10' ? 21 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 18 + 2 : 
        chosenDesign === 'design_19' ? 26 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 16 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 14 + 2 : 
        chosenDesign === 'design_27' ? 14 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 16 + 2 : 
        chosenDesign === 'design_30' ? 20 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 14 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      height: 30,
      top:
      chosenDesign === 'design_4' ? 4 + 2 : 
      chosenDesign === 'design_17' ? 3 + 2 : 
      chosenDesign === 'design_19' ? 3 + 2 : 
      chosenDesign === 'design_20' ? 3 + 2 : 
      chosenDesign === 'design_21' ? 3 + 2 : 
      chosenDesign === 'design_22' ? 3 + 2 : 
      chosenDesign === 'design_23' ? 3 + 2 : 
      chosenDesign === 'design_24' ? 3 + 2 : 
      chosenDesign === 'design_25' ? 3 + 2 : 
      chosenDesign === 'design_26' ? 3 + 2 : 
      chosenDesign === 'design_27' ? 3 + 2 : 
      chosenDesign === 'design_28' ? 3 + 2 : 
      chosenDesign === 'design_30' ? 3 + 2 : 
      chosenDesign === 'design_31' ? 3 + 2 : 
      chosenDesign === 'design_32' ? 3 + 2 : 
      chosenDesign === 'design_33' ? 3 + 2 : 
      chosenDesign === 'design_34' ? 3 + 2 : 
      chosenDesign === 'design_35' ? 3 + 2 : 
      chosenDesign === 'design_36' ? 3 + 2 : 
      chosenDesign === 'design_37' ? 3 + 2 : 
      chosenDesign === 'design_38' ? 3 + 2 : 
      chosenDesign === 'design_39' ? 3 + 2 : 
      chosenDesign === 'design_40' ? 3 + 2 : 
      4, // prettier-ignore
    },
    {
      class: '',
      heading: 'Call to Action:',
      headingColor: '',
      description: 'Move your reader to action.',
      descriptionColor: '#1c7dfc',
      baseHeadingValue:
        chosenDesign === 'design_2' ? 19 + 2 : 
        chosenDesign === 'design_3' ? 13 + 2 : 
        chosenDesign === 'design_5' ? 25 + 2 : 
        chosenDesign === 'design_6' ? 20 + 2 : 
        chosenDesign === 'design_7' ? 24 + 2 : 
        chosenDesign === 'design_8' ? 12 + 2 : 
        chosenDesign === 'design_9' ? 20 + 2 : 
        chosenDesign === 'design_10' ? 21 + 2 : 
        chosenDesign === 'design_12' ? 21 + 2 : 
        chosenDesign === 'design_13' ? 19 + 2 : 
        chosenDesign === 'design_14' ? 26 + 2 : 
        chosenDesign === 'design_16' ? 25 + 2 : 
        chosenDesign === 'design_17' ? 22 + 2 : 
        chosenDesign === 'design_18' ? 18 + 2 : 
        chosenDesign === 'design_19' ? 26 + 2 : 
        chosenDesign === 'design_20' ? 22 + 2 : 
        chosenDesign === 'design_21' ? 16 + 2 : 
        chosenDesign === 'design_24' ? 23 + 2 : 
        chosenDesign === 'design_25' ? 18 + 2 : 
        chosenDesign === 'design_26' ? 14 + 2 : 
        chosenDesign === 'design_27' ? 14 + 2 : 
        chosenDesign === 'design_28' ? 14 + 2 : 
        chosenDesign === 'design_29' ? 16 + 2 : 
        chosenDesign === 'design_30' ? 20 + 2 : 
        chosenDesign === 'design_31' ? 13 + 2 : 
        chosenDesign === 'design_32' ? 13 + 2 : 
        chosenDesign === 'design_33' ? 13 + 2 : 
        chosenDesign === 'design_34' ? 13 + 2 : 
        chosenDesign === 'design_35' ? 17 + 2 : 
        chosenDesign === 'design_36' ? 14 + 2 : 
        chosenDesign === 'design_37' ? 13 + 2 : 
        chosenDesign === 'design_38' ? 13 + 2 : 
        chosenDesign === 'design_39' ? 13 + 2 : 
        chosenDesign === 'design_40' ? 15 + 2 : 
        null, // prettier-ignore
      height: 30,
      top:
      chosenDesign === 'design_4' ? 11 + 2 : 
      chosenDesign === 'design_7' ? 9 + 2 : 
      chosenDesign === 'design_10' ? 10 + 2 : 
      chosenDesign === 'design_12' ? 11 + 2 : 
      chosenDesign === 'design_13' ? 11 + 2 : 
      chosenDesign === 'design_14' ? 10 + 2 : 
      chosenDesign === 'design_16' ? 11 + 2 : 
      chosenDesign === 'design_17' ? 10 + 2 : 
      chosenDesign === 'design_19' ? 10 + 2 : 
      chosenDesign === 'design_20' ? 10 + 2 : 
      chosenDesign === 'design_21' ? 10 + 2 : 
      chosenDesign === 'design_22' ? 10 + 2 : 
      chosenDesign === 'design_23' ? 10 + 2 : 
      chosenDesign === 'design_24' ? 10 + 2 : 
      chosenDesign === 'design_25' ? 10 + 2 : 
      chosenDesign === 'design_26' ? 10 + 2 : 
      chosenDesign === 'design_27' ? 10 + 2 : 
      chosenDesign === 'design_28' ? 10 + 2 : 
      chosenDesign === 'design_30' ? 11 + 2 : 
      chosenDesign === 'design_31' ? 11 + 2 : 
      chosenDesign === 'design_32' ? 11 + 2 : 
      chosenDesign === 'design_33' ? 11 + 2 : 
      chosenDesign === 'design_34' ? 11 + 2 : 
      chosenDesign === 'design_35' ? 10 + 2 : 
      chosenDesign === 'design_36' ? 11 + 2 : 
      chosenDesign === 'design_37' ? 11 + 2 : 
      chosenDesign === 'design_38' ? 11 + 2 : 
      chosenDesign === 'design_39' ? 11 + 2 : 
      chosenDesign === 'design_40' ? 11 + 2 : 
      12, // prettier-ignore
    },
  ];

  const harp_on_previous_results_ProTipsData = [
    {
      class: '',
      heading: 'The Recipient:',
      headingColor: '',
      description:
        "Use the receiver's name and mailing. While not required, doing so can enhance a formal cover letter.",
      descriptionColor: '#3626d0',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 22 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 20 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 21 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 25 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 21 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 17 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 13 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      left: true,
      top: 
          chosenDesign === 'design_4' ? -6 + 2 : 
          -6, // prettier-ignore
    },
    {
      class: '',
      heading: 'Salutation & Heading',
      headingColor: '',
      description:
        'Address to a specific person when possible. Where impossible, use [Dept] or [Company] Team. Give a heading to the letter.',
      descriptionColor: '#c95204',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 22 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 20 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 21 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 25 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 21 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 17 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 13 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
      null, // prettier-ignore
      left: true,
      top: 
          chosenDesign === 'design_4' ? 1 + 2 : 
          1, // prettier-ignore
    },
    {
      class: '',
      heading: 'Closing:',
      headingColor: '',
      description: 'Offer a complimentary close. Sign, followed by your name.',
      descriptionColor: '#1c7dfc',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 22 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 20 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 21 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 25 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 21 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 17 + 2 : 
          chosenDesign === 'design_36' ? 15 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 13 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      left: true,
      top: 
          chosenDesign === 'design_4' ? 26 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 24 + 2 : 
          chosenDesign === 'design_7' ? 25 + 2 : 
          chosenDesign === 'design_9' ? 27 + 2 : 
          chosenDesign === 'design_10' ? 27 + 2 : 
          chosenDesign === 'design_12' ? 27 + 2 : 
          chosenDesign === 'design_13' ? 25 + 2 : 
          chosenDesign === 'design_14' ? 25 + 2 : 
          chosenDesign === 'design_16' ? 27 + 2 : 
          chosenDesign === 'design_17' ? 25 + 2 : 
          chosenDesign === 'design_19' ? 25 + 2 : 
          chosenDesign === 'design_20' ? 27 + 2 : 
          chosenDesign === 'design_21' ? 25 + 2 : 
          chosenDesign === 'design_22' ? 25 + 2 : 
          chosenDesign === 'design_23' ? 25 + 2 : 
          chosenDesign === 'design_24' ? 25 + 2 : 
          chosenDesign === 'design_25' ? 25 + 2 : 
          chosenDesign === 'design_26' ? 25 + 2 : 
          chosenDesign === 'design_27' ? 25 + 2 : 
          chosenDesign === 'design_28' ? 25 + 2 : 
          chosenDesign === 'design_31' ? 24 + 2 : 
          chosenDesign === 'design_32' ? 24 + 2 : 
          chosenDesign === 'design_33' ? 24 + 2 : 
          chosenDesign === 'design_34' ? 24 + 2 : 
          chosenDesign === 'design_35' ? 24 + 2 : 
          chosenDesign === 'design_36' ? 24 + 2 : 
          chosenDesign === 'design_37' ? 24 + 2 : 
          chosenDesign === 'design_38' ? 24 + 2 : 
          chosenDesign === 'design_39' ? 24 + 2 : 
          chosenDesign === 'design_40' ? 25 + 2 : 
          30, // prettier-ignore
    },
    {
      class: '',
      heading: 'Intro:',
      headingColor: '',
      description:
        'One or two sentences to introduce and set yourself apart from other job seekers',
      descriptionColor: '#3c6f35',
      height: 30,
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 22 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 20 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 21 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 25 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 21 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 17 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 13 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      top: 
          chosenDesign === 'design_4' ? 7 + 2 : 
          chosenDesign === 'design_5' ? 7 + 2 : 
          chosenDesign === 'design_10' ? 7 + 2 : 
          chosenDesign === 'design_17' ? 7 + 2 : 
          chosenDesign === 'design_20' ? 7 + 2 : 
          chosenDesign === 'design_25' ? 7 + 2 : 
          6, // prettier-ignore
    },
    {
      class: '',
      heading: 'Body:',
      headingColor: '',
      description: "Now you get to prove you're the perfect candidate. ",
      descriptionColor: '#842c46',
      height: 100,
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 22 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 20 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 21 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 25 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 21 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 17 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 13 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      top: 
          chosenDesign === 'design_4' ? 11 + 2 : 
          chosenDesign === 'design_5' ? 11 + 2 : 
          chosenDesign === 'design_6' ? 10 + 2 : 
          chosenDesign === 'design_7' ? 11 + 2 : 
          chosenDesign === 'design_9' ? 11 + 2 : 
          chosenDesign === 'design_10' ? 11 + 2 : 
          chosenDesign === 'design_12' ? 11 + 2 : 
          chosenDesign === 'design_13' ? 11 + 2 : 
          chosenDesign === 'design_14' ? 11 + 2 : 
          chosenDesign === 'design_16' ? 11 + 2 : 
          chosenDesign === 'design_17' ? 11 + 2 : 
          chosenDesign === 'design_19' ? 11 + 2 : 
          chosenDesign === 'design_20' ? 11 + 2 : 
          chosenDesign === 'design_21' ? 11 + 2 : 
          chosenDesign === 'design_22' ? 11 + 2 : 
          chosenDesign === 'design_23' ? 11 + 2 : 
          chosenDesign === 'design_24' ? 11 + 2 : 
          chosenDesign === 'design_25' ? 11 + 2 : 
          chosenDesign === 'design_26' ? 11 + 2 : 
          chosenDesign === 'design_27' ? 11 + 2 : 
          chosenDesign === 'design_28' ? 11 + 2 : 
          chosenDesign === 'design_29' ? 13 + 2 : 
          chosenDesign === 'design_31' ? 12 + 2 : 
          chosenDesign === 'design_32' ? 12 + 2 : 
          chosenDesign === 'design_33' ? 12 + 2 : 
          chosenDesign === 'design_34' ? 12 + 2 : 
          chosenDesign === 'design_35' ? 12 + 2 : 
          chosenDesign === 'design_36' ? 12 + 2 : 
          chosenDesign === 'design_37' ? 12 + 2 : 
          chosenDesign === 'design_38' ? 12 + 2 : 
          chosenDesign === 'design_39' ? 12 + 2 : 
          chosenDesign === 'design_40' ? 12 + 2 : 
          15, // prettier-ignore
    },
    {
      class: '',
      heading: 'Call to Action:',
      headingColor: '',
      description: 'Move your reader to action.',
      descriptionColor: '#58215d',
      height: 30,
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 22 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 20 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 21 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 25 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 21 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 17 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 13 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      top: 
          chosenDesign === 'design_4' ? 22 + 2 : 
          chosenDesign === 'design_5' ? 22 + 2 : 
          chosenDesign === 'design_6' ? 21 + 2 : 
          chosenDesign === 'design_7' ? 22 + 2 : 
          chosenDesign === 'design_9' ? 23 + 2 : 
          chosenDesign === 'design_10' ? 23 + 2 : 
          chosenDesign === 'design_12' ? 23 + 2 : 
          chosenDesign === 'design_13' ? 22 + 2 : 
          chosenDesign === 'design_14' ? 22 + 2 : 
          chosenDesign === 'design_16' ? 23 + 2 : 
          chosenDesign === 'design_17' ? 22 + 2 : 
          chosenDesign === 'design_19' ? 22 + 2 : 
          chosenDesign === 'design_20' ? 23 + 2 : 
          chosenDesign === 'design_21' ? 22 + 2 : 
          chosenDesign === 'design_22' ? 22 + 2 : 
          chosenDesign === 'design_23' ? 22 + 2 : 
          chosenDesign === 'design_24' ? 22 + 2 : 
          chosenDesign === 'design_25' ? 22 + 2 : 
          chosenDesign === 'design_26' ? 22 + 2 : 
          chosenDesign === 'design_27' ? 22 + 2 : 
          chosenDesign === 'design_28' ? 22 + 2 : 
          chosenDesign === 'design_31' ? 21 + 2 : 
          chosenDesign === 'design_32' ? 21 + 2 : 
          chosenDesign === 'design_33' ? 21 + 2 : 
          chosenDesign === 'design_34' ? 21 + 2 : 
          chosenDesign === 'design_35' ? 21 + 2 : 
          chosenDesign === 'design_36' ? 22 + 2 : 
          chosenDesign === 'design_37' ? 21 + 2 : 
          chosenDesign === 'design_38' ? 21 + 2 : 
          chosenDesign === 'design_39' ? 21 + 2 : 
          chosenDesign === 'design_40' ? 22 + 2 : 
          26, // prettier-ignore
    },
  ];

  const weave_in_a_story_ProTipsData = [
    {
      class: '',
      heading: 'The Recipient, Greeting, Heading: ',
      headingColor: '',
      description:
        "Show the receiver's name and mailing address. While not required, doing so can enhance a formal cover letter. Address to a specific person when possible. Where impos sible, use [Dept]) or [Company] Team. Give a heading to the letter",
      descriptionColor: '#3626d0',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 21 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 14 + 2 : 
          chosenDesign === 'design_9' ? 19 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 20 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 22 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 19 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 12 + 2 : 
          chosenDesign === 'design_35' ? 16 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 12 + 2 : 
          chosenDesign === 'design_39' ? 12 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      left: true,
      top: 
          chosenDesign === 'design_4' ? -7 + 2 : 
          -8, // prettier-ignore
    },
    {
      class: '',
      heading: 'Body',
      headingColor: '',
      description:
        "Now prove you're the perfect candidate. Show measurable results and value! Address 3-4 key requirements of the role: tying your experi ences; show that you met their key requirements.",
      descriptionColor: '#c95204',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 21 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 14 + 2 : 
          chosenDesign === 'design_9' ? 19 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 20 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 22 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 19 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 12 + 2 : 
          chosenDesign === 'design_35' ? 16 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 12 + 2 : 
          chosenDesign === 'design_39' ? 12 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      left: true,
      top: 
          chosenDesign === 'design_4' ? 21 + 2 : 
          chosenDesign === 'design_5' ? 20 + 2 : 
          chosenDesign === 'design_6' ? 20 + 2 : 
          chosenDesign === 'design_7' ? 20 + 2 : 
          chosenDesign === 'design_9' ? 20 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 20 + 2 : 
          chosenDesign === 'design_13' ? 20 + 2 : 
          chosenDesign === 'design_14' ? 20 + 2 : 
          chosenDesign === 'design_16' ? 20 + 2 : 
          chosenDesign === 'design_17' ? 20 + 2 : 
          chosenDesign === 'design_19' ? 20 + 2 : 
          chosenDesign === 'design_20' ? 20 + 2 : 
          chosenDesign === 'design_21' ? 20 + 2 : 
          chosenDesign === 'design_22' ? 20 + 2 : 
          chosenDesign === 'design_23' ? 20 + 2 : 
          chosenDesign === 'design_24' ? 20 + 2 : 
          chosenDesign === 'design_25' ? 20 + 2 : 
          chosenDesign === 'design_26' ? 20 + 2 : 
          chosenDesign === 'design_27' ? 20 + 2 : 
          chosenDesign === 'design_28' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 20 + 2 : 
          chosenDesign === 'design_32' ? 20 + 2 : 
          chosenDesign === 'design_33' ? 20 + 2 : 
          chosenDesign === 'design_34' ? 20 + 2 : 
          chosenDesign === 'design_35' ? 20 + 2 : 
          chosenDesign === 'design_36' ? 20 + 2 : 
          chosenDesign === 'design_37' ? 20 + 2 : 
          chosenDesign === 'design_38' ? 20 + 2 : 
          chosenDesign === 'design_39' ? 20 + 2 : 
          chosenDesign === 'design_40' ? 20 + 2 : 
          25, // prettier-ignore
    },
    {
      class: '',
      heading: 'Closing:',
      headingColor: '',
      description: 'Offer a complimentary close. Sign, followed by your name.',
      descriptionColor: '#1c7dfc',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 21 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 14 + 2 : 
          chosenDesign === 'design_9' ? 19 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 20 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 22 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 19 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 12 + 2 : 
          chosenDesign === 'design_35' ? 16 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 12 + 2 : 
          chosenDesign === 'design_39' ? 12 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      left: true,
      top: 
          chosenDesign === 'design_4' ? 40 + 2 : 
          chosenDesign === 'design_5' ? 38 + 2 : 
          chosenDesign === 'design_6' ? 38 + 2 : 
          chosenDesign === 'design_7' ? 38 + 2 : 
          chosenDesign === 'design_9' ? 40 + 2 : 
          chosenDesign === 'design_10' ? 38 + 2 : 
          chosenDesign === 'design_12' ? 40 + 2 : 
          chosenDesign === 'design_13' ? 38 + 2 : 
          chosenDesign === 'design_14' ? 38 + 2 : 
          chosenDesign === 'design_16' ? 38 + 2 : 
          chosenDesign === 'design_17' ? 40 + 2 : 
          chosenDesign === 'design_19' ? 38 + 2 : 
          chosenDesign === 'design_20' ? 38 + 2 : 
          chosenDesign === 'design_21' ? 38 + 2 : 
          chosenDesign === 'design_22' ? 38 + 2 : 
          chosenDesign === 'design_23' ? 38 + 2 : 
          chosenDesign === 'design_24' ? 38 + 2 : 
          chosenDesign === 'design_25' ? 38 + 2 : 
          chosenDesign === 'design_26' ? 38 + 2 : 
          chosenDesign === 'design_27' ? 38 + 2 : 
          chosenDesign === 'design_28' ? 38 + 2 : 
          chosenDesign === 'design_31' ? 38 + 2 : 
          chosenDesign === 'design_32' ? 38 + 2 : 
          chosenDesign === 'design_33' ? 38 + 2 : 
          chosenDesign === 'design_34' ? 38 + 2 : 
          chosenDesign === 'design_35' ? 38 + 2 : 
          chosenDesign === 'design_36' ? 38 + 2 : 
          chosenDesign === 'design_37' ? 38 + 2 : 
          chosenDesign === 'design_38' ? 38 + 2 : 
          chosenDesign === 'design_39' ? 38 + 2 : 
          chosenDesign === 'design_40' ? 38 + 2 : 
          46, // prettier-ignore
    },
    {
      class: '',
      heading: 'The Intro:',
      headingColor: '',
      description:
        "Use one or two sen tences to tell your story and set yourself apart stating why you're the best fit. Proactively handle any injections to your candidature.",
      descriptionColor: '#3c6f35',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 21 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 14 + 2 : 
          chosenDesign === 'design_9' ? 19 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 20 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 22 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 19 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 12 + 2 : 
          chosenDesign === 'design_35' ? 16 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 12 + 2 : 
          chosenDesign === 'design_39' ? 12 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      top: 
          chosenDesign === 'design_4' ? 7 + 2 : 
          7, // prettier-ignore
    },
    {
      class: '',
      heading: 'Call to Action:',
      headingColor: '',
      description:
        "Drive home your why. Tie it all together. Convince the recruiter you're the best fit. Move your reader to action.",
      descriptionColor: '#842c46',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 14 + 2 : 
          chosenDesign === 'design_5' ? 26 + 2 : 
          chosenDesign === 'design_6' ? 21 + 2 : 
          chosenDesign === 'design_7' ? 23 + 2 : 
          chosenDesign === 'design_8' ? 14 + 2 : 
          chosenDesign === 'design_9' ? 19 + 2 : 
          chosenDesign === 'design_10' ? 20 + 2 : 
          chosenDesign === 'design_12' ? 20 + 2 : 
          chosenDesign === 'design_13' ? 19 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 21 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 22 + 2 : 
          chosenDesign === 'design_21' ? 15 + 2 : 
          chosenDesign === 'design_22' ? 17 + 2 : 
          chosenDesign === 'design_23' ? 16 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_26' ? 14 + 2 : 
          chosenDesign === 'design_27' ? 13 + 2 : 
          chosenDesign === 'design_28' ? 14 + 2 : 
          chosenDesign === 'design_30' ? 19 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 14 + 2 : 
          chosenDesign === 'design_33' ? 14 + 2 : 
          chosenDesign === 'design_34' ? 12 + 2 : 
          chosenDesign === 'design_35' ? 16 + 2 : 
          chosenDesign === 'design_36' ? 14 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 12 + 2 : 
          chosenDesign === 'design_39' ? 12 + 2 : 
          chosenDesign === 'design_40' ? 15 + 2 : 
          null, // prettier-ignore
      top: 
          chosenDesign === 'design_4' ? 31 + 2 : 
          chosenDesign === 'design_5' ? 29 + 2 : 
          chosenDesign === 'design_6' ? 29 + 2 : 
          chosenDesign === 'design_7' ? 29 + 2 : 
          chosenDesign === 'design_9' ? 31 + 2 : 
          chosenDesign === 'design_10' ? 29 + 2 : 
          chosenDesign === 'design_12' ? 31 + 2 : 
          chosenDesign === 'design_13' ? 31 + 2 : 
          chosenDesign === 'design_14' ? 29 + 2 : 
          chosenDesign === 'design_16' ? 29 + 2 : 
          chosenDesign === 'design_17' ? 31 + 2 : 
          chosenDesign === 'design_19' ? 29 + 2 : 
          chosenDesign === 'design_20' ? 29 + 2 : 
          chosenDesign === 'design_21' ? 29 + 2 : 
          chosenDesign === 'design_22' ? 29 + 2 : 
          chosenDesign === 'design_23' ? 29 + 2 : 
          chosenDesign === 'design_24' ? 29 + 2 : 
          chosenDesign === 'design_25' ? 29 + 2 : 
          chosenDesign === 'design_26' ? 29 + 2 : 
          chosenDesign === 'design_27' ? 29 + 2 : 
          chosenDesign === 'design_28' ? 29 + 2 : 
          chosenDesign === 'design_31' ? 29 + 2 : 
          chosenDesign === 'design_32' ? 29 + 2 : 
          chosenDesign === 'design_33' ? 29 + 2 : 
          chosenDesign === 'design_34' ? 29 + 2 : 
          chosenDesign === 'design_35' ? 29 + 2 : 
          chosenDesign === 'design_36' ? 29 + 2 : 
          chosenDesign === 'design_37' ? 29 + 2 : 
          chosenDesign === 'design_38' ? 29 + 2 : 
          chosenDesign === 'design_39' ? 29 + 2 : 
          chosenDesign === 'design_40' ? 29 + 2 : 
          37, // prettier-ignore
    },
  ];

  const brong_relevant_case_study_ProTipsData = [
    {
      class: '',
      heading: 'Intro:',
      headingColor: '',
      description:
        'Grab their attention with a personal story why is this compa ny/role important to you? Why do you care?',
      descriptionColor: '#c95204',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 15 + 2 : 
          chosenDesign === 'design_4' ? 19 + 2 : 
          chosenDesign === 'design_5' ? 27 + 2 : 
          chosenDesign === 'design_6' ? 23 + 2 : 
          chosenDesign === 'design_7' ? 25 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 21 + 2 : 
          chosenDesign === 'design_10' ? 22 + 2 : 
          chosenDesign === 'design_11' ? 19 + 2 : 
          chosenDesign === 'design_12' ? 22 + 2 : 
          chosenDesign === 'design_13' ? 20 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_15' ? 19 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 23 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 23 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_25' ? 19 + 2 : 
          chosenDesign === 'design_26' ? 15 + 2 : 
          chosenDesign === 'design_27' ? 15 + 2 : 
          chosenDesign === 'design_28' ? 15 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 15 + 2 : 
          chosenDesign === 'design_33' ? 15 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 18 + 2 : 
          chosenDesign === 'design_36' ? 15 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 14 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 16 + 2 : 
          null, // prettier-ignore
      left: true,
      top: 
          chosenDesign === 'design_4' ? -6 + 2 : 
          -6, // prettier-ignore
    },
    {
      class: '',
      heading: 'Closing:',
      headingColor: '',
      description:
        'A strong close is key: this is your chance to swing for the fences. Drive home your why; include a link to a value validation project., convince them that you are the best fit.',
      descriptionColor: '#1c7dfc',
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 15 + 2 : 
          chosenDesign === 'design_4' ? 19 + 2 : 
          chosenDesign === 'design_5' ? 27 + 2 : 
          chosenDesign === 'design_6' ? 23 + 2 : 
          chosenDesign === 'design_7' ? 25 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 21 + 2 : 
          chosenDesign === 'design_10' ? 22 + 2 : 
          chosenDesign === 'design_11' ? 19 + 2 : 
          chosenDesign === 'design_12' ? 22 + 2 : 
          chosenDesign === 'design_13' ? 20 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_15' ? 19 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 23 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 23 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_25' ? 19 + 2 : 
          chosenDesign === 'design_26' ? 15 + 2 : 
          chosenDesign === 'design_27' ? 15 + 2 : 
          chosenDesign === 'design_28' ? 15 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 15 + 2 : 
          chosenDesign === 'design_33' ? 15 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 18 + 2 : 
          chosenDesign === 'design_36' ? 15 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 14 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 16 + 2 : 
          null, // prettier-ignore
      left: true,
      top: 
          chosenDesign === 'design_4' ? 26 + 2 : 
          chosenDesign === 'design_5' ? 24 + 2 : 
          chosenDesign === 'design_6' ? 26 + 2 : 
          chosenDesign === 'design_7' ? 26 + 2 : 
          chosenDesign === 'design_9' ? 26 + 2 : 
          chosenDesign === 'design_10' ? 26 + 2 : 
          chosenDesign === 'design_12' ? 26 + 2 : 
          chosenDesign === 'design_13' ? 26 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 26 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 26 + 2 : 
          chosenDesign === 'design_21' ? 26 + 2 : 
          chosenDesign === 'design_22' ? 26 + 2 : 
          chosenDesign === 'design_23' ? 26 + 2 : 
          chosenDesign === 'design_24' ? 26 + 2 : 
          chosenDesign === 'design_25' ? 26 + 2 : 
          chosenDesign === 'design_26' ? 26 + 2 : 
          chosenDesign === 'design_27' ? 26 + 2 : 
          chosenDesign === 'design_28' ? 26 + 2 : 
          chosenDesign === 'design_31' ? 26 + 2 : 
          chosenDesign === 'design_32' ? 26 + 2 : 
          chosenDesign === 'design_33' ? 26 + 2 : 
          chosenDesign === 'design_34' ? 26 + 2 : 
          chosenDesign === 'design_35' ? 26 + 2 : 
          chosenDesign === 'design_36' ? 26 + 2 : 
          chosenDesign === 'design_37' ? 26 + 2 : 
          chosenDesign === 'design_38' ? 26 + 2 : 
          chosenDesign === 'design_39' ? 26 + 2 : 
          chosenDesign === 'design_40' ? 26 + 2 : 
          35, // prettier-ignore
    },
    {
      class: '',
      heading: 'Greeting:',
      headingColor: '',
      description:
        "Always address your cover letter to a real name when possible. if you can't find any name, use [Company] [Department] Team.",
      descriptionColor: '#3c6f35',
      height: 30,
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 15 + 2 : 
          chosenDesign === 'design_4' ? 19 + 2 : 
          chosenDesign === 'design_5' ? 27 + 2 : 
          chosenDesign === 'design_6' ? 23 + 2 : 
          chosenDesign === 'design_7' ? 25 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 21 + 2 : 
          chosenDesign === 'design_10' ? 22 + 2 : 
          chosenDesign === 'design_11' ? 19 + 2 : 
          chosenDesign === 'design_12' ? 22 + 2 : 
          chosenDesign === 'design_13' ? 20 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_15' ? 19 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 23 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 23 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_25' ? 19 + 2 : 
          chosenDesign === 'design_26' ? 15 + 2 : 
          chosenDesign === 'design_27' ? 15 + 2 : 
          chosenDesign === 'design_28' ? 15 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 15 + 2 : 
          chosenDesign === 'design_33' ? 15 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 18 + 2 : 
          chosenDesign === 'design_36' ? 15 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 14 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 16 + 2 : 
          null, // prettier-ignore
      top: 
          chosenDesign === 'design_4' ? -9 + 2 : 
          -9, // prettier-ignore
    },
    {
      class: '',
      heading: 'Body:',
      headingColor: '',
      description:
        'Use this section to proactively handle objections or high light relevant case studies of your best work. Be sure to include measurable results and value-added!',
      descriptionColor: '#842c46',
      height: 300,
      baseHeadingValue: 
          chosenDesign === 'design_2' ? 19 + 2 : 
          chosenDesign === 'design_3' ? 15 + 2 : 
          chosenDesign === 'design_4' ? 19 + 2 : 
          chosenDesign === 'design_5' ? 27 + 2 : 
          chosenDesign === 'design_6' ? 23 + 2 : 
          chosenDesign === 'design_7' ? 25 + 2 : 
          chosenDesign === 'design_8' ? 13 + 2 : 
          chosenDesign === 'design_9' ? 21 + 2 : 
          chosenDesign === 'design_10' ? 22 + 2 : 
          chosenDesign === 'design_11' ? 19 + 2 : 
          chosenDesign === 'design_12' ? 22 + 2 : 
          chosenDesign === 'design_13' ? 20 + 2 : 
          chosenDesign === 'design_14' ? 26 + 2 : 
          chosenDesign === 'design_15' ? 19 + 2 : 
          chosenDesign === 'design_16' ? 26 + 2 : 
          chosenDesign === 'design_17' ? 23 + 2 : 
          chosenDesign === 'design_18' ? 19 + 2 : 
          chosenDesign === 'design_19' ? 26 + 2 : 
          chosenDesign === 'design_20' ? 23 + 2 : 
          chosenDesign === 'design_24' ? 23 + 2 : 
          chosenDesign === 'design_25' ? 19 + 2 : 
          chosenDesign === 'design_26' ? 15 + 2 : 
          chosenDesign === 'design_27' ? 15 + 2 : 
          chosenDesign === 'design_28' ? 15 + 2 : 
          chosenDesign === 'design_30' ? 20 + 2 : 
          chosenDesign === 'design_31' ? 14 + 2 : 
          chosenDesign === 'design_32' ? 15 + 2 : 
          chosenDesign === 'design_33' ? 15 + 2 : 
          chosenDesign === 'design_34' ? 14 + 2 : 
          chosenDesign === 'design_35' ? 18 + 2 : 
          chosenDesign === 'design_36' ? 15 + 2 : 
          chosenDesign === 'design_37' ? 14 + 2 : 
          chosenDesign === 'design_38' ? 14 + 2 : 
          chosenDesign === 'design_39' ? 14 + 2 : 
          chosenDesign === 'design_40' ? 16 + 2 : 
          null, // prettier-ignore
      top: 
          chosenDesign === 'design_4' ? 1 + 2 : 
          chosenDesign === 'design_5' ? 1 + 2 : 
          chosenDesign === 'design_6' ? 1 + 2 : 
          chosenDesign === 'design_7' ? 1 + 2 : 
          chosenDesign === 'design_9' ? 1 + 2 : 
          chosenDesign === 'design_10' ? 1 + 2 : 
          chosenDesign === 'design_12' ? 1 + 2 : 
          chosenDesign === 'design_13' ? 1 + 2 : 
          chosenDesign === 'design_14' ? 1 + 2 : 
          chosenDesign === 'design_16' ? 1 + 2 : 
          chosenDesign === 'design_17' ? 1 + 2 : 
          chosenDesign === 'design_19' ? 1 + 2 : 
          chosenDesign === 'design_20' ? 1 + 2 : 
          chosenDesign === 'design_21' ? 1 + 2 : 
          chosenDesign === 'design_22' ? 1 + 2 : 
          chosenDesign === 'design_23' ? 1 + 2 : 
          chosenDesign === 'design_24' ? 1 + 2 : 
          chosenDesign === 'design_25' ? 1 + 2 : 
          chosenDesign === 'design_26' ? 1 + 2 : 
          chosenDesign === 'design_27' ? 1 + 2 : 
          chosenDesign === 'design_28' ? 1 + 2 : 
          chosenDesign === 'design_31' ? 1 + 2 : 
          chosenDesign === 'design_32' ? 1 + 2 : 
          chosenDesign === 'design_33' ? 1 + 2 : 
          chosenDesign === 'design_34' ? 1 + 2 : 
          chosenDesign === 'design_35' ? 1 + 2 : 
          chosenDesign === 'design_36' ? 1 + 2 : 
          chosenDesign === 'design_37' ? 1 + 2 : 
          chosenDesign === 'design_38' ? 1 + 2 : 
          chosenDesign === 'design_39' ? 1 + 2 : 
          chosenDesign === 'design_40' ? 1 + 2 : 
          9, // prettier-ignore
    },
  ];

  const returnCategory =
        chosenCategory === 'standard' ? standard_ProTipsData :
        chosenCategory === 'currently_employed_1' ? currentlyEmployed1_ProTipsData :
        chosenCategory === 'currently_employed_2' ? currentlyEmployed2_ProTipsData :
        chosenCategory === 'currently_employed_3' ? currentlyEmployed3_ProTipsData :
        chosenCategory === 'not_currently_employed_but_experienced' ? notcurrentlyEmployed_ProTipsData :
        chosenCategory === 'recent_graduate_with_internship_experience' ? recentGraduateWithInternship_ProTipsData :
        chosenCategory === 'recent_graduate_no_internship_experience' ? recentGraduateNoInternship_ProTipsData :
        chosenCategory === 'career_change_1' ? careerChange1_ProTipsData :
        chosenCategory === 'career_change_2' ? careerChange2_ProTipsData :
        chosenCategory === 'career_change_3' ? careerChange3_ProTipsData :
        chosenCategory === 'triple_part_strategy' ? triple_part_strategy_ProTipsData :
        chosenCategory === 'purpose_changes' ? propose_changes_ProTipsData :
        chosenCategory === 'what_you_can_offer' ? what_you_can_offer_ProTipsData :
        chosenCategory === 'harp_on_previous_results' ? harp_on_previous_results_ProTipsData :
        chosenCategory === 'weave_in_a_story' ? weave_in_a_story_ProTipsData :
        chosenCategory === 'bring_relevant_case_study' ? brong_relevant_case_study_ProTipsData :
        standard_ProTipsData; // prettier-ignore

  return { returnCategory };
}
