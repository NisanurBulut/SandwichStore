import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (accessToken, email) => {
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

export const authLogout = ()=>{
  return {
    type:actionTypes.AUTH_LOGOUT
  }
}
export const register = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const data = { email: email, password: password };
    axios
      .post('register', data)
      .then((response) => {
        dispatch(authSuccess(response.data.accessToken,email));
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
        dispatch(authSuccess(response.data.accessToken,email));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
