


const DEFAULT_STATE={
    auth: false,
    username: ''
}

// const exampleAction= {
//     type: 'LOG_USER_IN',
//     username: 'users name'
// }


function userReducer(state = DEFAULT_STATE , action){
    switch (action.type){
        case 'SIGN_IN':
        return { ...state, auth: true};
        default:
        return state;
    }
}

export default userReducer;