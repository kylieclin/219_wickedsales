import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import SideNav from './sidenav';
import CartLink from './cart_link';
import './nav.scss';

class Nav extends Component{
    renderLinks(){
        return(
            <Fragment>
            <li className="sidenav-close"><Link to="/">Home</Link></li>
            <li className="sidenav-close"><Link to="/products">Products</Link></li>
            <li><CartLink items={this.props.cartItems}/></li>
            </Fragment>
        )
    }
    render(){
        const links = this.renderLinks();

        return (
        <div className="navbar-fixed">
            <nav className="pink darken-2">
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Yum Ice Cream</Link>
                    <a href="#" data-target="sidenav" className="sidenav-trigger right">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {links}
                    </ul>
                </div>
            </nav>
            <SideNav links={links}/>
        </div>
        )
    }
}

export default Nav;