import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    items: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem(state, action) {
            if ( !state.items[ action.payload.title ] ) {
                state.items[ action.payload.title ] = {
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                    total: action.payload.price
                }
            }else{
                const obj = state.items[ action.payload.title ];
                obj.quantity += 1
                obj.total = obj.quantity * obj.price
            }
        },
        updateItem( state, action ) {
            const obj = state.items[ action.payload.title ];
            obj.quantity += action.payload.quantity;
            obj.total = obj.quantity * obj.price;

            if ( obj.quantity === 0) {
                delete state.items[ action.payload.title ];
            }
        }
    }
    
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;