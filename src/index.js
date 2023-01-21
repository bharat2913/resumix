import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import jwt from 'jsonwebtoken';
import Navigation from './routes';
import reportWebVitals from './reportWebVitals';

const jwtToken = localStorage.getItem('jwtToken');
let tokenValidation = false;
jwt.verify(
  jwtToken,
  'RESUMEBUILDERSECURITYSTRINGTOGENRATETHENEWTOKENFORTHEUSER',
  function (err, decoded) {
    if (err) {
      tokenValidation = false;
    } else {
      tokenValidation = true;
    }
  }
);
// // console.log(tokenValidation);

ReactDOM.render(
  <React.StrictMode>
    <Navigation tokenValidation={tokenValidation} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(// console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
