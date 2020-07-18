import { reqAllCentres, reqAddACentre, reqUpdateACentre, reqDeleteACentre } from "../../../api";
import {
    RECEIVE_SHOPPING_CENTRES_SUCCESS,
    RECEIVE_SHOPPING_CENTRES_FAIL,
    ADD_A_SHOPPING_CENTRE_SUCCESS,
    ADD_A_SHOPPING_CENTRE_FAIL,
    UPDATE_A_SHOPPING_CENTRE_SUCCESS,
    UPDATE_A_SHOPPING_CENTRE_FAIL,
    DELETE_A_SHOPPING_CENTRE_SUCCESS,
    DELETE_A_SHOPPING_CENTRE_FAIL
} from "../../actionTypes";

export const receiveAllCentresSuccess = shoppingCentres => ({
  type: RECEIVE_SHOPPING_CENTRES_SUCCESS,
  shoppingCentres
});

export const receiveAllCentresFail = result => ({
  type: RECEIVE_SHOPPING_CENTRES_FAIL,
  result
});

export const addAShoppingCentreSuccess = result => ({
  type: ADD_A_SHOPPING_CENTRE_SUCCESS,
  result
});

export const addAShoppingCentreFail = result => ({
    type: ADD_A_SHOPPING_CENTRE_FAIL,
    result
});

export const updateAShoppingCentreSuccess = result => ({
    type: UPDATE_A_SHOPPING_CENTRE_SUCCESS,
    result
});

export const updateAShoppingCentreFail = result => ({
    type: UPDATE_A_SHOPPING_CENTRE_FAIL,
    result
});

export const deleteAShoppingCentreSuccess = result => ({
    type: DELETE_A_SHOPPING_CENTRE_SUCCESS,
    result
});

export const deleteAShoppingCentreFail = result => ({
    type: DELETE_A_SHOPPING_CENTRE_FAIL,
    result
});

// get all shopping centres
export const reqAllShoppingCentres = () => {
  return async dispatch => {
    const result = await reqAllCentres();
    const status = result ? result.status : null;
    if (status === 200 || status === 201 || status === 204) {
      const shoppingCentres = result.data.centres;
      console.log(shoppingCentres);
      dispatch(receiveAllCentresSuccess(shoppingCentres));
    } else {
      dispatch(receiveAllCentresFail(result));
    }
  };
};

// add a centre
export const reqAddCentre = (name, address) => {
  return async dispatch => {
    const result = await reqAddACentre(name, address);
    const status = result ? result.status : null;
    if (status === 200 || status === 201 || status === 204) {
      dispatch(addAShoppingCentreSuccess(result));
    } else {
      dispatch(addAShoppingCentreFail(result));
    }
  }
};

// update a centre
export const reqUpdateCentre = (_id, name, address) => {
  return async dispatch => {
    const result = await reqUpdateACentre(_id, name, address);
    const status = result ? result.status : null;
    if (status === 200 || status === 201 || status === 204) {
      dispatch(updateAShoppingCentreSuccess(result));
    } else {
      dispatch(updateAShoppingCentreFail(result));
    }
  }
};

// delete a centre
export const reqDeleteCentre = (_id) => {
  return async dispatch => {
    const result = await reqDeleteACentre(_id);
    const status = result ? result.status : null;
    if (status === 200 || status === 201 || status === 204) {
      dispatch(deleteAShoppingCentreSuccess(result));
    } else {
      dispatch(deleteAShoppingCentreFail(result));
    }
  }
};
