import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'

const log = console.log;
// We will need combineReducers as we have to deal 
// with a lot of different states and actions:
// ADD_EXPENSE
const addExpense = (
    {
       desciption = '', 
       note = '', 
       amount = 0, 
       createAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        desciption,
        note,
        amount,
        createAt
    }
});
// REMOVE_EXPENSE
// CHALLENGE 93.1
// create the respective Method
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSIVE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expense Reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => id !== action.id);
        default:
            return state;
    }
};
// Filters Reducers
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
store.subscribe(()=>{
    log('On Store Dispatch: ',store.getState());
});

const expenseOne = store.dispatch(addExpense({desciption: 'Rent', amount: '100'}));
const expenseTwo = store.dispatch(addExpense({desciption: 'Food', amount: '234'}));
//log(expenseOne);

store.dispatch(removeExpense({id: expenseOne.expense.id}));
log(expenseOne);

//log(expenseTwo);
