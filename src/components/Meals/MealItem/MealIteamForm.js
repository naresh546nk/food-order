import {useRef,useState} from 'react'
import style from './MealItemForm.module.css'
import Input from '../../UI/Input';
const MealIteamFrom =props=>{
    // const [amountValid, setAmountValid]= useState(true);
    const submitHandler=event=>{
        event.preventDefault();
        const enteredAmount =amountInputRef.current.value
        const enteredAmountNumbe=+enteredAmount;
        if(enteredAmountNumbe<1 ||
        enteredAmountNumbe>5){
            //setAmountValid(false)
            return;
        }
        props.onAddToCart(enteredAmountNumbe)
        
    }
    const amountInputRef= useRef();
    return (
        <form className={style.form} onSubmit={submitHandler}>
            <Input
            ref={amountInputRef}
            lable="Amount"
            input={{id:'amount',
            min:'1',
            max:'5',
            defaultValue:'1',
            setp:'1',
            type:'number'
            }}
            />
            <button>+ Add</button>
        </form>
    )

};

export default MealIteamFrom;