import React , {Component} from 'react';
import axios from 'axios';
import Carousel from './product_carousel';
import {formatMoney} from '../../helpers';
import MiscDetails from './misc_detail';
import {Link} from 'react-router-dom';

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
                <h1 className="center">{name}</h1>
                <div className="row">
                    <Carousel images={images} />

                    <div className="col s12 m4">
                        <div className="right-align product-price">{formatMoney(price)}</div> 
                        <div className="right-align add-to-cart">
                            <span className="qty-container">
                                <button className="btn"><i className="material-icons">remove</i></button>
                                <span className="product-qty">1</span>
                                <button className="btn"><i className="material-icons">add</i></button>
                            </span>
                            <button className="btn">
                                <i className="material-icons">add_shopping_cart</i>
                            </button>
                        </div>
                        
                        
                        <div>{description}</div>
                        <MiscDetails miscDetails={miscDetails}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;