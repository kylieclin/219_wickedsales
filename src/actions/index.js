import types from './types';
import axios from 'axios';

export function signIn(user){
  return function(dispatch){
      axios.post('/api/signintest.php', user).then(resp=>{
        console.log(resp)
        if(resp.data.success){
            dispatch({
                type: types.SIGN_IN,
                email: resp.data.email
              });
        } else {
            dispatch({
                type: types.SIGN_IN_ERROR
            });
        }

      });
  }
}

export const checkAuth = ()=> async dispatch=>{
    const resp = await axios.get('/api/check-auth.php');

    if(resp.data.success){
        localStorage.setItem('signedIn', 'true');

        return dispatch({
            type: types.SIGN_IN,
            email: resp.data.email
        })
    } 
    
    return dispatch({
            type: types.SIGN_OUT
    })
    
}


export function signOut(){
    return function(dispatch){
        axios.get('/api/sign-out.php').then(resp=>{
            localStorage.removeItem('signedIn');
            if(resp.data.success){
                dispatch({
                    type: types.SIGN_OUT
                })
            }
        })
    }
   
}  

export function getProducts(){
    return function(dispatch){
        axios.get('/api/getproducts.php').then((resp)=>{
            dispatch({
                type:types.GET_ALL_PRODUCTS,
                products: resp.data.products
            })
        });
    }
}