import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuth: false, userName: '' }

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isAuth = true;
            state.userName = action.payload;
        },
        logout(state) {
            state.isAuth = false;
        }
    }
    
})

export const authActions = authSlice.actions;
export default authSlice.reducer;