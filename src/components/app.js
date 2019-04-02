import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React from 'react';
import {Route} from 'react-router-dom';
import ProductRoutes from './products'; //look for index file in the folder
import Home from './products/home';
const App = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductRoutes} />
    </div>
);

export default App;
