/*
    The moudle to contain some constants
*/

export const MONGO_BASE_URL = process.env.NODE_ENV === "production" ? "https://shopping-centre-inventory-mana.herokuapp.com/api" : "http://localhost:8080/api"; // the base url of MongoDB
