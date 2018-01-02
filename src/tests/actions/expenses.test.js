import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, 
        removeExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

// Load our test data '../fixtures/expenses' to our test db
beforeEach( (done) => {
    const expensesData = {};
    expenses.forEach( ({ id, description, note, amount, createAt }) => {
        expensesData[id] = { description, note, amount, createAt };
    });
    database.ref('expenses').set(expensesData).then( () => done());
});

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
        description: 'Coffee',
        amount: 450,
        note: 'blub',
        createAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then( (snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test(' should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const defaultData = {
        description : '', 
        note : '', 
        amount : 0, 
        createAt : 0
    };
    store.dispatch(startAddExpense()).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then( (snapshot) => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
});

test(' should setup set expenses action object with data ', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses    
    });
});