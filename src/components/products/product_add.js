import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Modal from '../modal';
import {formatMoney} from '../../helpers';

class ProductAdd extends Component{
    constructor(props){
        super(props);

        this.state = {
            quantity: 1,
            modalOpen: false,
            totalPrice: 0,
            cartQuantity: 0
        }
        this.addQuantity = this.addQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.goCart = this.goCart.bind(this);
    }
    addQuantity(){
        this.setState({
            quantity: this.state.quantity +1
        })
    }
    decreaseQuantity =() =>{
        if(this.state.quantity > 1){
            this.setState({
            quantity: this.state.quantity -1
            })
        }

    }
    async addToCart(){
        const {product_id:id, updateCart} = this.props;
        const {quantity} = this.state;
        const resp = await axios.get(`/api/addcartitem.php?product_id=${id}&quantity=${quantity}`);
        if(resp.data.success){

            const{cartCount, cartTotal} = resp.data
            this.setState({
                totalPrice: cartTotal,
                cartQuantity: cartCount,
                modalOpen: true
            })
            updateCart(resp.data.cartCount);
        }
    }
    closeModal(){
        this.setState({
            modalOpen: false,
            quantity: 1
        })
    }
    goCart(){
        this.props.history.push('/cart');
    }
    render(){
        const { modalOpen, totalPrice, cartQuantity, quantity} = this.state;

        return(
            <div className="right-align add-to-cart row">
                <div className="qty-container">
                    <button className="btn-small btn-floating pink darken-1" onClick={this.decreaseQuantity}><i className="material-icons">remove</i></button>
                    <div className="product-qty pink lighten-5">{quantity}</div>
                    <button className="btn-small btn-floating pink darken-1" onClick={this.addQuantity}><i className="material-icons">add</i></button>
                </div>
                <div className="add-to-cart-btn">
                    <button className="btn pink darken-2" onClick={this.addToCart}>
                        <i className="material-icons">add_shopping_cart</i>
                    </button> 
                </div>
                <Modal defaultAction={this.closeModal} isOpen={modalOpen} defaultActionText="continue shopping" secondAction={this.goCart} secondActionText='go to cart'>
                    <h4 className="center">{quantity} item{quantity>1 &&'s'} added To Cart</h4>

                    <div className="row center">
                        <div className="col s6">Cart Total Items</div>
                        <div className="col s6">{cartQuantity}</div>
                    </div>
                    <div className="row center">
                        <div className="col s6">Cart Total Price</div>
                        <div className="col s6">{formatMoney(totalPrice)}</div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default withRouter(ProductAdd);