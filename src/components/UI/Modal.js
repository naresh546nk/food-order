import {Fragment} from 'react'
import ReactDom from 'react-dom'
import style from './Modal.module.css'

const Backdrop = props =>{
    return <div className={style.backdrop} onClick={props.onHideCart}/>
}

const ModalOverlay= props =>{
    return ( 
        <div className={style.modal}>
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal=props =>{
    const portalElement= document.getElementById('overlay')
    return (
        <Fragment>
            {/* <Barckdrop/>
            <ModalOverlay/> */}
            {ReactDom.createPortal(<Backdrop/>, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}
export default Modal;