import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'

const log = console.log;

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
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSIVE
const editExpense = (id, update = {} ) => ({
    type: 'EDIT_EXPENSIVE',
    expense: {
        ...update,
        id
    }
});

// SET_TEXT_FILTER
//setTextFilter('rent')
//setTextFilter('') -> 
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

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
        case 'EDIT_EXPENSIVE':
            return state.map( (expense) => {
                if(expense.id === action.expense.id){
                    return {
                        ...expense,
                        ...action.expense
                    };  
                }else {
                    return expense;
                }
            });
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
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            };
        default:
            return state;
    }
};
// Application store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
// Log given State
store.subscribe(()=>{
    log('On Store Dispatch: ',store.getState());
});

const expenseOne = store.dispatch(addExpense({desciption: 'Rent', amount: '100'}));
const expenseTwo = store.dispatch(addExpense({desciption: 'Food', amount: '234'}));
//log(expenseOne);

store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
log(store.getState());



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
//log('demoState: ', demoState);
