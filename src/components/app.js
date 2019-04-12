import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import ProductRoutes from './products'; //look for index file in the folder
import Home from './home';
import Nav from './nav';
import NotFound from './404'; //packge.json specifiy the 404.js
import Cart from './cart';

class App extends Component{
    constructor(props){
        super(props);

        this.state ={
            cartItems: 0
        }

        this.updateCartItems = this.updateCartItems.bind(this);
    }
    componentDidMount(){
        this.updateCartItems();
    }
    async updateCartItems(){
        const resp = await axios.get('/api/getcartitemcount.php');
        if(resp.data.success){
            this.setState({
            cartItems: resp.data.itemCount
            })
        }
    }
    render(){
        return (
          <div>
              <Nav cartItems={this.state.cartItems}/>
              <div className="container">
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/products" render={(routingprops)=> <ProductRoutes {...routingprops} updateCart={this.updateCartItems}/> }/>
                  <Route path="/cart" component={Cart} />
                  <Route component={NotFound} />
              </Switch>
              </div>
      
          </div>
        )  
    }
} 



export default App;

//switch default at the very buttom! 