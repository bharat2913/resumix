import React from 'react';
import { useHistory } from 'react-router-dom';
import BuilderHeader from '../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';

export default function ChooseTemplate() {
  const history = useHistory();

  const chooseTemplateData = [
    {
      name: 'template_1',
      img: '/assets/images/Templates/template_1.png',
      alt: 'template_1',
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
      name: 'template_22',
      img: '/assets/images/Templates/template_22.png',
      alt: 'template_22',
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
  ];

  return (
    <>
      <BuilderHeader builderData={{ length: 0 }} />
      <div className='chooseTemplate'>
        <div className='chooseTemplate_heading'>
          Choose A Template to Get Started
        </div>
        <div className='chooseTemplate_main'>
          {chooseTemplateData.map((template) => (
            <div className='template_wrapper'>
              <div
                onClick={() => history.push(`/builder/${template.name}`)}
                className='template_box'
              >
                <img src={template.img} alt={template.alt} />
                <button
                  onClick={() => history.push(`/builder/${template.name}`)}
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
