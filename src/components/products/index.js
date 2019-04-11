import React from 'react';
import {Route} from 'react-router-dom';
import ProductList from './product_list';
import ProductDetails from './product_details';
import './products.scss';

export default props => {

        return (
            <div className="product-routes products">
                <Route exact path="/products" component={ProductList} />
                <Route path="/products/:product_id" render={route=><ProductDetails {...route} updateCart={props.updateCart}/>} />
            </div>
        )
    
}
