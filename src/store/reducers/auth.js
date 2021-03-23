import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  error: null,
  loading: false,
  userId: null,
};
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.accessToken,
    userId: action.email,
    error: null,
    loading: false,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObject(state, { error: null, loading: true });
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return updateObject(state, { error: action.error, loading: false });
    case actionTypes.REGISTER_SUCCESS:
      return authSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
