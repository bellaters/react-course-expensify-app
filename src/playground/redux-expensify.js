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
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
const store = createStore(expenseReducer);
log(store);


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
log('demoState', demoState);
