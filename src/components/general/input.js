import React from 'react';

export default props =>{
    console.log('input props', props);

    const {label, id, type = "text" ,input, col='s12'} = props

    return(
        <div className={`input-field ${col}`}>
            <input {...input} type={type}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}