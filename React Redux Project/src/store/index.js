import { createStore } from 'redux';
import { createSlice } from '@redux/toolkit';

const initialState = {counter: 0, showCounter: true};

createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state) {
            state.counter+=5;
        },
        toggleCounter(state) {
            state.toggleCounter!=state.toggleCounter;
        }
    }
});

const counterReducer = ( state = initialState, action ) => {

    if ( action.type === 'increment' ) {
        return{
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if ( action.type === 'increase' ) {
        return{
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    
    if ( action.type === 'decrement' ) {
        return{
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if ( action.type === 'toggle' ) {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
}

const store = createStore( counterReducer );

export default store;