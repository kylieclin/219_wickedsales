import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from '../../general/input';

const SignInForm = props =>{
    const {handleSubmit, signIn} = props

    return(
        <form onSubmit={handleSubmit(signIn)}>
            <div className="row">
                <Field id="email" name="email" component={Input} label="Email" col="s12" />
            </div>
            <div className="row">
                <Field id="password" name="password" component={Input} type="password"  label="Password" col="s12" />
            </div>

            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn pink darken-2">Sign In</button>
                </div>
            </div>
        </form>
    )
}

function validate({email, password}){
    const errors = {};

    if(!email){
        errors.email = 'Please enter your email'; //has to name email exact same thing as the name="email"
    }

    if(!password){
        errors.password = 'Please enter your password'; 
    }

    return errors;

}


export default reduxForm({
    form: 'sign-in-form',
    validate: validate
})(SignInForm); //high order function form redux form

//validate has to name validate because redux form