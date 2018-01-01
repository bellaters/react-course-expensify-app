import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test(' should return 0 if no expense ', () => {
    const expensesToTest = [];
    const expensesTotal = selectExpensesTotal(expensesToTest);
    expect(expensesTotal).toBe(0);
});

test(' should correctly add up a single expense', () => {
    const expensesToTest = [ expenses[0] ];
    const expenseAmount = expenses[0].amount;
    const expensesTotal = selectExpensesTotal(expensesToTest);
    expect(expensesTotal).toBe(expenseAmount);
});

test(' should correctly add up multiple expenses', () => {
    const expensesToTest = expenses;
    const expensesSumOfAmounts = 114195; // manually calculated ;)
    const expensesTotal = selectExpensesTotal(expensesToTest);
    expect(expensesTotal).toBe(expensesSumOfAmounts);
});