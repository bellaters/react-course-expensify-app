import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { isMoment } from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Test Bill',
        note: 'A note',
        amount: 3000,
        createAt: 0 
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

test('should edit an expense', () => {
    const expense = {
        id: '1',
        description: 'New Description',
    };
    const action = {
        type: 'EDIT_EXPENSIVE',
        expense
    };
    const state = expensesReducer(expenses,action);
    expect(state[0].description).toBe('New Description');
});

// TODO: Fix this with update data, which will not used!
test('should not edit expense if expense not found ', () => {
    const action = {
        type: 'EDIT_EXPENSIVE',
        expense: {
            id: -1
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
 });

 test(' should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
 })

 /* Action:
 // SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses 
});
*/