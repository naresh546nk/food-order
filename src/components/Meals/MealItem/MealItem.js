import style from './MealItem.module.css';
const MealItem =props =>{
    const price=`$${props.meal.price.toFixed(2)}`;
    return(
        <li className={style.meal}>
            <div>
                <div><h3>{props.meal.name}</h3></div>
                <div className={style.description}>{props.meal.description}</div>
                <div className={style.price}>{price}</div>
            </div>
            <div>

            </div>
        </li>
    )
}

export default MealItem;