import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { async } from 'q';

class Cart extends Component{
    getCartData = async ()=>{
        //const resp = await axios.get('/api/getcartitem/php')
    }
    render(){
        return(
            <div>
                <h1>CART</h1>
                <Link to="/products">Continue Shopping</Link>
            </div>
        )
    }
}

export default Cart;
