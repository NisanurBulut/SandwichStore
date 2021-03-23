import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (accessToken, email) => {
  localStorage.setItem('token', accessToken);
  localStorage.setItem('userId', email);
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: accessToken,
    userId: email,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
export const register = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const data = { email: email, password: password };
    axios
      .post('register', data)
      .then((response) => {
        dispatch(authSuccess(response.data.accessToken, email));
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
        dispatch(authSuccess(response.data.accessToken, email));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) {
      dispatch(authLogout());
    } else {
      dispatch(authSuccess(token, userId));
    }
  };
};
