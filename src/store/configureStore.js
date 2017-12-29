import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import expensesReducer from '../reducers/filters';

// Application store
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

    return store;
};