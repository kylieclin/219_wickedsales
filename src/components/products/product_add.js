import React, {Component} from 'react';
import axios from 'axios';


class ProductAdd extends Component{
    constructor(props){
        super(props);

        this.state = {
            quantity: 1,
            message: ''
        }
        this.addQuantity = this.addQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
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
        const id = this.props.product_id;
        const resp = await axios.get(`/api/addcartitem.php?product_id=${id}`);

        try{
            if(resp.data.success){
                this.setState({
                    message: 'Product added to cart'
                })
            }
        } catch(error) {

        }

    }
    render(){
        return(
            <div className="right-align add-to-cart row">
                <div className="qty-container">
                    <button className="btn-small btn-floating pink darken-1" onClick={this.decreaseQuantity}><i className="material-icons">remove</i></button>
                    <div className="product-qty pink lighten-5">{this.state.quantity}</div>
                    <button className="btn-small btn-floating pink darken-1" onClick={this.addQuantity}><i className="material-icons">add</i></button>
                </div>
                <div className="add-to-cart-btn">
                    <button className="btn pink darken-2" onClick={this.addToCart}>
                        <i className="material-icons">add_shopping_cart</i>
                    </button> 
                </div>
                <h6 className="red-text">{this.state.message}</h6>
            </div>
        )
    }
}

export default ProductAdd;