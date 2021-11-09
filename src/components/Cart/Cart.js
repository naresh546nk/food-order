import {useContext } from 'react'

import style from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-contex';
import CartItem from './CartItem';
const Cart=props =>{
    const cartCtx=useContext(CartContext)
    const totalAmount=cartCtx.totalAmount.toFixed(2);
    const hasItem=cartCtx.items.length>0

    const addCartItemHandlar=item=>{
        cartCtx.addItem(item)

    }
    const removeItemHandlar=id=>{
        cartCtx.removeItem(id)
    }


    const cartItems= 
    <ul className={style['cart-items']}> 
        {
       cartCtx.items.map(item =>
       <CartItem key={item.id} item={item}  onAdd={addCartItemHandlar.bind(null,item)} onRemove={removeItemHandlar.bind(null,item.id)}/>)
       }
    </ul> 
    return (
        
        <Modal onHideCart={props.onHideCart}>
            {cartItems}

            <div className={style.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div >
            <div className={style.actions}>
                <button className={style['button--alt']}  onClick={props.onHideCart}>Close</button>
               {hasItem &&  <button className={style.button}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;