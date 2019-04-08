import React from 'react';
import {formatMoney} from '../../helpers';

export default ({images:[productImg=""] , name, price, gotodetails, id}) =>{

    return(
        <li className="collection-item avatar product-item" onClick={()=>{ gotodetails(id) }}>
            <span>{name}</span>
            <img className="circle" src={`dist/${productImg}`} alt={`${name}`}/>   
            <p>{formatMoney(price)}</p>
        </li>
    )
}