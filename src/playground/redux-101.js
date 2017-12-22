import {createStore} from 'redux';
const log = console.log;

// Action generators - functions that return action objects
// 2. Step: use decomposition and default settings of it to simplyífy
// Compare it to decrementCount! It is much shorter and more readable.

const incrementCount = (({incrementBy = 1})=>({
    type: 'INCREMENT', 
    incrementBy: incrementBy
}));

// Action generators - functions that return action objects
const decrementCount = ((payload = {})=>({
    type: 'DECREMENT', 
    decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
}));

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
store.dispatch(incrementCount());
store.dispatch({type: 'SET', count: 101});


unsubscribe();
store.dispatch({type: 'RESET'});
store.dispatch({type: 'INCREMENT'});

