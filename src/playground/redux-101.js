import {createStore} from 'redux';

const log = console.log;
log('running');

const store = createStore((state = {
    count: 0
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
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

log(store.getState());

// Action - an object that gets sent to the store. 
// For example increment, decrement, reset.
store.dispatch({type: 'INCREMENT'});
log(store.getState());
