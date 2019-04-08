import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    state={
        message: 'Checking auth...'
    }
    async checkAuth(){
        const resp = await axios.get('/api/test/check_auth.php');
        console.log('auth', resp);

        this.setState({
            message: resp.data.auth ? 'You are signed in ' : 'Please sign in'
        })
    }
    signIn = async()=>{
        const resp = await axios.get('/api/test/sign_in.php');
        console.log('Sign in',resp);

        this.checkAuth();
    }
    signOut= async() => {
        await axios.get('/api/test/sign_out.php');
        this.checkAuth();
    }
    componentDidMount(){
        this.checkAuth();
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <div className="center">
                    <button onClick={this.signIn} className="btn-large">Sign in</button>
                    <button onClick={this.signOut} className="btn-large red">Sign Out</button>
                </div>
            </div>
        )
    }
}

export default Test;