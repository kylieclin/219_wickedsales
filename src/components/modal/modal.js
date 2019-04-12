import React, {Component} from 'react';
import './modal.scss';

class Modal extends Component{
    state={
        message: 'hi'
    }
    componentDidMount(){

    }
    render(){
        const {isOpen, children, defaultAction, defaultActionText='Okay', secondAction=null, secondActionText='cancle'} = this.props;

        if(isOpen){
            return(
            <div id="modal1" className="sales-modal" onClick={defaultAction}>
                <div id="modalContent" className="sales-modal-content" ref="modalContent">
                    {children}
                    <div className="modal-actions center">
                        {secondAction ? <button onClick={secondAction} className="btn pink lighten-1">{secondActionText}</button> : null}
                        <button className="btn pink darken-1" onClick={defaultAction}>{defaultActionText}</button>
                    </div>
                </div>
            </div>
            )
        } else {
            return null;
        } 
    }
};

export default Modal;