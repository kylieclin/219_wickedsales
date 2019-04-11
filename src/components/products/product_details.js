import React , {Component} from 'react';
import axios from 'axios';
import Carousel from './product_carousel';
import {formatMoney} from '../../helpers';
import MiscDetails from './misc_detail';
import {Link} from 'react-router-dom';
import ProductAdd from './product_add';

class ProductDetails extends Component{
    constructor(props){
        super(props)

        this.state={
            details: null
        }
    }
    componentDidMount(){
        this.getDetails();

    }
    async getDetails(){
        const {params} = this.props.match; //created by index.js Route path="/products/:product_id"
        // console.log(params.product_id);

        const resp = await axios.get(`/api/getproduct_details.php?productId=${params.product_id}`) 
        //or `` 
        try{
            if(resp.data.success){
                this.setState({
                    details: resp.data.productInfo
                })
            } else {
                this.setState({
                    details: false
                })
            }            
        } catch (error){

        }   

    }

    render(){
        const {match:{params} , updateCart} = this.props;
        const {details} = this.state;

        if(details === null){
            return<h1>Loading</h1> 
        } else if (!details){
            return <Link to="/"><h1>No Product Found</h1></Link> 
        }
        
        const {name, description="Description Unavaible", images ,miscDetails, price} = details;
        //get obj key name for misc details

        // const misc = Object.entries(miscDetails).map((value, key)=>{
        //     return (<div className="misc-details" key={key}>{value[0]}:{value[1]}</div>)
        // })
        

        return (
            <div className="product-details">
                <h1 className="center pink-text text-lighten-3">{name}</h1>
                <div className="row">
                    <Carousel images={images} />

                    <div className="col s12 m4">
                        <div className="right-align product-price">{formatMoney(price)}</div> 
                        <ProductAdd product_id={params.product_id} updateCart={updateCart}/>
                        <div>{description}</div>
                        <MiscDetails miscDetails={miscDetails}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;