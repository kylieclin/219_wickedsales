import {combineReducers} from 'redux';
import { reducer as fromReducer } from 'redux-form'; //rename the reducer
import userReducer from './userreducer';

//bring all the reducer here in index

const rootReducer = combineReducers({
    form: fromReducer, //form has to be called form because redux default
    user: userReducer  //user.auth for accessing things userReducer {auth: false, username: ''}
});

export default rootReducer;