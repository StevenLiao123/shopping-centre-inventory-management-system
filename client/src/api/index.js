/*
    This module is providing API functions for different requests.
*/
import ajax from "./ajax";
import { MONGO_BASE_URL } from "../utils/constants";

// sign up
export const reqSignup = (username, password) => ajax(MONGO_BASE_URL + "/auth/signup", {username, password}, "POST");

// login
export const reqLogin = (username, password) => ajax(MONGO_BASE_URL + "/auth/login", {username, password}, "POST");

// get all shopping centre's data
export const reqAllCentres = () => ajax(MONGO_BASE_URL + "/shopping-centres", {}, "GET");

// add a new shopping centre
export const reqAddACentre = (name, address) => ajax(MONGO_BASE_URL + "/shopping-centres/add", {name, address}, "POST");

// update a shopping centre
export const reqUpdateACentre = (_id, name, address) => ajax(MONGO_BASE_URL + "/shopping-centres/update", {_id, name, address}, "POST");

// delete a shopping centre
export const reqDeleteACentre = (_id) => ajax(MONGO_BASE_URL + "/shopping-centres/delete", {_id}, "POST");





