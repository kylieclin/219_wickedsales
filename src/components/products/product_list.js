import React , {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ProductItem from './product_item';
import {getProducts} from '../../actions';

class ProductList extends Component{
    constructor(props){
        super(props)
        this.goToDetails = this.goToDetails.bind(this);
    }
    componentDidMount(){
        this.props.getProducts();
    }
    goToDetails(id){ //redirect
        this.props.history.push(`/products/${id}`);
    }
    render(){
        const {products} = this.props;
        const productlist = products.map(product =>{
            return <ProductItem key={product.id} {...product} gotodetails={this.goToDetails}/>
        })

        return (
            <div className="product-list">
                <h1 className="center pink-text text-lighten-3">Ice Cream List</h1>
                <div className="collection products row">
                   {productlist} 
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        products: state.product.list
    }
}

export default connect(mapStateToProps, {getProducts})(ProductList);