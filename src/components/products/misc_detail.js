import React from 'react';
import {toWords} from '../../helpers';

export default props => {
    const {miscDetails} = props;
    
    const addiftionalInfo = Object.keys(miscDetails).map(key =>{
        let value = miscDetails[key];
        if(Array.isArray(value)){
            value = value.join(', ')
        };

        return (            
        <tr key={key}>
            <td>{toWords(key)}</td>
            <td>{value}</td> 
        </tr>
        )
    })


    return(
        <table className="misc-details">
            <thead>
                <tr>
                    <th colSpan="2">Aditional Infomation</th>
                </tr>
            </thead>
            <tbody>
                    {addiftionalInfo}
            </tbody>
        </table>

    )
}
