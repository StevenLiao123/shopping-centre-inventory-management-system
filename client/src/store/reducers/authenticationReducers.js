import { combineReducers } from "redux";
import storageUtils from "../../utils/storageUtils";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  RECEIVE_TOKEN_SUCCESS,
  RECEIVE_TOKEN_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  RESET_USER,
  RESET_TOKEN
} from "../actionTypes";

// Sign up
const initialSignUp = {};
function signup(state = initialSignUp, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return action.result;
    case SIGN_UP_FAIL:
      return action.result;  
    default:
      return state;
  }
}

// user
const initialAuthenticatedUser = storageUtils.getUser();
function user(state = initialAuthenticatedUser, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user;
    case LOGIN_FAIL:
      return action.result  
    case RESET_USER:
      return {};
    default:
      return state;
  }
}

// The function is used to manage the current token
const initialToken = storageUtils.getToken();
function token(state = initialToken, action) {
  switch (action.type) {
    case RECEIVE_TOKEN_SUCCESS:
      return action.token;
    case RECEIVE_TOKEN_FAIL:
      return action.result;  
    case RESET_TOKEN:
      return "";
    default:
      return state;
  }
}

export default combineReducers({
  user,
  signup,
  token
});