import { combineReducers } from 'redux';

import authentication from './authenticationReducers';
import shoppingCentres from './shoppingCentresReducers';


const rootReducer = combineReducers({
    authentication,
    shoppingCentres
});

export default rootReducer;