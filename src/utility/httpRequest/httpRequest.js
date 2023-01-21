import * as raw from 'retry-axios';
import axios from 'axios';
import { getEnv } from './utility';
import { getBaseUrl } from './constantsMapping';

let setHeader = (url, data, type, baseUrl) => {
  return new Promise(function (resolve, reject) {
    const opts = {
      method: type,
      path: url,
      service: 'execute-api',
      headers: {},
      body: data ? JSON.stringify(data) : '',
    };
    // console.log('opts', opts);
    if (type === 'GET' || type === 'POST' || type === 'PUT') {
      opts.header['Content-Type'] = 'application/json';
    }
  });
};

let doGet = (url, params) => {
  if (getEnv === 'test') {
  } else {
    rax.attach();
    let response = new Promise(function (resolve, reject) {
      axios
        .get(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return response;
  }
};

let doPost = (url, data) => {
  return doCommonAxiosCall(url, 'POST', data);
};

let doPut = (url, data) => {
  return doCommonAxiosCall(url, 'PUT', data);
};

let doDelete = (url, data) => {
  return doCommonAxiosCall(url, 'DELETE', data);
};

const doCommonAxiosCall = () => {
  if (getEnv === 'test') {
  } else {
    const response = new Promise(function (resolve, reject) {
      setHeader(url, data, method);
    });
    return response;
  }
};
