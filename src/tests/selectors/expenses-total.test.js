import selectExpensesTotal from '../../selectors/expenses-total';
// see '../fixtures/expenses.js'
import moment from 'moment';
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createAt: 0 
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 100000,
    createAt: moment(0).subtract(4,'days').valueOf() 
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createAt: moment(0).add(4,'days').valueOf() 
}];

// create function getExpensesTotal, 
// which calculates total sum of amounts
const total = getExpensesTotal(expenses); // look into map and reduce
console.log(total); //114195


// Tests to create 
// ---------------
// should return 0 if no expense
// should correctly add up a single expense
// should correctly add up multiple expenses