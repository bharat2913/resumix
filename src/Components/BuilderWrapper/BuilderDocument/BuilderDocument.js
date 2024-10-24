import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Helmet } from 'react-helmet';
import { getDownloadsById, updateDownloadsById } from '../../../API/index';

import creds from '../../../config.json';
import { uploadFile } from 'react-s3';
import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

import html2plaintext from 'html2plaintext';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { create_resume, update_resume } from '../../../API/index';

// import fs from 'fs';
import { PDFExport } from '@progress/kendo-react-pdf';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
  loginPopup,
  loginPopupBG,
  userLoggedIn,
  userData,
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
  const history = useHistory();
  const pdfExportComponent = useRef(null);
  const documentComponent = useRef(null);
  const userId = localStorage.getItem('id');
  const jwtToken = localStorage.getItem('jwtToken');
  const pageData = JSON.parse(localStorage.getItem('pageData'));
  // const exportContainer = useRef(null);

  // console.log(creds.AWS_ACCESS_KEY_ID);
  // console.log([...pageData, JSON.parse(pageDocumentData)]);

  const aws_config = {
    bucketName: 'cvjury-user-documents',
    dirName: 'resumes' /* optional */,
    region: 'eu-central-1',
    accessKeyId: creds.AWS_ACCESS_KEY_ID,
    secretAccessKey: creds.AWS_SECRET_KEY,
    acl: 'private',
  };

  const [disableDocument, setDisableDocument] = useState(false);

  const [wordDownloadPercent, setWordDownloadPercent] = useState(0);
  const [pdfPageSize, setPdfPageSize] = useState('A4');
  const [loading, setLoading] = useState(false);
  const [showWordProgress, setShowWordProgress] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [showToastText, setShowToastText] = useState('');
  const [product, setProduct] = useState(null);
  const [downloads, setDownloads] = useState(null);
  const [savedResumeId, setSavedResumeId] = useState(null);

  // const [document_name, setDocument_name] = useState('Document');
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);

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

  // console.log(userData?.id);
  useEffect(() => {
    product &&
      getDownloadsById(userData?.id).then((res) =>
        setDownloads(res.data.downloads)
      );
  }, [product, downloads]);
  // console.log(product?.name);
  // console.log(downloads);

  const [documentDataUrl, setDocumentDataUrl] = useState('');
  const [documentPdfUrl, setDocumentPdfUrl] = useState('');
  // const [copied, setCopied] = useState(false);

  // console.log(copied);
  // useEffect(() => {
  //   copied &&
  // setTimeout(() => {
  //   setCopied(false);
  // }, 3000);
  // }, [copied]);

  function dataURLtoFile(dataurl, filename) {
    // console.log(dataurl);
    var arr = dataurl?.split(','),
      mime = 'application/pdf',
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    // mime = arr[0].match(/:(.*?);/)[1],
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  const handlePdfDownload = async (e) => {
    setDisableDocument(true);
    setDownloadDropdown(!downloadDropdown);
    const savePdf = pdfExportComponent?.current.save();
    console.log(savePdf);

    // setDisableDocument(false);
    setTimeout(() => {
      setDisableDocument(false);
    }, 2000);

    // html to base64pdf
    var element = document.getElementById('pdfExportComponent');
    drawDOM(element)
      .then((group) => {
        return exportPDF(group);
      })
      .then((dataUri) => {
        setDocumentDataUrl(dataUri);
        updateDownloadsById(userData?.id, { downloads: downloads + 1 }).then(
          (res) => setDownloads(res.data.downloads)
        );
        // console.log(dataUri);
        var dataFileToPdf = dataURLtoFile(dataUri, document_name);
        uploadFile(dataFileToPdf, aws_config)
          .then((data) => setDocumentPdfUrl(data.location))
          .catch((err) => console.error(err));
        // console.log(dataUri.split(';base64,')[1]);
      });
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
        // setSavedResumeId(res.data.id)
        localStorage.setItem(
          'downloadData',
          JSON.stringify({
            type: 'builder',
            templateName: templateName,
            documentId: res.data.id,
          })
        );
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
  const share_Modal = (dataUrl) => {
    let copied = false;
    setLoading(false);
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal'>
            <div>
              <FacebookShareButton
                url={dataUrl}
                quote={'CV-JURY Resume'}
                hashtag='#cvjury'
                className={'socialMediaButton'}
              >
                <FacebookIcon size={50} />
              </FacebookShareButton>
              <EmailShareButton
                url={dataUrl}
                quote={'CV-JURY Resume'}
                hashtag='#cvjury'
                className={'socialMediaButton'}
                description={'CV-JURY Resume'}
              >
                <EmailIcon size={50} />
              </EmailShareButton>
              <LinkedinShareButton
                url={dataUrl}
                quote={'CV-JURY Resume'}
                hashtag='#cvjury'
                className={'socialMediaButton'}
                description={'CV-JURY Resume'}
              >
                <LinkedinIcon size={50} />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={dataUrl}
                quote={'CV-JURY Resume'}
                hashtag='#cvjury'
                className={'socialMediaButton'}
                description={'CV-JURY Resume'}
              >
                <WhatsappIcon size={50} />
              </WhatsappShareButton>
            </div>
            <div className='copyToClipboard'>
              <input
                type='text'
                value={dataUrl.substring(0, 30) + '...'}
                disabled
              />
              <CopyToClipboard text={dataUrl} onCopy={() => (copied = true)}>
                <button>Copy Link</button>
              </CopyToClipboard>
              {copied ? <div style={{ color: 'red' }}>Copied!</div> : null}
              {copied &&
                setTimeout(() => {
                  copied = false;
                }, 3000)}
            </div>
          </div>
        );
      },
    });
  };

  const [updatedTextData, setUpdatedTextData] = useState('');

  const setUpdatedTextDataFun = () => {
    pageUpdatableData.map((pageData, index) =>
      setUpdatedTextData(
        html2plaintext(pageData?.wholePageMainRef.current.innerHTML)
          .replace(/Normal(.*?)Font/gm, '')
          .replace(/Type(.*?)Font/gm, '')
          .replace(/Normal12Font/g, '')
          .replace(/Normal14Font/g, '')
          .replace(/Normal16Font/g, '')
          .replace(/Normal18Font/g, '')
          .replace(/Normal20Font/g, '')
          .replace(/Normal22Font/g, '')
          .replace(/Normal24Font/g, '')
          .replace(/Normal26Font/g, '')
          .replace(/Normal28Font/g, '')
          .replace(/Normal30Font/g, '')
          .replace(/Normal36Font/g, '')
          .replace(/NormalFont/g, '')
          .replace(/Normal/g, '')
          .replace(/Font/g, '')
          .replace(/Type/g, '')
          .replace(/H1Font/g, '')
          .replace(/Block/g, '')
          .replace(/Type12Font/g, '')
          .replace(/TypeFont/g, '')
          .replaceAll('\n', '\n')
          .replaceAll('\n\n', '\n')
          .replaceAll('\n\n\n', '\n')
          .replaceAll('\n\n\n\n', '\n')
          .replaceAll('\n\n\n\n\n', '\n')
          .replaceAll('\n\n\n\n\n\n', '\n')
          .replaceAll('\n\n\n\n\n\n\n', '\n')
          .replaceAll('\n\n\n\n\n\n\n\n', '\n')
          .replaceAll('\n\n\n\n\n\n\n\n\n', '\n')
          .replaceAll('\n\n\n\n\n\n\n\n\n\n', '\n')
          .trim()
      )
    );
  };
  // console.log(pageData.length === undefined);
  // console.log(
  //   pageUpdatableData.map((pageData, index) =>
  //     pageData?.wholePageMainRef?.current?.innerHTML
  //       .replace(/<[^>]+>/g, '')
  //       .replace(/Normal(.*?)Font/gm, '')
  //   )
  // );

  const savePageData = () => {
    !resumeId && setLoading(true);
    pageData === null
      ? localStorage.setItem(
          'pageData',
          JSON.stringify([JSON.parse(pageDocumentData)])
        )
      : pageData.length === undefined
      ? localStorage.setItem(
          'pageData',
          JSON.stringify([pageData, JSON.parse(pageDocumentData)])
        )
      : localStorage.setItem(
          'pageData',
          JSON.stringify([...pageData, JSON.parse(pageDocumentData)])
        );
    // console.log(pageDocumentData);
    console.log(resumeId ? 'Updating it ' : 'Creating New');

    resumeId
      ? updateData_Modal(saveBuilderData.documentName)
      : create_resume(saveBuilderData, config).then((res) => {
          if (res.status === 200 || res.status === 304) {
            setShowToastText('Saved Successfully!');
            setLoading(false);
            setShowSaveToast(true);
            setSavedResumeId(res.data.id);

            localStorage.setItem(
              'downloadData',
              JSON.stringify({
                type: 'builder',
                templateName: templateName,
                documentId: res.data.id,
              })
            );
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

  const savePageDataandShare = () => {
    !resumeId && setLoading(true);
    pageData === null
      ? localStorage.setItem(
          'pageData',
          JSON.stringify([JSON.parse(pageDocumentData)])
        )
      : pageData.length === undefined
      ? localStorage.setItem(
          'pageData',
          JSON.stringify([pageData, JSON.parse(pageDocumentData)])
        )
      : localStorage.setItem(
          'pageData',
          JSON.stringify([...pageData, JSON.parse(pageDocumentData)])
        );
    // console.log(pageDocumentData);
    console.log(resumeId ? 'Updating it ' : 'Creating New');

    resumeId
      ? share_Modal(
          'https://cvjury.co/builder_view/' +
            templateName +
            '/' +
            resumeId +
            '/share'
        )
      : create_resume(saveBuilderData, config).then((res) => {
          if (res.status === 200 || res.status === 304) {
            setShowToastText('Saved Successfully!');
            setLoading(false);
            setShowSaveToast(true);
            setSavedResumeId(res.data.id);

            localStorage.setItem(
              'downloadData',
              JSON.stringify({
                type: 'builder',
                templateName: templateName,
                documentId: res.data.id,
              })
            );

            share_Modal(
              'https://cvjury.co/builder_view/' +
                templateName +
                '/' +
                res.data.id +
                '/share'
            );
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
    // console.log(updatedTextData);
    // setUpdatedTextDataFun();

    var atag = document.createElement('a');
    var file = new Blob([updatedTextData], { type: 'text/plain' });
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
    setDownloadDropdown(!downloadDropdown);
  };

  const HandleShare = async (document) => {
    // setLoading(false);

    // Share APP URL in View Only mode
    !resumeId && (await savePageData());
    console.log(savedResumeId);
    (resumeId || savedResumeId) &&
      share_Modal(
        'https://cvjury.co/builder_view/' + templateName + '/' + resumeId ??
          savedResumeId + '/share'
      );

    // Upload File to AWS and open share modal
    // drawDOM(document)
    //   .then((group) => {
    //     return exportPDF(group);
    //   })
    //   .then((dataUri) => {
    //     setDocumentDataUrl(dataUri);
    //     var dataFileToPdf = dataURLtoFile(dataUri, document_name); //documentDataUrl
    //     uploadFile(dataFileToPdf, aws_config)
    //       .then((data) => {
    //         setDocumentPdfUrl(data.location.split(' ').join('+'));
    //         share_Modal(data.location.split(' ').join('+'));
    //       })
    //       .catch((err) => {
    //         // console.log(err.message);
    //         setShowToastText(err?.message);
    //         setLoading(false);
    //         setShowSaveToast(true);
    //       });
    //   });
  };

  const HandlePageUpdatableData = () => {
    return (
      <div id='pdfExportComponent' ref={documentComponent}>
        <div className={`${disableDocument ? 'documentWrapper' : ''}`}></div>
        <PDFExport
          ref={pdfExportComponent}
          fileName={document_name}
          forcePageBreak={pageUpdatableData?.length > 1 ? '#break_page' : ''}
          // paperSize={'A4'}
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
                  {/* <BlankTemplate sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={pageUpdatableData[index]?.page} rightMainRef={pageData?.rightMainRef} setDataUpdatableLeft={pageData?.setDataUpdatableLeft} dataUpdatableLeft={pageData?.dataUpdatableLeft} dataUpdatableRight={pageData?.dataUpdatableRight} setDataUpdatableRight={pageData?.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle}  documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> */}
                  {/* <Template2 mainPanelBgColor={mainPanelBgColor} sidePanelTextColor={sidePanelTextColor} sidePanelBgColor={sidePanelBgColor} page={pageUpdatableData[index]?.page} rightMainRef={pageData?.rightMainRef} setDataUpdatableLeft={pageData?.setDataUpdatableLeft} dataUpdatableLeft={pageData?.dataUpdatableLeft} dataUpdatableRight={pageData?.dataUpdatableRight} setDataUpdatableRight={pageData?.setDataUpdatableRight} docummentMargin={docummentMargin} documentHeadingTextStyle={documentHeadingTextStyle}  documentBodyTextStyle={documentBodyTextStyle} documentBodyTextSize={documentBodyTextSize} /> */}
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
      <Helmet>
        <meta
          data-react-helmet='true'
          property='og:description'
          content='CV-Jury Resume Builder'
        />
        <meta
          data-react-helmet='true'
          property='og:url'
          content={`https://cvjury.co.app/builder${templateName}`}
        ></meta>
        <meta
          data-react-helmet='true'
          property='og:image'
          content='https://i.natgeofe.com/n/622db4d3-6f73-462d-b08f-4fb528467f50/01-flamingo-friendships-nationalgeographic_1477297_16x9.jpg?w=1200'
        ></meta>
      </Helmet>
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
      {/* <a download={document_name} href={documentDataUrl}>
        Download pdf document
      </a> */}
      <div
        style={{ display: downloadDropdown ? null : 'none' }}
        onClick={() => setDownloadDropdown(!downloadDropdown)}
        className='downloadDropdownBG'
      ></div>
      <div
        style={{ display: shareDropdown ? null : 'none' }}
        onClick={() => setShareDropdown(!shareDropdown)}
        className='downloadDropdownBG'
      ></div>
      {showWordProgress && (
        <div style={{ width: '400px', position: 'absolute', top: '200px' }}>
          <ProgressBar
            percent={wordDownloadPercent}
            filledBackground='linear-gradient(to right, #ffb8a1, #195190ff)'
          />
          <div style={{ textAlign: 'center', fontSize: '14px' }}>
            {wordDownloadPercent < 50
              ? 'Setting up Docx Template'
              : wordDownloadPercent <= 70
              ? 'Preparing your download'
              : 'Downloading'}
          </div>
        </div>
      )}
      <div
        style={{ display: showBuilderButton && 'none' }}
        className={`document_name_section `}
      >
        {/* <p className='document_name'>Document Name</p> */}
        <div className='document_name_container'>
          {/* <div  suppressContentEditableWarning={true} contentEditable='true' name="document name" id="document_name" rows="1" placeholder='Enter Name' 
            className={`document_name`}
            >
            Document Name
          </div> */}
          <input
            type='text'
            className='document_name'
            name='document name'
            id='document_name'
            required
            defaultValue={document_name}
            onChange={(e) => setDocument_name(e.target.value)}
            placeholder='Document Name'
          />
        </div>

        <div className='document_save'>
          {/* <div onClick={setUpdatedTextDataFun} className='document_save_div'> */}
          <button type='submit' className='document_save_div'>
            <svg
              className='save'
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 330 330'
              xmlSpace='preserve'
            >
              <path
                id='XMLID_341_'
                d='M325.606,84.668L245.334,4.394c-2.813-2.813-6.628-4.393-10.607-4.393h-39.708
            C195.013,0.001,195.006,0,195,0H75c-0.006,0-0.013,0.001-0.02,0.001H15c-8.284,0-15,6.716-15,15V315c0,8.284,6.716,15,15,15h60h180
            h60c8.284,0,15-6.716,15-15V95.274C330,91.296,328.42,87.48,325.606,84.668z M90,30.001h90V110H90V30.001z M90,300v-80h150v80H90z
            M300,300h-30v-95c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v95H30V30.001h30V125c0,8.284,6.716,15,15,15h120
            c8.284,0,15-6.716,15-15V30.001h18.514L300,101.487V300z'
              />
            </svg>
          </button>

          <div
            className='document_save_div'
            onClick={() =>
              document_name !== ''
                ? (setUpdatedTextDataFun(),
                    setDownloadDropdown(!downloadDropdown))
                : (setShowToastText('Enter Document Name'),
                  setShowSaveToast(true))
            }
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
          <div
            onClick={
              () =>
                document_name !== ''
                  ? (setLoading(true),
                      savePageDataandShare(documentComponent.current))
                  : (setShowToastText('Enter Document Name'),
                    setShowSaveToast(true))
              // {
              // setLoading(true);
              // // setShareDropdown(!shareDropdown);
              // savePageDataandShare(documentComponent.current);
              // }
            }
            className='document_save_div'
          >
            <svg
              className='save'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
            </svg>
          </div>

          <div
            style={{ display: downloadDropdown ? null : 'none' }}
            className='downloadDropdown'
          >
            <span onClick={handlePdfDownload} style={{ paddingTop: '8px' }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100px'
                height='100px'
                viewBox='0 0 75.320129 92.604164'
              >
                <g transform='translate(53.548057 -183.975276) scale(1.4843)'>
                  <path
                    fill='#ff2116'
                    d='M-29.632812 123.94727c-3.551967 0-6.44336 2.89347-6.44336 6.44531v49.49804c0 3.55185 2.891393 6.44532 6.44336 6.44532H8.2167969c3.5519661 0 6.4433591-2.89335 6.4433591-6.44532v-40.70117s.101353-1.19181-.416015-2.35156c-.484969-1.08711-1.275391-1.84375-1.275391-1.84375a1.0584391 1.0584391 0 0 0-.0059-.008l-9.3906254-9.21094a1.0584391 1.0584391 0 0 0-.015625-.0156s-.8017392-.76344-1.9902344-1.27344c-1.39939552-.6005-2.8417968-.53711-2.8417968-.53711l.021484-.002z'
                    color='#000'
                    fontFamily='sans-serif'
                    overflow='visible'
                    paintOrder='markers fill stroke'
                    // style='line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;isolation:auto;mix-blend-mode:normal;solid-color:#000000;solid-opacity:1'
                  />
                  <path
                    fill='#f5f5f5'
                    d='M-29.632812 126.06445h28.3789058a1.0584391 1.0584391 0 0 0 .021484 0s1.13480448.011 1.96484378.36719c.79889772.34282 1.36536982.86176 1.36914062.86524.0000125.00001.00391.004.00391.004l9.3671868 9.18945s.564354.59582.837891 1.20899c.220779.49491.234375 1.40039.234375 1.40039a1.0584391 1.0584391 0 0 0-.002.0449v40.74609c0 2.41592-1.910258 4.32813-4.3261717 4.32813H-29.632812c-2.415914 0-4.326172-1.91209-4.326172-4.32813v-49.49804c0-2.41603 1.910258-4.32813 4.326172-4.32813z'
                    color='#000'
                    fontFamily='sans-serif'
                    overflow='visible'
                    paintOrder='markers fill stroke'
                    // style='line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;isolation:auto;mix-blend-mode:normal;solid-color:#000000;solid-opacity:1'
                  />
                  <path
                    fill='#ff2116'
                    d='M-23.40766 161.09299c-1.45669-1.45669.11934-3.45839 4.39648-5.58397l2.69124-1.33743 1.04845-2.29399c.57665-1.26169 1.43729-3.32036 1.91254-4.5748l.8641-2.28082-.59546-1.68793c-.73217-2.07547-.99326-5.19438-.52872-6.31588.62923-1.51909 2.69029-1.36323 3.50626.26515.63727 1.27176.57212 3.57488-.18329 6.47946l-.6193 2.38125.5455.92604c.30003.50932 1.1764 1.71867 1.9475 2.68743l1.44924 1.80272 1.8033728-.23533c5.72900399-.74758 7.6912472.523 7.6912472 2.34476 0 2.29921-4.4984914 2.48899-8.2760865-.16423-.8499666-.59698-1.4336605-1.19001-1.4336605-1.19001s-2.3665326.48178-3.531704.79583c-1.202707.32417-1.80274.52719-3.564509 1.12186 0 0-.61814.89767-1.02094 1.55026-1.49858 2.4279-3.24833 4.43998-4.49793 5.1723-1.3991.81993-2.86584.87582-3.60433.13733zm2.28605-.81668c.81883-.50607 2.47616-2.46625 3.62341-4.28553l.46449-.73658-2.11497 1.06339c-3.26655 1.64239-4.76093 3.19033-3.98386 4.12664.43653.52598.95874.48237 2.01093-.16792zm21.21809-5.95578c.80089-.56097.68463-1.69142-.22082-2.1472-.70466-.35471-1.2726074-.42759-3.1031574-.40057-1.1249.0767-2.9337647.3034-3.2403347.37237 0 0 .993716.68678 1.434896.93922.58731.33544 2.0145161.95811 3.0565161 1.27706 1.02785.31461 1.6224.28144 2.0729-.0409zm-8.53152-3.54594c-.4847-.50952-1.30889-1.57296-1.83152-2.3632-.68353-.89643-1.02629-1.52887-1.02629-1.52887s-.4996 1.60694-.90948 2.57394l-1.27876 3.16076-.37075.71695s1.971043-.64627 2.97389-.90822c1.0621668-.27744 3.21787-.70134 3.21787-.70134zm-2.74938-11.02573c.12363-1.0375.1761-2.07346-.15724-2.59587-.9246-1.01077-2.04057-.16787-1.85154 2.23517.0636.8084.26443 2.19033.53292 3.04209l.48817 1.54863.34358-1.16638c.18897-.64151.47882-2.02015.64411-3.06364z'
                  />
                  <path
                    fill='#2c2c2c'
                    d='M-20.930423 167.83862h2.364986q1.133514 0 1.840213.2169.706698.20991 1.189489.9446.482795.72769.482795 1.75625 0 .94459-.391832 1.6233-.391833.67871-1.056548.97958-.65772.30087-2.02913.30087h-.818651v3.72941h-1.581322zm1.581322 1.22447v3.33058h.783664q1.049552 0 1.44838-.39184.405826-.39183.405826-1.27345 0-.65772-.265887-1.06355-.265884-.41282-.587747-.50378-.314866-.098-1.000572-.098zm5.50664-1.22447h2.148082q1.560333 0 2.4909318.55276.9375993.55276 1.4133973 1.6443.482791 1.09153.482791 2.42096 0 1.3994-.4338151 2.49793-.4268149 1.09153-1.3154348 1.76324-.8816233.67172-2.5189212.67172h-2.267031zm1.581326 1.26645v7.018h.657715q1.378411 0 2.001144-.9516.6227329-.95858.6227329-2.5539 0-3.5125-2.6238769-3.5125zm6.4722254-1.26645h5.30372941v1.26645H-4.2075842v2.85478h2.9807225v1.26646h-2.9807225v4.16322h-1.5813254z'
                    fontFamily='Franklin Gothic Medium Cond'
                    letterSpacing='0'
                    // style="line-height:125%;-inkscape-font-specification:'Franklin Gothic Medium Cond'"
                    wordSpacing='4.26000023'
                  />
                </g>
              </svg>
              Pdf
            </span>
            <span
              onClick={() => downloadContent(document_name)} //downloadTextData
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'>
                <path
                  fill='#FFF'
                  d='M60.9579,8h-42.688C17.5685,8,17,8.5685,17,9.2698v77.4603C17,87.4315,17.5685,88,18.2698,88h59.6825 c0.7013,0,1.2698-0.5685,1.2698-1.2698V26.2643c0-0.7858-0.3122-1.5395-0.8678-2.0951L63.053,8.8678 C62.4974,8.3122,61.7437,8,60.9579,8z'
                />
                <path
                  fill='#979593'
                  d='M79.1211,24.707L61.293,6.8789C60.7266,6.312,59.9736,6,59.1719,6H19c-1.6543,0-3,1.3457-3,3v78 c0,1.6543,1.3457,3,3,3h58c1.6543,0,3-1.3457,3-3V26.8281C80,26.0273,79.6875,25.2739,79.1211,24.707z M60,8.4141L77.5857,26H61 c-0.5518,0-1-0.4482-1-1V8.4141z M77,88H19c-0.5518,0-1-0.4482-1-1V9c0-0.5518,0.4482-1,1-1h39v17c0,1.6543,1.3457,3,3,3h17v59 C78,87.5518,77.5518,88,77,88z'
                />
                <path
                  fill='#C8C6C4'
                  d='M71 61H25c-.5523 0-1-.4477-1-1l0 0c0-.5523.4477-1 1-1h46c.5523 0 1 .4477 1 1l0 0C72 60.5523 71.5523 61 71 61zM71 55H25c-.5523 0-1-.4477-1-1l0 0c0-.5523.4477-1 1-1h46c.5523 0 1 .4477 1 1l0 0C72 54.5523 71.5523 55 71 55zM71 49H25c-.5523 0-1-.4477-1-1l0 0c0-.5523.4477-1 1-1h46c.5523 0 1 .4477 1 1l0 0C72 48.5523 71.5523 49 71 49zM71 43H25c-.5523 0-1-.4477-1-1l0 0c0-.5523.4477-1 1-1h46c.5523 0 1 .4477 1 1l0 0C72 42.5523 71.5523 43 71 43zM71 67H25c-.5523 0-1-.4477-1-1l0 0c0-.5523.4477-1 1-1h46c.5523 0 1 .4477 1 1l0 0C72 66.5523 71.5523 67 71 67z'
                />
              </svg>
              Text
            </span>
          </div>
        </div>

        <p
          className='document_date '
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'end',
          }}
        >
          {documentData}
        </p>
      </div>

      {/* <div>
        <img src={convertedImg} alt='convertedImg' />
      </div> */}

      {HandlePageUpdatableData()}
    </form>
  );
}
