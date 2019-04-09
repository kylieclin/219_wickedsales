import React from 'react';
import {formatMoney} from '../../helpers';

export default ({images:[productImg=""] , name, price, gotodetails, id}) =>{

    return(
        <div className="collection-item product-item col m3 s6" onClick={()=>{ gotodetails(id) }}>
            <h6 className="center pink-text text-lighten-2">{name}</h6>
            <img className="" src={`dist/${productImg}`} alt={`${name}`}/>   
            <div className="right-align pink-text text-lighten-2">{formatMoney(price)}</div>
        </div>
    )
}