import React , {Component} from 'react';
import axios from 'axios';


class ProductDetails extends Component{
    componentDidMount(){
        const {params} = this.props.match;
        // console.log(params.product_id);
        //call server to get product detail
    }
    render(){
        return (
            <div className="product-details">
                <h1 className="center">[XXX] Details</h1>
            </div>
        )
    }
}

export default ProductDetails;