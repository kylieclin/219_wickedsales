import React , {Component} from 'react';
import axios from 'axios';
import ProductItem from './product_item';


class ProductList extends Component{
    constructor(props){
        super(props)

        this.state ={
            products: []
        }
    }
    componentDidMount(){
        this.getProducts();
    }
    getProducts(){
        axios.get('/api/getproducts.php').then((resp)=>{
            console.log(resp.data);
            this.setState({
                products: resp.data.products
            })
        })
    }
    render(){
        const {products} = this.state;

        const productlist = products.map(product =>{
            return <ProductItem key={product.id} {...product}/>
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