import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { formatMoney } from '../../helpers';
import './cart.scss';

class Cart extends Component{
    constructor(props){
        super(props);

        this.state ={
            items:[],
            meta:{}
        }
    }
    componentDidMount(){
        this.getCartData();
    }
    async getCartData(){
        const {data={}} = await axios.get('/api/getcartitems.php');

        if(data.success){
            this.setState({
                items: data.cartItems,
                meta: data.cartMetaData
            })
        } else {
            console.error('cart data fail to load');
        }
    }
    render(){
        console.log(this.state);
        const {items, meta} = this.state;
        let totalItems = 0;

        const cartItems = items.map(({name, price, image , quantity, id}) =>{
            totalItems += quantity;
            const itemtotalPrice = formatMoney(price* quantity);
            return(
                <tr key={id}>
                    <td><img className="cartimg" src={`/dist/${image}`} alt={`${image} product image`}/></td>
                    <td>{name}</td>
                    <td>{formatMoney(price)}</td>
                    <td>{quantity}</td>
                    <td>{itemtotalPrice}</td>
                </tr>
            )
        })

        return(
            <div className="cart">
                <h1 className="center">Ice-cream Cart</h1>
                <Link to="/products" className="continue-shopping">Continue Shopping</Link>
                <div className="total-items">{totalItems} items in the cart</div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Item Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                        <tr>
                            <td colSpan="5" className="total-price">Total: {formatMoney(meta.total)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart;
