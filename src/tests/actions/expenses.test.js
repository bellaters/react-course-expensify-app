import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object',() => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object',() => {
    const action = editExpense('123abc',{note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSIVE',
        expense: {
            id: '123abc',
            note: 'new note value'
        }
    });
});

test('should setup add expense action with provided values',() => {
    const action = addExpense(expenses[0])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
});

test(' should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 4500
    };
    store.dispatch(startAddExpense(expenseData)).then( () => {
        expect(1).toBe(2);
        done();
    });

});

test(' should add expense with defaults to database and store', () => {

});

/* 
test('should setup add expense action with default values',() => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createAt: 0
        }
    });
});
 */



