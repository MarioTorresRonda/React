import { createContext, useReducer } from 'react'

import { fetchMeals } from '../http';
import { useFetch } from '../hooks/useFetch.js';

export const CartContext = createContext({
    items: [],
    addItemToCart: (id) => {},
    onUpdateCartItemQuantity : (id, quantity) => {}
});

function cartReducer(state, action) {

    if ( action.type == "ADD" ) {
        const updatedItems = [ ...state.items ];

        const CartItemIndex = updatedItems.findIndex( (item) => item.id == action.payload.id );
        const CartItem = updatedItems[CartItemIndex];

        if ( CartItem ) {
            const updatedItem = {
                ...CartItem,
                quantity : Number(CartItem.quantity) + 1
            }
            updatedItems[CartItemIndex] = updatedItem;
        }else{
            updatedItems.push({
                id: action.payload.id,
                price: action.payload.price,
                name: action.payload.name,
                quantity: 1
            })
        }

        return {
            items: updatedItems,
        };
    }else if ( action.type == "UPDATE" ) {
        const updatedItems = [ ...state.items ];
        const CartItemIndex = updatedItems.findIndex( (item) => item.id == action.payload.id );
        const CartItem = {
            ...updatedItems[CartItemIndex],
        };

        if ( CartItem ) {
            CartItem.quantity += action.payload.quantity;
            if ( CartItem.quantity <= 0 ) {
                updatedItems.splice( CartItemIndex, 1 );
            }else{
                updatedItems[CartItemIndex] = CartItem;
            }
        }

        return {
            items: updatedItems,
        };
    }

    return state;
}

export default function CartContextProvider( {children} ) {

    const {
        isFetching, 
        fetchedData : meals,
        error
    } = useFetch( fetchMeals, [] );

    const [ cartState, cartDispatch ] = useReducer( cartReducer, { items : [] } )

    function addItem( id ) {
        const meal = meals.find( (item) => item.id === id );
        cartDispatch({
            type: "ADD",
            payload : meal
        }) 
    }

    function updateItemQuantity( id, quantity ) {
        cartDispatch({
            type: "UPDATE",
            payload : {
                id,
                quantity
            }
        }) 
    }

    const ctxValue = {
        items: cartState.items,
        addItemToCart : addItem,
        onUpdateCartItemQuantity : updateItemQuantity
    }

    console.log( ctxValue );

    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>

}