import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductRoutes from './products'; //look for index file in the folder
import Home from './home';
import Nav from './nav';
import NotFound from './404'; //packge.json specifiy the 404.js
import Cart from './cart';

const App = () => (
    <div>
        <Nav />
        <div className="container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductRoutes} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
        </Switch>
        </div>

    </div>
);

export default App;

//switch default at the very buttom! 