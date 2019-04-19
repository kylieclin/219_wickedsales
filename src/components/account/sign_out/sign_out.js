import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../../actions';
import './sign_out.scss';


class SignOut extends Component{
    componentDidMount(){
        this.props.canbeanyname()
    }
    render(){
        return(
            <div className="sign-out">
                <div className="sign-out-header center">
                    <h1>No you are not signing out!</h1>
                    <h2>Alright, sign you out!</h2>
                </div>

            </div>
        )
    }
}

export default connect(null,{
    canbeanyname: signOut
})(SignOut);