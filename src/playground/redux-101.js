import {createStore} from 'redux';

const log = console.log;
log('running');

const store = createStore((state = {count:0})=>{
    return state;
});

log('store.getState()',store.getState());