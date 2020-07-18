/*
    used to save data in local storage
*/
import store from 'store';

const USER_KEY = 'user_key';
const TOKEN_KEY = 'token_key';

export default {
    // save user
    saveUser(user) {
        store.set(USER_KEY, user);
    },

    // read user
    getUser() {
        return store.get(USER_KEY) || {};
    },

    // delete user
    removeUser() {
        store.remove(USER_KEY);
    },

    // save token
    saveToken(token) {
        store.set(TOKEN_KEY, token);
    },

    // read token
    getToken() {
        return store.get(TOKEN_KEY) || "";
    },

    // remove token
    removeToken() {
        store.remove(TOKEN_KEY);
    }
}