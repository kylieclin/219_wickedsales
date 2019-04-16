import React, {Component} from 'react';
import SignInForm from './sign_in_form';
import './sign_in.scss';

class SignIn extends Component{
    constructor(props){
        super(props)

        // this.handleSignIn = this.handleSignIn.bind(this);
    }
    handleSignIn(values){
        console.log(values)
    }

    render(){
        return(
            <div>
                <h1 className="center">Sign In</h1>
                <SignInForm signIn={this.handleSignIn}/>
            </div>
        )
    }
}

export default SignIn;