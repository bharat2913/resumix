'use strict';

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import bordePen from '../../../Assets/svg/bordePen.svg';
import colorPickerIcon from '../../../Assets/svg/colorPalette.svg';
import arrowUp from '../../../Assets/svg/arrowUp.svg';

import {
  BlockPicker,
  SwatchesPicker,
  GithubPicker,
  CompactPicker,
  SketchPicker,
  ChromePicker,
  CirclePicker,
} from 'react-color';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ColorPic = ({
  setPageBorderColorPicker,
  onChange,
  currentState,
  expanded,
  onExpandEvent,
}) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleChange = (color) => {
    // const { onChange } = this.props;
    onChange('color', color.hex);
    setPageBorderColorPicker(color.hex);
  };

  const [showSketchPicker, setShowSketchPicker] = useState(false);

  const renderModal = () => {
    const { color } = currentState;
    // const color = [
    //   ['rgb(183, 28, 28)', 'rgb(211, 47, 47)', 'rgb(244, 67, 54)', 'rgb(229, 115, 115) ', ''],
    //   ['rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', ],
    //   ['rgb(0,168,133)', 'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', ],
    //   ['rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)', 'rgb(239,239,239)', ],
    //   ['rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',],
    // ]
    return (
      <div className='toolbarColorPickerPopup' onClick={stopPropagation}>
        <CompactPicker //GithubPicker
          color={color}
          onChangeComplete={handleChange}
        />
        <div
          className='moreColorsbtnWrapper'
          onClick={() => setShowSketchPicker(!showSketchPicker)}
        >
          <div className='moreColorsbtn'>
            More colors{' '}
            <img
              style={{ maxWidth: '13px', transform: 'rotate(90deg)' }}
              src={arrowUp}
              alt=''
            />
          </div>
        </div>

        <div style={{ display: showSketchPicker ? null : 'none' }}>
          <ChromePicker // SketchPicker //GithubPicker
            color={color}
            onChangeComplete={handleChange}
          />
        </div>

        {/* <BlockPicker color={color} onChangeComplete={this.onChange} /> */}
      </div>
    );
  };

  return (
    <div
      aria-haspopup='true'
      aria-expanded={expanded}
      aria-label='rdw-color-picker'
      className='toolbarColorPicker'
    >
      <div onClick={onExpandEvent} className='toolbarColorPickerIcon'>
        <img src={colorPickerIcon} alt='' />
      </div>
      {expanded ? renderModal() : undefined}
    </div>
  );
};
ColorPic.propTypes = {
  onChange: PropTypes.func,
  currentState: PropTypes.object,
  expanded: PropTypes.bool,
  onExpandEvent: PropTypes.func,
};

export default function BuilderHeader({
  coverLetter,
  showChangeTemplateSidebar,
  setShowChangeTemplateSidebar,
  showChangeCategorySidebar,
  setShowChangeCategorySidebar,
  pageBorderColor,
  setPageBorderColor,
  pageBorderWidth,
  setPageBorderWidth,
  pageBorderStyle,
  setPageBorderStyle,
  borderedPage,
  setBorderedPage,
  sidePanelTextColor,
  setSidePanelTextColor,
  setSidePanelBgColor,
  sidePanelBgColor,
  setPageLayout,
  setDocummentMargin,
  setLineHeight,
  lineHeight,
  setDocummentDateFormat,
  setDocumentHeadingTextStyle,
  setDocumentBodyTextStyle,
  setDocumentBodyTextSize,
}) {
  const [toggleSubHeaderTextStyle, setToggleSubHeaderTextStyle] =
    useState(false);
  const [toggleSidebarDropdown, setToggleSidebarDropdown] = useState(false);

  // // console.log(moment().format("MM-DD"))
  // // console.log(moment().format('lll'))
  // // console.log(moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"]))

  // // console.log(sidePanelTextColor)

  const optionsLayout = ['A4', 'Letter', 'Legal'];
  const optionsMargin = ['Compact', 'Narrow', 'Normal', 'Wide', 'Broad'];
  const optionsdocumentHeadingTextStyle = [
    'Arial',
    'Arial Narrow',
    'Avenir',
    'Book Antiqua',
    'Calibri',
    'Cambria',
    'Century Sans',
    'Constantia',
    'Garamond',
    'Geneva',
    'Georama',
    'Georgia',
    'Gill Sans',
    'Helvetica',
    'Karla',
    'Lato',
    'Merriweather',
    'Montserrat',
    'Open Sans',
    'Oswald',
    'Poppins',
    'Raleway',
    'Roboto',
    'Tahoma',
    'Trebuchet MS',
    'Ubuntu',
    'Veranda',
  ];
  const optionsdocumentBodyTextStyle = [
    'Arial',
    'Arial Narrow',
    'Avenir',
    'Book Antiqua',
    'Calibri',
    'Cambria',
    'Century Sans',
    'Constantia',
    'Garamond',
    'Geneva',
    'Georama',
    'Georgia',
    'Gill Sans',
    'Helvetica',
    'Karla',
    'Lato',
    'Merriweather',
    'Montserrat',
    'Open Sans',
    'Oswald',
    'Poppins',
    'Raleway',
    'Roboto',
    'Tahoma',
    'Trebuchet MS',
    'Ubuntu',
    'Veranda',
  ];
  const optionsdocumentFontTextSize = [
    'Very Small',
    'Small',
    'Medium',
    'Large',
  ];
  const dateFormat = [
    '1 / 22',
    '01 / 22',
    '01 / 2023',
    'Jan 2023',
    'January 2023',
  ];
  const optionsPageBorderStyles = [
    'solid',
    'dashed',
    'dotted',
    'double',
    'outset',
  ];
  const defaultOptionLayout = optionsLayout[0];
  const defaultOptionMargin = optionsMargin[0];
  const defaultOptionFormat = dateFormat[0];
  const defaultOptionDocumentHeadingTextStyle =
    optionsdocumentHeadingTextStyle[20];
  const defaultOptionDocumentBodyTextStyle = optionsdocumentBodyTextStyle[20];
  const defaultOptionDocumentFontTextSize = optionsdocumentFontTextSize[2];
  const defaultOptionsPageBorderStyles = optionsPageBorderStyles[0];

  const [displayBgColorPicker, setDisplayBgColorPicker] = useState(false);
  const [displayTextColorPicker, setDisplayTextColorPicker] = useState(false);
  const [pageBorderColorPicker, setPageBorderColorPicker] = useState(false);
  const [colorChange, setColorChange] = useState([
    { hex: '', rgba: { r: '', g: '', b: '', a: '' } },
  ]);

  const [toggleBorderOptions, setToggleBorderOptions] = useState(false);

  const popover = {
    position: 'absolute',
    zIndex: '2',
    top: '70px',
    right: '0',
  };
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  const handleColorChange = (color) => {
    // // console.log(color)
    if (displayBgColorPicker) {
      setSidePanelBgColor(color.hex);
    } else if (displayTextColorPicker) {
      setSidePanelTextColor(color.hex);
    }
    setColorChange({
      hex: color.hex,
      rgba: { r: color.rgb.r, g: color.rgb.g, b: color.rgb.b, a: color.rgb.a },
    });
  };

  // // console.log(colorChange)
  // // console.log(borderedPage);

  return (
    <div className='builder_subHeader'>
      <div className='builder_subHeader_main'>
        <div className='layout'>
          <Dropdown
            className='dropdown'
            options={optionsLayout}
            value={defaultOptionLayout}
            onChange={(e) => setPageLayout(e.value)}
            placeholder='Select an option'
          />
          PAGE LAYOUT
        </div>
        <div className='margins'>
          <Dropdown
            className='dropdown'
            options={optionsMargin}
            value={defaultOptionMargin}
            onChange={(e) => setDocummentMargin(e.value)}
            placeholder='Select an option'
          />
          PAGE MARGIN
        </div>
        <div className='height'>
          <div className='lineHeight'>
            <button
              className='minus'
              onClick={() =>
                lineHeight <= 0.6
                  ? null
                  : setLineHeight(Number(lineHeight - 0.1))
              }
            >
              -
            </button>
            <div>{parseFloat(lineHeight.toFixed(2))}</div>
            <button
              className='plus'
              onClick={() => setLineHeight(Number(lineHeight + 0.1))}
            >
              +
            </button>
          </div>
          LINE HEIGHT
        </div>
        <div className='dateFormat'>
          <Dropdown
            className='dropdown'
            options={dateFormat}
            value={defaultOptionFormat}
            onChange={(e) => setDocummentDateFormat(e.value)}
            placeholder='Select an option'
          />
          DATE FORMAT
        </div>
        <div className='textStyle'>
          <div
            className='textStyle_container'
            onClick={() =>
              setToggleSubHeaderTextStyle(!toggleSubHeaderTextStyle)
            }
          >
            <img src='/assets/images/textStyle.png' alt='textStyle' />
            TEXT STYLE
          </div>
          <div
            className={`textStyle_dropdown ${
              !toggleSubHeaderTextStyle ? 'displayNone' : null
            }`}
          >
            <div className='textStyle_dropdown_heading'>
              Heading:
              <Dropdown
                className='subHeader_dropdown_textStyle'
                options={optionsdocumentHeadingTextStyle}
                value={defaultOptionDocumentHeadingTextStyle}
                onChange={(e) => setDocumentHeadingTextStyle(e.value)}
                placeholder='Open Sans'
              />
            </div>
            <div className='textStyle_dropdown_body'>
              Body:
              <Dropdown
                className='subHeader_dropdown_textStyle'
                options={optionsdocumentBodyTextStyle}
                value={defaultOptionDocumentBodyTextStyle}
                onChange={(e) => setDocumentBodyTextStyle(e.value)}
                placeholder='Open Sans'
              />
            </div>
            <div className='textStyle_dropdown_textSize'>
              Font Size:
              <Dropdown
                className='subHeader_dropdown_textStyle'
                options={optionsdocumentFontTextSize}
                value={defaultOptionDocumentFontTextSize}
                onChange={(e) => setDocumentBodyTextSize(e.value)}
                placeholder='Small'
              />
            </div>
          </div>
        </div>
        <div className='documentBorder textStyle'>
          <div
            className='textStyle_container'
            onClick={() => setToggleBorderOptions(!toggleBorderOptions)}
          >
            <img src={bordePen} alt='BorderStyle' />
            BORDER
          </div>
          <div
            className={`borderOptionDropdown textStyle_dropdown ${
              !toggleBorderOptions ? 'displayNone' : null
            }`}
          >
            <div className='borderOptionDropdown_options'>
              <div
                className='borderOptionDropdown_options_btns'
                style={{
                  background: borderedPage ? null : 'black',
                  color: borderedPage ? null : 'white',
                  borderColor: borderedPage ? null : 'transparent',
                }}
                onClick={(e) => setBorderedPage(false)}
              >
                No
              </div>
              <div
                className='borderOptionDropdown_options_btns'
                style={{
                  background: borderedPage ? 'black' : null,
                  color: borderedPage ? 'white' : null,
                  borderColor: borderedPage ? 'transparent' : null,
                }}
                onClick={(e) => setBorderedPage(true)}
              >
                Yes
              </div>
            </div>
            {borderedPage ? (
              <div className='borderOptionDropdown_borderStyles'>
                <div className='borderOptionDropdown_border_width'>
                  <span>Width</span>
                  <div>
                    <input
                      type='number'
                      placeholder={pageBorderWidth}
                      onChange={(e) =>
                        setPageBorderWidth(Number(e.target.value))
                      }
                      name='pageBorderWidth'
                      id='pageBorderWidth'
                    />
                    px
                  </div>
                </div>
                <div className='borderOptionDropdown_border_style'>
                  <span>Style</span>

                  <Dropdown
                    className='borderOptionDropdown_border_style_dropdown'
                    options={optionsPageBorderStyles}
                    value={defaultOptionsPageBorderStyles}
                    onChange={(e) => setPageBorderStyle(e.value)}
                    placeholder='Open Sans'
                  />
                </div>
                {/* <div className="borderOptionDropdown_border_color">
            <span>Color</span>
            <div style={{background: pageBorderColor}} className="grey"  onClick={() => setPageBorderColorPicker(!pageBorderColorPicker)}></div>
          </div> */}
                {/* {pageBorderColorPicker ? ( */}
                {/* // <div style={ popover }>
            //   <div style={ cover } onClick={ () => pageBorderColorPicker ? setPageBorderColorPicker(false) : null }/>
            //   <ColorPic setPageBorderColorPicker={setPageBorderColorPicker} />
            // </div> */}
                {/* ) : null} */}
                <div></div>
                <div></div>
              </div>
            ) : null}
          </div>
        </div>
        {/* <div className="themeColor" onClick={() => (<ChromePicker />)} title='Not Available in Blank Template'  > */}
        <div className='themeColor'>
          <div>
            <span
              style={{ background: sidePanelBgColor }}
              className='blue'
              onClick={() => setDisplayBgColorPicker(!displayBgColorPicker)}
            ></span>
            <span
              style={{ background: sidePanelTextColor }}
              className='grey'
              onClick={() => setDisplayTextColorPicker(!displayTextColorPicker)}
            ></span>
          </div>
          THEME COLOR
        </div>
        {/* <ChromePicker className='colorPicker' /> */}
        {displayBgColorPicker || displayTextColorPicker ? (
          <div style={popover}>
            <div
              style={cover}
              onClick={() =>
                displayBgColorPicker
                  ? setDisplayBgColorPicker(false)
                  : displayTextColorPicker
                  ? setDisplayTextColorPicker(false)
                  : null
              }
            />
            <SwatchesPicker
              className='colorPicker'
              color={`${
                displayBgColorPicker
                  ? sidePanelBgColor
                  : displayTextColorPicker
                  ? sidePanelTextColor
                  : '#000'
              }`}
              onChangeComplete={(color) => handleColorChange(color)}
            />
            {/* <CirclePicker 
            className='colorPicker' 
            color = {`${displayBgColorPicker ? sidePanelBgColor : displayTextColorPicker ? sidePanelTextColor : '#000'}`}
            onChangeComplete= {color => handleColorChange(color)}
          /> */}
          </div>
        ) : null}
        {coverLetter && (
          <div className='textStyle'>
            <div
              className='textStyle_container'
              onClick={() => (
                setToggleSidebarDropdown(!toggleSidebarDropdown),
                setShowChangeTemplateSidebar(false),
                setShowChangeCategorySidebar(false)
              )}
            >
              {/* <img src='/assets/images/textStyle.png' alt='textStyle' /> */}
              <svg height='24px' viewBox='0 0 24 24' width='24px' fill=''>
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
              </svg>
              Change Design
            </div>
            <div
              onClick={() => (
                setToggleSidebarDropdown(false),
                setShowChangeTemplateSidebar(false),
                setShowChangeCategorySidebar(false)
              )}
              className={`change_template_sidebar_BG changeSidebarDropdown_BG ${
                !toggleSidebarDropdown ? 'displayNone' : null
              }`}
            ></div>
            <div
              className={`textStyle_dropdown changeSidebarDropdown ${
                !toggleSidebarDropdown ? 'displayNone' : null
              }`}
            >
              <div
                onClick={() => (
                  setShowChangeTemplateSidebar(!showChangeTemplateSidebar),
                  setShowChangeCategorySidebar(false)
                )}
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path d='M21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V6H6A3,3,0,0,0,3,9V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM15,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H7v7a3,3,0,0,0,3,3h5Zm4-4a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,3,3h3Z' />
                </svg>
                Change Design
              </div>
              <div
                onClick={() => (
                  setShowChangeCategorySidebar(!showChangeCategorySidebar),
                  setShowChangeTemplateSidebar(false)
                )}
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path d='M21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V6H6A3,3,0,0,0,3,9V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM15,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H7v7a3,3,0,0,0,3,3h5Zm4-4a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,3,3h3Z' />
                </svg>
                Change Category
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
