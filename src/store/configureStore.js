import {createStore, combineReducers} from 'redux';

// Application store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);