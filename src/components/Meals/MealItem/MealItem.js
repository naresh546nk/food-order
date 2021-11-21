import style from './MealItem.module.css';
import MealIteamFrom from './MealIteamForm';
import {useContext} from 'react'
import CartContext from '../../../store/cart-contex';
const MealItem =props =>{
    const price=`$${props.meal.price.toFixed(2)}`;
    const cartCtx= useContext(CartContext);
    const addToCartHandler=amount=>{
        cartCtx.addItem({
            id:props.meal.id,
            name:props.meal.name,
            price: props.meal.price,
            amount:amount

        })
    }


    return(
        <div className={style.meal}>
            <div>
                <div><h3>{props.meal.name}</h3></div>
                <div className={style.description}>{props.meal.description}</div>
                <div className={style.price}>{price}</div>
            </div>
            <div>
                <MealIteamFrom   onAddToCart={addToCartHandler}/>
            </div>
        </div>
    )
}

export default MealItem;