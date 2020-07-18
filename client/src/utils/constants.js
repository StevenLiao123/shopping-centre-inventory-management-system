/*
    The moudle to contain some constants
*/

export const MONGO_BASE_URL = process.env.NODE_ENV === "production" ? "https://shrouded-tor-98527.herokuapp.com/api" : "http://localhost:8080/api"; // the base url of MongoDB
