import React , {Component} from 'react';
import axios from 'axios';
import ProductItem from './product_item';

class ProductList extends Component{
    constructor(props){
        super(props)

        this.state ={
            products: []
        }
        this.goToDetails = this.goToDetails.bind(this);
    }
    componentDidMount(){
        this.getProducts();
    }
    getProducts(){
        axios.get('/api/getproducts.php').then((resp)=>{
            this.setState({
                products: resp.data.products
            })
        });
    }
    goToDetails(id){ //redirect
        this.props.history.push(`/products/${id}`);
    }
    render(){
        const {products} = this.state;

        const productlist = products.map(product =>{
            return <ProductItem key={product.id} {...product} gotodetails={this.goToDetails}/>
        })

        return (
            <div className="product-list">
                <h1 className="center">Wicked Product List</h1>
                <ul className="collection">
                   {productlist} 
                </ul>
                
            </div>
        )
    }
}

export default ProductList;