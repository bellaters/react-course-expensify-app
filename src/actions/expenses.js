import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt};
        
        return database.ref(`users/${uid}/expenses`).push(expense).then( (ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });

    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// 1. Create startRemoveExpense (same signature as removeExpense)
// 2. Test startRemoveExpense with ' should remove expenses from firebase'
//  -> call val on snapshot and check if it is null
// 3. Use startRemoveExpense in EditExpense instead of removeExpense
// 4. Adjust EditExpensePage tests
export const startRemoveExpense = ({ id } = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then( () => {
            dispatch(removeExpense({id}));
        }).catch( (e) => {
            console.log('something is wrong with start remove expense: ', e);
        });
    };
};

// EDIT_EXPENSIVE
export const editExpense = (id, update = {} ) => ({
    type: 'EDIT_EXPENSIVE',
    expense: {
        ...update,
        id
    }
});

// 1. Create startEditExpense (same call signature as editExpense)
// 2. Test startEditExpense with ' should edit expense from firebase'
// 3. Use startEditExpense in EditExpensePage instead of editExpense
// 4. Adjust EditExpensePage tests
export const startEditExpense = ( id, update = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(update).then( () => {
            dispatch(editExpense(id, update));
        }).catch( (e) => {
            console.log('something is wrong with start edit expense: ', e);
        });
    };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses 
});

// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES
export const startSetExpenses = (expensesData = {}) => {
    /* structure from startAddExpense */
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then( (snapshot) => {
            const expenses = [];
            snapshot.forEach( (childSnapshot) => {
                expenses.push({
                    id : childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};
