import React , {Component} from 'react';
import axios from 'axios';


class ProductDetails extends Component{
    constructor(props){
        super(props)

        this.state={
            details: null
        }
    }
    componentDidMount(){
        this.getDetails();

        M.Carousel.init(this.carouselimg, {
            fullWidth: true,
            
          });
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
            return<h1>No Product Found</h1> 
        }
        
        const {name, description="Description Unavaible", images ,miscDetails} = details;
        //get obj key name for misc details

        const misc = Object.entries(miscDetails).map((value, key)=>{
            return (<div className="center" key={key}>{value[0]}:{value[1]}</div>)
        })

        const img = images.map((imageurl,index)=>{
            return  (
                <a className="carousel-item active" href="#one!" key={index} >
                    <img src={`/dist/${imageurl}`} alt={name}/>
                </a>
            )
        })
        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <div className="" ref={(element)=>{this.carouselimg = element}}>
                {img}
                </div>
                <p>{description}</p>
                {misc}
            </div>
        )
    }
}

export default ProductDetails;