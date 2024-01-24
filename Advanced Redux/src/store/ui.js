import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { 
    shown: false,
    notification: null
}

const uiSlice = createSlice({
    name: "ui",
    initialState: initialCartState,
    reducers: {
        toggleShow(state) {
            state.shown = !state.shown;
        },
        showNotification( state, action ) {
            state.notification = { 
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const UIActions = uiSlice.actions;
export default uiSlice.reducer;