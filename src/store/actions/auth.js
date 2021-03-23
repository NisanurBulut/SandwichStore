import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};
export const registerSuccess = (authData) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};
export const register = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const data = { email: email, password: password };
    axios
      .post('register', data)
      .then((response) => {
        const responseData = {
          email: email,
          password: password,
          accessToken: response.data.accessToken,
        };
        console.log(responseData);
        dispatch(registerSuccess(responseData));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const data = { email: email, password: password };
    console.log(data);
    axios
      .post('login', data)
      .then((response) => {
        const responseData = {
          email: email,
          password: password,
          accessToken: response.data.accessToken,
        };
        console.log(responseData);
        dispatch(authSuccess(responseData));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
