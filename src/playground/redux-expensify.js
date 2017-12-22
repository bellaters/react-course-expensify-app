import {createStore, combineReducers} from 'redux';

const log = console.log;

// We will need combineReducers as we have to deal 
// with a lot of different states and actions:
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSIVE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

//Expense Reducers
const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
// Filters Reducers
// CHALLENGE 92.1 create filterReducer with following default state
// and register it to store below via combineReducers call
// text -> '', sortBy -> date, startDate -> undefined, endDate -> undefined
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);
log('Initial State of Store: ',store.getState());


const demoState = {
    expenses: [{
        id: 'foo',
        desciption: 'January Rent',
        note: 'This was the final payment for the address',
        amount: 54500, //given in cent ;)
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
log('demoState: ', demoState);
