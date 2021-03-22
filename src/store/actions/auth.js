import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSucces = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const data = { email: email, password: password };
    axios
      .post('login', data)
      .then((response) => {
        const responseData = {
          email: email,
          password: password,
          accessToken: response.data.accessToken,
        };
        console.log(responseData);
        dispatch(authSucces(responseData));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
