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
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

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
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};



// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.desciption.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });
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
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    //log('On Store Dispatch: ',store.getState());
    log('Current visibleExpenses: ',visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({desciption: 'Rent', amount: '100', createAt: 1000}));
const expenseTwo = store.dispatch(addExpense({desciption: 'Coffee', amount: '300', createAt: -1000}));

//store.dispatch(setStartDate(-200));
//store.dispatch(setEndDate());

store.dispatch(setTextFilter('re'));

//log(expenseOne);

/* store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
log(store.getState());

store.dispatch(sortByAmount()); // filters.sortBy = 'amount' 
log(store.getState());

store.dispatch(sortByDate());   // filters.sortBy = 'date'
log(store.getState());
 */

/* store.dispatch(setStartDate(125));
log('New startDate 125: ',store.getState());
store.dispatch(setStartDate()); //startDate undefined
store.dispatch(setEndDate(250));
log('New endDate 250: ',store.getState());
store.dispatch(setEndDate()); */

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
