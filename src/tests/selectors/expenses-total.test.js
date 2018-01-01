import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

const getExpensesTotal = (exps) => {
    return selectExpensesTotal(exps);
};

const total = getExpensesTotal(expenses); // look into map and reduce
console.log(total); //114195

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