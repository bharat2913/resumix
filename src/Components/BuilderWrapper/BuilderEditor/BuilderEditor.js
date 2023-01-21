import React, { useState, Component, useEffect } from 'react';

import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
  convertFromRaw,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import draftToMarkdown from 'draftjs-to-markdown';
import removeMarkdown from 'markdown-to-text';
// import { convert } from 'html-to-text';

import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import colorPickerIcon from '../../../Assets/svg/colorPalette.svg';
import arrowUp from '../../../Assets/svg/arrowUp.svg';

import PropTypes from 'prop-types';
import { CompactPicker, ChromePicker } from 'react-color';

const ColorPic = ({ onChange, currentState, expanded, onExpandEvent }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleChange = (color) => {
    // const { onChange } = this.props;
    onChange('color', color.hex);
  };

  const [showSketchPicker, setShowSketchPicker] = useState(false);

  const renderModal = () => {
    const { color } = currentState;
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

export default function BuilderEditor({
  content,
  dataArray,
  setEditorData,
  readOnly,
}) {
  const [contentState, setContentState] = useState(EditorState.createEmpty());
  // content
  //     ? EditorState.createWithContent(convertFromRaw(content))
  //     : EditorState.createEmpty()
  // // console.log('contentSTate', contentState);
  // // console.log(
  //   'htmlToDraft'
  //   // convert('<div>Hello World</div>', { wordwrap: 130 })
  // );
  // // console.log('draftToMarkdown', draftToMarkdown(contentState));
  // const text =
  //   dataArray &&
  //   dataArray.map((data) => removeMarkdown(draftToMarkdown(data))).toString();

  // function downloadContent(name, content) {
  //   var atag = document.createElement("a");
  //   var file = new Blob([content], {type: 'text/plain'});
  //   atag.href = URL.createObjectURL(file);
  //   atag.download = name;
  //   atag.click();
  // }

  // // console.log(text && text);
  // // console.log('dataArray', dataArray ? dataArray : null);

  // // console.log('removeMarkdown', removeMarkdown(draftToMarkdown(contentState)));
  useEffect(() => {
    // text.push(removeMarkdown(draftToMarkdown(contentState)));
    // // console.log('text', text);
  });
  const [editorState, setEditorState] = useState('');
  const onContentStateChange = (upadatedContent) => {
    setContentState(upadatedContent);
    // content = upadatedContent;

    // // console.log('JSON.stringify', JSON.stringify(upadatedContent, null, 4));
    // // console.log('JSON.stringify', draftToMarkdown(upadatedContent));
    // // console.log('After converted to Raw', convertToRaw(upadatedContent));
  };
  function onChange(editorState) {
    setEditorData && setEditorData(editorState);
    // const contentState = editorState.getCurrentContent();
    // // console.log('editorState', JSON.stringify(draftToHtml(editorState)));
    // const afterConvertFromRaw = convertFromRaw(editorState);
    // // console.log('afterConvertFromRaw', afterConvertFromRaw);
    // // console.log(
    //   'afterConvertToRaw',
    //   JSON.stringify(convertToRaw(afterConvertFromRaw))
    // );
    // // console.log('editorState', editorState);
    // // console.log('Before converted to Raw', contentState);
    // // console.log('After converted to Raw', convertToRaw(contentState));
  }

  return (
    <>
      <Editor
        readOnly={readOnly || false}
        toolbarOnFocus
        className='ClassAdded'
        // editorState={contentState}
        initialContentState={content}
        editorContent={contentState}
        onContentStateChange={onContentStateChange}
        onChange={(editorState) => onChange(editorState)}
        wrapperClassName='wrapper'
        editorClassName='editor'
        toolbarClassName='toolbar '
        toolbar={{
          options: [
            'history',
            'inline',
            'blockType',
            'fontSize',
            'list',
            'textAlign',
            'colorPicker',
            'fontFamily',
            'emoji',
            'link',
            'remove',
          ],
          inline: {
            // inDropdown: true,
            options: ['bold', 'italic', 'underline'],
            bold: { className: 'bordered-option-classname' },
            italic: { className: 'bordered-option-classname' },
            underline: { className: 'bordered-option-classname' },
            strikethrough: { className: 'bordered-option-classname' },
            code: { className: 'bordered-option-classname' },
          },
          blockType: {
            className: 'bordered-option-classname',
          },
          fontSize: {
            // icon: fontSize,
            className: 'bordered-option-classname',
            options: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
              36, 48, 60, 72, 96,
            ],
            // className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
          fontFamily: {
            options: [ 'Arial', 'Arial Narrow', 'Avenir', 'Book Antiqua', 'Calibri', 'Cambria', 'Century Sans', 'Constantia', 'Garamond', 'Geneva', 
              'Georama', 'Georgia', 'Gill Sans', 'Helvetica', 'Karla', 'Lato', 'Merriweather', 'Montserrat', 'Open Sans', 'Oswald', 'Poppins', 
              'Raleway', 'Roboto', 'Tahoma', 'Trebuchet MS', 'Ubuntu', 'Veranda', ], // prettier-ignore
            className: 'bordered-option-classname',
          },
          emoji: {
            className: 'demo-option-custom',
            popupClassName: 'toolbar_emoji_popup',
            emojis: [
              '★', '✪', '✯', '✰', 
              '☛', '☚', '☜', '☝', '☞', '☟', '⇨', '►', '◄', '►', '»',
              '▪️', '♦', '◆', '●',
              '✔', '✘', '☐', '☑',
              '✉', '✍', '✎', '✏', '✑', '⌨',
              '✆', '☎', '☏', '📞',
              '👤', '👦', '👧', '👨', '👩', '👪', '👫', '👬', '👭', '👮', '👯',
              '🌏', '🌙', '🌟', '🌠', 
              '🌴', '🌵', '🌷', '🌸', '🌼', '🍀', '🍁', '🍂', '🍎', '🔥',
              '👆', '👇', '👈', '👉', '👊', '👋', '👌', '👍', '👏', '👐', 
              '👑', '💡', '💯', '📎', '🔍', '🔎', '🔑', '🎯', '🏆', '✂️',
              '💰', '💱', '💲', '💳', '📈', '📊',
              '💊', '🔠', '🏢', '💉', 
              '💻', '💾', '💿', '📁', '📱', '📶', '📡',
              '🔧', '🔨', '⚒', '🏠',
              '📖', '📰', '📷', '📹', '📐',
              '👗', '👘', '👚', '👛', '👜', '👝', '👞', '👟', '👠', '👡', '👢', '💎', '👓',
              '☲☲☲☲☲☲☲☲☲', '▄▀▄▀▄▀▄▀▄▀▄', '▬▬▬▬▬▬▬▬', '▓▒░▓▒░▓▒░▓▒',
            ], // prettier-ignore
          },
          list: {
            options: ['unordered', 'ordered'],
          },
          colorPicker: {
            // icon: colorPickerIcon,
            className: 'toolbarColorPicker',
            component: ColorPic,
          },
          link: {
            inDropdown: false,
            className: 'toolbar_link',
            component: undefined,
            popupClassName: 'toolbar_link_popup',
            dropdownClassName: 'toolbar_link_dropdown',
            showOpenOptionOnHover: false,
            defaultTargetOption: '_self',
            options: ['link', 'unlink'],
            link: { className: 'toolbarLink' },
            unlink: { className: undefined },
            linkCallback: undefined,
          },
          textAlign: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ['left', 'center', 'right', 'justify'],
            left: { className: 'text_left' },
            center: { className: 'text_center' },
            right: { className: 'text_right' },
            justify: { className: 'text_justify' },
          },
        }}
      />
      {/* <textarea disabled value={JSON.stringify(contentState, null, 4)} /> */}
    </>
  );
}
