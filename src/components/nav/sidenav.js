import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideNav extends Component{
    componentDidMount(){
        M.Sidenav.init(this.sidenav,{   inDuration: 350,
            outDuration: 350, 
            edge: 'right',
            background: 'transparent'
        });
    }
    render(){
        return (
            <ul ref={(element)=>{this.sidenav = element}} id="sidenav" className="sidenav right">
                {this.props.links}
            </ul>
        )
    }
}

export default SideNav;