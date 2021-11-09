import React,{useReducer} from 'react';
import CartContext from './cart-contex';


const defaultCartState={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
        let updatedItems;
        let updatedItem;
        const updateTotalAmount=state.totalAmount+action.item.price;
        const cartItemIndex=state.items.findIndex(item=>item.id===action.item.id)
        if(cartItemIndex>=0){
            const existingItem=state.items[cartItemIndex];
            updatedItem={
                ...existingItem,
                amount:existingItem.amount+1
            }
            updatedItems=[...state.items]
            updatedItems[cartItemIndex]=updatedItem
            
        }else{
            updatedItems=state.items.concat(action.item);
        }
       

        return {
            items: updatedItems,
            totalAmount:updateTotalAmount
        }
    }
    if(action.type==="REMOVE"){
        let updatedItems;
        let updatedItem;
        
        const findItemIndex=state.items.findIndex(item=>item.id===action.id)
        const existingItem=state.items[findItemIndex];
        const updateTotalAmount=state.totalAmount-existingItem.price
        updatedItem={
            ...existingItem,
            amount: existingItem.amount-1
        }
        if(existingItem.amount===1){
            updatedItems=state.items.filter(item=>item.id!==action.id)
        }else{
            updatedItems=[...state.items]
            updatedItems[findItemIndex]=updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount:updateTotalAmount
        }
    }

    return defaultCartState;
}
const CartProvider = props =>{
    const [cartState,dispatcherCartAction]=useReducer(cartReducer,defaultCartState)

    const addCartItemHandler=(item)=>{
        dispatcherCartAction({type:"ADD",item:item})
    }
    const removeCartItemHandler=(id)=>{
        dispatcherCartAction({type:"REMOVE", id: id})
    }


    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler
    }
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )
}

export default CartProvider;
