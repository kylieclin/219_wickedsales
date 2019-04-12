import React, {Component} from 'react';
import './modal.scss';

class Modal extends Component{
    state={
        message: 'hi'
    }
    componentDidMount(){

        M.Modal.init(this.modal);

    }
    render(){
        if(this.props.isOpen){
            return(
            <div id="modal1" className="modal" ref={element=>{this.modal = element}}>
                <div id="modalContent" className="modal-content" ref="modalContent">
                    {this.props.children}
                    <div className="modal-actions center">
                        <button onClick={this.props.close}>Okay</button>
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