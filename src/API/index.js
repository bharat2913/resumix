import axios from 'axios';

const apiUrl = {
  accounts: 'accounts',
  authenticate: 'accounts/authenticate',
  refreshToken: 'accounts/refresh-token',
  revokeToken: 'accounts/revoke-token',
  register: 'accounts/register',
  verifyEmail: 'accounts/verify-email',
  forgotPassword: 'accounts/forgot-password',
  validateResetToken: 'accounts/validate-reset-token',
  resetPassword: 'accounts/reset-password',
  resendEmail: '/accounts/resend-email',
  authenticateSocial: '/accounts/authenticate-social',
  registerSocial: '/accounts/register-social',

  linkedIn: '/linkedIn',
  createLinkedIn: '/linkedIn/create',
};

const updateDownloadsById = async (id, data) => {
  try {
    const res = await axios.get(`/accounts/downloads/${id}`);
    // const res = await axios.post(`http://localhost:4000/accounts/downloads/${id}`,data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const getDownloadsById = async (id) => {
  try {
    const res = await axios.get(`/accounts/downloads/${id}`);
    // const res = await axios.get(`http://localhost:4000/accounts/downloads/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

// /**************************************************************************************************************/

// /**************************************************************************************************************/

const delete_resume = async (id) => {
  try {
    // const res = await axios.delete(apiUrl.linkedIn + `/${id}`);
    const res = await axios.delete(`/resume/${id}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const update_resume = async (id, data, token) => {
  try {
    // const res = await axios.put(apiUrl.linkedIn + `/${id}`, linkedIn_data);
    const res = await axios.put(`/resume/${id}`, data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};
const create_resume = async (data, token) => {
  try {
    // const res = await axios.post('/resume/create', data, token);
    const res = await axios.post('/resume/create', data, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    console.log(Error.response);
    const err = Error.response.data.message;
    return err;
  }
};

const get_resume_by_userId = async (userId) => {
  try {
    // const res = await axios.get(apiUrl.linkedIn + `/${id}`);
    const res = await axios.get(`/resume/getByUserId/${userId}`);
    // // console.log(res)
    return res;
  } catch (Error) {
    console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const get_resume_by_id = async (id, token) => {
  try {
    const res = await axios.get(`/resume/${id}`, token);
    // const res = await axios.get(`/resume/${id}`, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message);
    const err = Error.response.data.message;
    return err;
  }
};

const get_resumes = async () => {
  try {
    // const res = await axios.get(apiUrl.linkedIn);
    const res = await axios.get('/resume/');
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

// /**************************************************************************************************************/

const get_account_by_id = async (id, token) => {
  try {
    // const res = await axios.get(`/accounts/${id}`, token);
    const res = await axios.get(apiUrl.accounts + `/${id}`, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const update_account_by_id = async (id, data, token) => {
  try {
    // const res = await axios.put(`/accounts/${id}`,token,data);
    const res = await axios.put(apiUrl.accounts + `/${id}`, token, data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error);
    const err = Error.response.data.message;
    return err;
  }
};

const resend_email = async (email) => {
  try {
    const data = {
      email: email,
    };
    const res = await axios.post(apiUrl.resendEmail, data);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const reset_password = async (data) => {
  try {
    const resetData = {
      token: data.token,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    const res = await axios.post(apiUrl.resetPassword, resetData);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const verify_email = async (token) => {
  try {
    const verifyEmailToken = {
      token: token,
    };

    const res = await axios.post(apiUrl.verifyEmail, verifyEmailToken);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const forgot_password = async (email) => {
  try {
    const emailData = {
      email: email,
    };

    const res = await axios.post(apiUrl.forgotPassword, emailData);
    // // console.log(res)
    return res;
  } catch (Error) {
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const register_social = async (data) => {
  try {
    const regData = {
      title: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      'facebook.id': data.facebook.id,
      'facebook.email': data.facebook.email,
      'facebook.token': data.facebook.token,
      'facebook.image': data.facebook.image,
      'google.id': data.google.id,
      'google.email': data.google.email,
      'google.token': data.google.token,
      'google.image': data.google.image,
      acceptTerms: data.acceptTerms,
      stripeId: data.stripeId,
    };

    const res = await axios.post(apiUrl.registerSocial, regData);
    // const res = await axios.post('//accounts/register-social',regData);
    // console.log(res);
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const authenticate_social = async (data) => {
  try {
    const socialLoginData = {
      email: data.email,
      type: data.type,
      token: data.token,
    };
    // console.log(socialLoginData);

    const res = await axios.post(apiUrl.authenticateSocial, socialLoginData);
    // console.log(res);
    return res;
  } catch (Error) {
    // console.log(data);
    // // console.log(Error.response.data.message)
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const register = async (data) => {
  try {
    const regData = {
      title: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      acceptTerms: data.acceptTerms,
    };

    const res = await axios.post(apiUrl.register, regData);
    // const res = await axios.post('/accounts/register',regData);
    // console.log(res);
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const authenticate = async (data) => {
  try {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    const res = await axios.post(apiUrl.authenticate, loginData);
    // const res = await axios.post('/accounts/authenticate',loginData);
    // // console.log(res)
    return res;
  } catch (Error) {
    // // console.log(Error.response.data.message)
    // console.error(Error.response.data.message)
    const err = Error.response.data.message;
    return err;
  }
};

const getAllAccounts = async (token) => {
  try {
    const res = await axios.get(apiUrl.accounts, token);
    // // console.log(res)
    return res;
  } catch (Error) {
    const err = Error.response.data.message;
    return err;
  }
};

export {
  delete_resume,
  update_resume,
  create_resume,
  get_resume_by_userId,
  get_resume_by_id,
  get_resumes,
  update_account_by_id,
  register,
  authenticate,
  verify_email,
  forgot_password,
  reset_password,
  get_account_by_id,
  resend_email,
  register_social,
  authenticate_social,
  getAllAccounts,
  updateDownloadsById,
  getDownloadsById,
};
