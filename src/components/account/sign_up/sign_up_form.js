import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from '../../general/input';


const SignUpForm= props=>{
    const {signUp, handleSubmit} = props
    return(
        <form onSubmit={handleSubmit(signUp)}>
            <div className="row">
                <Field id="name" name="name" label="Name" col="s12" component={Input} />
            </div>
            <div className="row">
                <Field id="email" name="email" label="Email" col="s12" component={Input} />
            </div>
            <div className="row">
                <Field id="password" name="password" label="Password" type="password" col="s6" component={Input} />
                <Field id="confirm_password" name="confirm_password" label="Confirm Password" type="password" col="s6" component={Input} />
            </div>
            <div className="row">
                <div className="col s12 right-align ">
                    <button className="btn pink darken-2">Submit</button>
                </div> 
            </div>
        </form>
    )

}

function validate({email, name, password, confirm_password}){
    const error ={};

    if(!email){
      error.email = 'Please enter email'  
    }
    if(!name){
      error.name = 'Please enter name'  
    }
    if(!password){
      error.password = 'Please enter password'  
    }
    if(!confirm_password || password != confirm_password){
      error.confirm_password = 'Password does not match'  
    }

    return error;
}


export default reduxForm({
    form: 'sign-up-form',
    validate: validate
})(SignUpForm)