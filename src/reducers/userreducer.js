import types from '../actions/types';


const DEFAULT_STATE={
    auth: false,
    email: ''
}

// const exampleAction= {
//     type: 'LOG_USER_IN',
//     username: 'users name'
// }


function userReducer(state = DEFAULT_STATE , action){
    switch (action.type){
        case types.SIGN_IN:
        return { ...state, auth: true, email: action.email};
        case types.SIGN_OUT:
        return { ...DEFAULT_STATE};
        default:
        return state;
    }
}

export default userReducer;