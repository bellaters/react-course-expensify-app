import {createStore} from 'redux';
const log = console.log;

// Action generators - functions that return action objects
// 2. Step: use decomposition and default settings of it to simplyífy
// Compare it to decrementCount! It is much shorter and more readable.

const incrementCount = (({ incrementBy = 1 } = {})=>({
    type: 'INCREMENT', 
    incrementBy
}));

// Action generators - functions that return action objects
const decrementCount = (({decrementBy = 1} = {})=>({
    type: 'DECREMENT', 
    decrementBy: decrementBy
}));

// CHALLENGE 90.1
// Create generators setCount and resetCount
const setCount = (({count = 0} = {}) => ({
    type: 'SET',
    count
}));

const resetCount = ( () => setCount() ) 

const store = createStore((state = {
    count: 0
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        default:
            return state;
    }

    return state;
});

log('Init value of store state: ',store.getState());
const unsubscribe = store.subscribe(() => {
    log(store.getState());
});

// Action - an object that gets sent to the store. 
// For example increment, decrement, reset.
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy : 4}));
store.dispatch(setCount({count: 101}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(incrementCount());
store.dispatch(setCount());


unsubscribe();
store.dispatch({type: 'INCREMENT'});

