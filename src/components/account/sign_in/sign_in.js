import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignInForm from './sign_in_form';
import {signIn} from '../../../actions';
import './sign_in.scss';

class SignIn extends Component{
    constructor(props){
        super(props)

        this.handleSignIn = this.handleSignIn.bind(this);
    }
    handleSignIn(values){
        this.props.signIn(values);
        // this.props.history.push("/products");
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

export default connect(null, {
    signIn: signIn
})(SignIn);