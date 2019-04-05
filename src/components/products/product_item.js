import React from 'react';
import {formatMoney} from '../../helpers';

export default ({images:[productImg=""] , name, price}) =>{

    return(
        <li className="collection-item avatar" >
            <span>{name}</span>
            <img className="circle" src={`dist/${productImg}`} alt={`${name}`}/>   
            <p>{formatMoney(price)}</p>
        </li>
    )
}