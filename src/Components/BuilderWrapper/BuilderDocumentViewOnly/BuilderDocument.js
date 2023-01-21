import React, { useState, useEffect, useRef } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { create_resume, update_resume } from '../../../API/index';

import { save } from 'save-file';

// import fs from 'fs';
import { PDFExport } from '@progress/kendo-react-pdf';

import HTMLtoDOCX from 'html-to-docx';

import BlankTemplate from '../../BlankTemplate/BlankTemplate';
import {
  Template1,
  Template13,
  Template22,
  Template28,
  Template29,
} from '../../Templates';

import moment from 'moment';

export default function BuilderDocument({
  share,
  showBuilderButton,
  readOnly,
  resumeId,
  saveBuilderData,
  pageDocumentData,
  document_name,
  setDocument_name,
  templateName,
  templateDataSelector,
  addSectionModal,
  addSectionModalBG,
  pageBorderColor,
  pageBorderWidth,
  pageBorderStyle,
  borderedPage,
  headingTextStyleConditions,
  bodyTextStyleConditions,
  headingTextSizeConditions,
  bodyTextSizeConditions,
  mainPanelBgColor,
  sidePanelTextColor,
  sidePanelBgColor,
  pageUpdatableData,
  pageLayout,
  lineHeight,
  docummentMargin,
  docummentDateFormat,
  documentHeadingTextStyle,
  documentBodyTextStyle,
  documentBodyTextSize,
}) {
  const pdfExportComponent = useRef(null);
  const userId = localStorage.getItem('id');
  const jwtToken = localStorage.getItem('jwtToken');

  // // console.log(JSON.stringify(templateDataSelector));

  const [pdfPageSize, setPdfPageSize] = useState('A4');
  const [loading, setLoading] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [showToastText, setShowToastText] = useState('');

  // const [document_name, setDocument_name] = useState('Document');
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  const documentData =
    docummentDateFormat === '1 / 22'
      ? moment().format('M / YY')
      : docummentDateFormat === '01 / 22'
      ? moment().format('MM / YY')
      : docummentDateFormat === '01 / 2023'
      ? moment().format('MM / YYYY')
      : docummentDateFormat === 'Jan 2023'
      ? moment().format('MMM YYYY')
      : docummentDateFormat === 'January 2023'
      ? moment().format('MMMM YYYY')
      : null;

  useEffect(() => {
    localStorage.removeItem('downloadData');
  }, []);
  // // console.log( document_name)
  useEffect(() => {
    HandlePageUpdatableData();

    setPdfPageSize(
      pageLayout === 'A4'
        ? ['21cm', '28cm']
        : pageLayout === 'Letter'
        ? ['22cm', '28cm']
        : pageLayout === 'Legal'
        ? ['22cm', '36cm']
        : 'A4'
    );
  }, [pageUpdatableData, pageLayout]);

  const handleDownload = (e) => {
    // pdfExportComponent.current && pdfExportComponent.current.save();
    setDownloadDropdown(!downloadDropdown);
    const savePdf = pdfExportComponent?.current.save();
    console.log(savePdf);
  };
  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const UpdateResume = () => {
    setLoading(true);
    update_resume(resumeId, saveBuilderData, config).then((res) => {
      if (res.status === 200 || res.status === 304) {
        setShowToastText('Saved Successfully!');
        setLoading(false);
        setShowSaveToast(true);
      } else {
        console.log(res);
        // if (
        //   res === 'Resume validation failed: documentName: must be unique'
        // ) {
        // setShowToastText(`This will overwrite the existing Resume ${saveBuilderData.documentName}`);
        setShowToastText(`Something went wrong. Try Again`);
        setLoading(false);
        setShowSaveToast(true);
        // }
      }
    });
  };

  const updateData_Modal = (documentName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal'>
            <div>
              {/* <h1>Are you sure?</h1> */}
              <p>
                This will overwrite the existing Resume{' '}
                <span style={{ fontWeight: 'bold' }}>{documentName}</span> Do
                you want to continue?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  UpdateResume();
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

  const [updatedTextData, setUpdatedTextData] = useState('');

  const savePageData = () => {
    !resumeId && setLoading(true);
    localStorage.setItem('pageData', pageDocumentData);
    // console.log(pageDocumentData);
    console.log(resumeId ? 'Updating it ' : 'Creating New');
    // const saveData = {
    //   userId: userId,
    //   documentName: document_name,
    //   documentData: pageDocumentData,
    // };

    resumeId
      ? updateData_Modal(saveBuilderData.documentName)
      : // update_resume(resumeId, saveBuilderData, config).then((res) => {
        //     if (res.status === 200 || res.status === 304) {
        //       setShowToastText('Saved Successfully!');
        //       setLoading(false);
        //       setShowSaveToast(true);
        //     } else {
        //       console.log(res);
        //       // if (
        //       //   res === 'Resume validation failed: documentName: must be unique'
        //       // ) {
        //       // setShowToastText(`This will overwrite the existing Resume ${saveBuilderData.documentName}`);
        //       setShowToastText(`Something went wrong. Try Again`);
        //       setLoading(false);
        //       setShowSaveToast(true);
        //       // }
        //     }
        //   })
        create_resume(saveBuilderData, config).then((res) => {
          if (res.status === 200 || res.status === 304) {
            setShowToastText('Saved Successfully!');
            setLoading(false);
            setShowSaveToast(true);
          } else {
            // console.log(res);
            if (res.includes(saveBuilderData.documentName)) {
              setShowToastText(
                `Resume "${saveBuilderData.documentName}" already exists`
              );
              setLoading(false);
              // updateData_Modal(saveBuilderData.documentName);
              setShowSaveToast(true);
            }
          }
        });
  };

  const downloadContent = (name) => {
    // setUpdatedTextData('');

    // console.log(updatedTextData);

    var atag = document.createElement('a');
    var file = new Blob([updatedTextData], { type: 'text/plain' });
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
    setDownloadDropdown(!downloadDropdown);
  };

  // // console.log(pageUpdatableData);

  const HandlePageUpdatableData = () => {
    return (
      <div>
        <PDFExport
          ref={pdfExportComponent}
          fileName={document_name}
          forcePageBreak={pageUpdatableData?.length > 1 ? '#break_page' : ''}
        >
          {pageUpdatableData?.map((pageData, index) => (
            <document>
              <div
                id='main_resume'
                className={`builder_main_resume 
                          ${
                            pageLayout === 'A4'
                              ? 'a4'
                              : pageLayout === 'Letter'
                              ? 'letter'
                              : pageLayout === 'Legal'
                              ? 'legal'
                              : null
                          }
                        `}
                style={{
                  lineHeight: lineHeight,
                  border: borderedPage ? '1px solid' : null,
                  borderWidth: borderedPage ? pageBorderWidth + 'px' : null,
                  borderStyle: borderedPage ? pageBorderStyle : null,
                  borderColor: borderedPage ? pageBorderColor : null,
                }}
              >
                <div
                  className={`${
                    documentHeadingTextStyle === 'Open Sans'
                      ? 'open_Sans-h '
                      : documentHeadingTextStyle === 'Ubuntu'
                      ? 'ubuntu-h '
                      : documentHeadingTextStyle === 'Georama'
                      ? 'georama-h '
                      : documentHeadingTextStyle === 'Karla'
                      ? 'karla-h '
                      : documentHeadingTextStyle === 'Raleway'
                      ? 'raleway-h '
                      : documentHeadingTextStyle === 'Oswald'
                      ? 'oswald-h'
                      : documentHeadingTextStyle === 'Montserrat'
                      ? 'montserrat-h '
                      : documentHeadingTextStyle === 'Lato'
                      ? 'lato-h '
                      : documentHeadingTextStyle === 'Poppins'
                      ? 'poppins-h '
                      : documentHeadingTextStyle === 'Roboto'
                      ? 'roboto-h '
                      : null
                  } ${
                    documentBodyTextStyle === 'Open Sans'
                      ? 'open_Sans-p '
                      : documentBodyTextStyle === 'Ubuntu'
                      ? 'ubuntu-p '
                      : documentBodyTextStyle === 'Georama'
                      ? 'georama-p '
                      : documentBodyTextStyle === 'Karla'
                      ? 'karla-p '
                      : documentBodyTextStyle === 'Raleway'
                      ? 'raleway-p '
                      : documentBodyTextStyle === 'Oswald'
                      ? 'oswald-p '
                      : documentBodyTextStyle === 'Montserrat'
                      ? 'montserrat-p '
                      : documentBodyTextStyle === 'Lato'
                      ? 'lato-p '
                      : documentBodyTextStyle === 'Poppins'
                      ? 'poppins-p '
                      : documentBodyTextStyle === 'Roboto'
                      ? 'roboto-p '
                      : null
                  } ${
                    documentBodyTextSize === 'Very Small'
                      ? 'verySmall'
                      : documentBodyTextSize === 'Small'
                      ? 'small'
                      : documentBodyTextSize === 'Medium'
                      ? 'medium'
                      : documentBodyTextSize === 'Large'
                      ? 'large'
                      : null
                  }`}
                  id='addElement'
                ></div>

                <div
                  ref={pageData?.wholePageMainRef}
                  className='builderEditorWrapper'
                >
                  {pageData?.template === 'blankTemplate' ? (
                    <div ref={pageData?.rightMainRef}>
                      {pageData?.dataUpdatableRight.length === 0 ? (
                        <div
                          onClick={() => {
                            addSectionModal.current.style.display = 'flex'; // modal visible
                            addSectionModalBG.current.style.display = 'flex'; // modal bg visible
                            // body[0].style.overflow = 'hidden'
                          }}
                          style={{ cursor: 'pointer' }}
                          className='add_section'
                        >
                          <div className='add_icon'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </div>
                          <div>Add Section Here</div>
                        </div>
                      ) : (
                        <BlankTemplate
                          readOnly={readOnly}
                          headingTextStyleConditions={
                            headingTextStyleConditions
                          }
                          bodyTextStyleConditions={bodyTextStyleConditions}
                          headingTextSizeConditions={headingTextSizeConditions}
                          bodyTextSizeConditions={bodyTextSizeConditions}
                          sidePanelTextColor={sidePanelTextColor}
                          sidePanelBgColor={sidePanelBgColor}
                          page={pageUpdatableData[index]?.page}
                          rightMainRef={pageData?.rightMainRef}
                          setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                          dataUpdatableLeft={pageData?.dataUpdatableLeft}
                          dataUpdatableRight={pageData?.dataUpdatableRight}
                          setDataUpdatableRight={
                            pageData?.setDataUpdatableRight
                          }
                          docummentMargin={docummentMargin}
                          documentHeadingTextStyle={documentHeadingTextStyle}
                          documentBodyTextStyle={documentBodyTextStyle}
                          documentBodyTextSize={documentBodyTextSize}
                        />
                      )}
                    </div>
                  ) : pageData?.template === 'template_1' ? (
                    <Template1
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_13' ? (
                    <Template13
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_22' ? (
                    <Template22
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_28' ? (
                    <Template28
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : pageData?.template === 'template_29' ? (
                    <Template29
                      readOnly={readOnly}
                      headingTextStyleConditions={headingTextStyleConditions}
                      bodyTextStyleConditions={bodyTextStyleConditions}
                      headingTextSizeConditions={headingTextSizeConditions}
                      bodyTextSizeConditions={bodyTextSizeConditions}
                      mainPanelBgColor={mainPanelBgColor}
                      sidePanelTextColor={sidePanelTextColor}
                      sidePanelBgColor={sidePanelBgColor}
                      page={pageUpdatableData[index]?.page}
                      rightMainRef={pageData?.rightMainRef}
                      setDataUpdatableLeft={pageData?.setDataUpdatableLeft}
                      dataUpdatableLeft={pageData?.dataUpdatableLeft}
                      dataUpdatableRight={pageData?.dataUpdatableRight}
                      setDataUpdatableRight={pageData?.setDataUpdatableRight}
                      docummentMargin={docummentMargin}
                      documentHeadingTextStyle={documentHeadingTextStyle}
                      documentBodyTextStyle={documentBodyTextStyle}
                      documentBodyTextSize={documentBodyTextSize}
                    />
                  ) : null}
                </div>
              </div>
              {/* <p id='break_page'></p> */}
              {index < pageUpdatableData?.length - 1 ? (
                <p id='break_page'></p>
              ) : null}
            </document>
          ))}
        </PDFExport>
      </div>
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        savePageData();
      }}
      className='builder_main'
    >
      {loading && (
        <div className='builder_loaderWrapper'>
          <ThreeDots wrapperClass='builder_loader' />
        </div>
      )}
      <ToastContainer className='p-3 save_toast' position={'top-center'}>
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
      <div
        style={{ display: downloadDropdown ? null : 'none' }}
        onClick={() => setDownloadDropdown(!downloadDropdown)}
        className='downloadDropdownBG'
      ></div>
      <div className={`document_name_section `}>
        {share !== 'share' && (
          <div className='document_save_viewOnly document_save'>
            <div
              className='document_save_div'
              onClick={() => setDownloadDropdown(!downloadDropdown)}
            >
              <svg
                className='download'
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <g>
                  <rect fill='none' height='24' width='24' />
                </g>
                <g>
                  <path d='M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z' />
                </g>
              </svg>
            </div>
            Download Resume
            <div
              style={{ display: downloadDropdown ? null : 'none' }}
              className='downloadDropdown'
            >
              <span onClick={handleDownload}>PDF</span>
              <span
                onClick={() => downloadContent(document_name)} //downloadTextData
              >
                Text
              </span>
            </div>
          </div>
        )}
      </div>

      <div className='builderViewWrapper'>
        <div className='builderViewBlocker'></div>
        {HandlePageUpdatableData()}
      </div>
    </form>
  );
}
