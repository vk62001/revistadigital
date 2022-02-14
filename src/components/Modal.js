import React from 'react';
import ReactDOM from 'react-dom';
import BackDrop2 from '../UXComponents/BackDrop2';
import {CSSTransition} from 'react-transition-group';
import './Modal.css'

// import CloseIcon from './CloseIcon'


const ModalOverlay =  props =>{
        const  content =(
        <div className={`modal bg-gray-200 ${props.className}`}>
            <header className={`modal__header ${props.headerClass}`}>
                {/* <CloseIcon 
                     onClick={props.onCancel}
                     className="img"
                     whidth="28"
                     height="28"
                     fill={props.config.color.secondary}
                     stroke={props.config.color.secondaryText}
                /> */}
            </header>
            <form onSubmit={props.onSubmit?props.onSubmit : event=>event.preventDefault}>
                <div className={`modal__content ${props.contenClass}`}>
                    {props.children}
                </div>
            </form>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}

const ModalPortal = props =>{
    return <React.Fragment>
        {props.show && <BackDrop2 onClick={props.onCancel} />}
        <CSSTransition 
            in={props.show} 
            mountOnEnter 
            unmountOnExit 
            timeout={100} 
            classNames={props.classNames ? props.classNames : 'modal'}>
                <ModalOverlay {...props}/>
            </CSSTransition>
    </React.Fragment>
}

export default ModalPortal