import { combineReducers } from "redux";
import {
  RECEIVE_SHOPPING_CENTRES_SUCCESS,
  RECEIVE_SHOPPING_CENTRES_FAIL,
  ADD_A_SHOPPING_CENTRE_SUCCESS,
  ADD_A_SHOPPING_CENTRE_FAIL,
  UPDATE_A_SHOPPING_CENTRE_SUCCESS,
  UPDATE_A_SHOPPING_CENTRE_FAIL,
  DELETE_A_SHOPPING_CENTRE_SUCCESS,
  DELETE_A_SHOPPING_CENTRE_FAIL
} from "../actionTypes";

const initialCentres = [];
const shoppingCentres = (state = initialCentres, action) => {
  switch (action.type) {
    case RECEIVE_SHOPPING_CENTRES_SUCCESS:
      return action.shoppingCentres;
    case RECEIVE_SHOPPING_CENTRES_FAIL:
      return [];
    default:
      return state;
  }
};

const initialCentre = {};
const shoppingCentre = (state = initialCentre, action) => {
  switch (action.type) {
    case ADD_A_SHOPPING_CENTRE_SUCCESS:
      return action.result;
    case ADD_A_SHOPPING_CENTRE_FAIL:
      return action.result;  
    case UPDATE_A_SHOPPING_CENTRE_SUCCESS:
      return action.result;
    case UPDATE_A_SHOPPING_CENTRE_FAIL:
      return action.result;    
    case DELETE_A_SHOPPING_CENTRE_SUCCESS:
      return action.result
    case DELETE_A_SHOPPING_CENTRE_FAIL:
        return {};    
    default:
      return state;
  }
};

export default combineReducers({
  shoppingCentres,
  shoppingCentre
});
