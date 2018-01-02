import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, 
        removeExpense, setExpenses, startSetExpenses,
        startRemoveExpense, startEditExpense } from '../../actions/expenses';
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

test(' should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses    
    });
});

test(' should fetch the expenses from firebase',  (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then( ()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
    });
    done();
});

test(' should remove expenses from firebase', (done) => {
    const store = createMockStore({});
    const idToBeRemoved = expenses[0].id;
    store.dispatch(startRemoveExpense({id: idToBeRemoved})).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: idToBeRemoved
        })
        return database.ref(`expenses/${actions[0].id}`).once('value');
    }).then( (snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
});

test(' should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const update = {
        description : 'My Update', 
        note : 'I am a test update', 
        createAt : 0,
        amount : 100000
    };
    store.dispatch(startEditExpense( id, update )).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSIVE',
            expense: {
                ...update,
                id
            }
        });
        return database.ref(`expenses/${id}`).once('value');
    })
    .then( (snapshot) => {
        expect(snapshot.val()).toEqual(update);
        done();
    });
    
})
