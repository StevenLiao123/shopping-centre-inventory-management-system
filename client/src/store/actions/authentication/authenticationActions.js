import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  RECEIVE_TOKEN_SUCCESS,
  RECEIVE_TOKEN_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  RESET_USER
} from "../../actionTypes";
import { reqLogin, reqSignup } from "../../../api";
import storageUtils from "../../../utils/storageUtils";
import memoryUtils from "../../../utils/memoryUtils";

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
});

export const loginFail = result => ({
  type: LOGIN_FAIL,
  result
});

export const receiveTokenSuccess = token => ({
  type: RECEIVE_TOKEN_SUCCESS,
  token
});

export const receiveTokenFail = result => ({
  type: RECEIVE_TOKEN_FAIL,
  result
});

export const signUpSuccess = result => ({
  type: SIGN_UP_SUCCESS,
  result
});

export const signUpFail = result => ({
  type: SIGN_UP_FAIL,
  result
});

// logout
export const logout = () => {
  // delete the user in the local storage
  storageUtils.removeUser();
  storageUtils.removeToken();
  //return action
  return {
    type: RESET_USER
  };
};

// Sign up
export const signUp = (username, password) => {
  return async dispatch => {
    const result = await reqSignup(username, password);
    const status = result ? result.status : null;
    if (status === 200 || status === 201 || status === 204) {
      dispatch(signUpSuccess(result));
    } else {
      dispatch(signUpFail(result));
    }
    return null;
  };
};

// login
export const login = (username, password) => {
  return async dispatch => {
    const result = await reqLogin(username, password);
    const status = result ? result.status : null;
    if (status === 200 || status === 201 || status === 204) {
      const user = result.data ? result.data.user[0] : null;
      const token = result.data ? result.data.token : null;
      // save the user to the local storage
      storageUtils.saveUser(user);
      storageUtils.saveToken(token);
      dispatch(loginSuccess(user));
      dispatch(receiveTokenSuccess(token));
    } else {
      dispatch(loginFail(result));
      dispatch(receiveTokenFail(result));
      memoryUtils.user = {};
      memoryUtils.token = "";
      dispatch(logout());
    }
    return null;
  };
};
