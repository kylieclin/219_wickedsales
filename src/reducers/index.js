import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'; //rename the reducer
import userReducer from './userreducer';
import productReducer from './products_reducer';

//bring all the reducer here in index

const rootReducer = combineReducers({
    form: formReducer, //form has to be called form because redux default
    user: userReducer,  //user.auth for accessing things userReducer {auth: false, username: ''}
    product: productReducer
});

export default rootReducer;