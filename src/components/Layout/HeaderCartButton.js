import CartIcon from "../Cart/CartIcon";
import style from './HeaderCartButton.module.css';
import {useContext,useEffect,useState} from 'react'
import CartContext from "../../store/cart-contex";

const HeaderCartButton=props =>{
    const cartCtx=useContext(CartContext)
    const {items}=cartCtx;
    
    const [bump, setBump]=useState(false);
    useEffect(()=>{
        if(items.length===0){
            return
        }
        setBump(true)
        const timer=setTimeout(()=>{
            setBump(false)
        },300)
        return ()=>{
            clearTimeout(timer)
        }
    },[items])

    const buttonClasss=`${style.button} ${bump? style.bump: ''}`;
    
    const numberOfItems=cartCtx.items.reduce((currNumber,item)=>{
        return currNumber+item.amount;
    }, 0)
    return (
        <button disabled={items.length<=0}  className={buttonClasss} onClick={props.onShowCart}>
        <span className={style.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={style.badge}>{numberOfItems}</span>
        </button>
    )

};

export default HeaderCartButton;