import React from 'react';

export default (props) =>{
    console.log(props)
    const {label, id, type = "text" , input, meta:{error, touched}, col='s12'}=props
    return(
        <div className={`input-field col ${col}`}>
            <input {...input} id={id} type={type}/>
            <label htmlFor={id}>{label}</label>
            <p className="red-text text-darken-2">{touched && error}</p>
        </div>
    )
}