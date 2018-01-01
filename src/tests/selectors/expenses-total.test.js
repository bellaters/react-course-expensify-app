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

const getExpensesTotal = (expensesToBeSummedUpByAmount) => {
    const expenseTotal = undefined;

    return expenseTotal;
};

// create function getExpensesTotal, 
// which calculates total sum of amounts
const total = getExpensesTotal(expenses); // look into map and reduce
console.log(total); //114195

// Tests to create 
// --------------- 
test(' should return 0 if no expense ', () => {
    const expensesToTest = [];
    const expenseTotal = getExpensesTotal(expensesToTest);
    expect(expenseTotal).toBe(0);
});

test(' should correctly add up a single expense', () => {
    const expensesToTest = [ expenses[0] ];
    const expenseAmount = expenses[0].amount;
    const expenseTotal = getExpensesTotal(expensesToTest);
    expect(expenseTotal).toBe(expenseAmount);
});

test(' should correctly add up multiple expenses', () => {
    const expensesToTest = expenses;
    const expensesSumOfAmounts = 114195; // manually calculated ;)
    const expenseTotal = getExpensesTotal(expensesToTest);
    expect(expenseTotal).toBe(expensesSumOfAmounts);
});