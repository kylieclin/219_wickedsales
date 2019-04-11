import React from 'react';
import {Link} from 'react-router-dom';

export default props =>{
    return(
        <Link to="/cart" className="cart-link">
            <i className="nav-cart material-icons">shopping_cart</i>
            <span className="cart-count yellow darken-1">{props.items}</span>
        </Link>
    )
}