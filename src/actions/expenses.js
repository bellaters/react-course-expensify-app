import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createAt = 0
        } = expenseData;
        const expense = { description, note, amount, createAt};
        
        return database.ref('expenses').push(expense).then( (ref) => {
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

// EDIT_EXPENSIVE
export const editExpense = (id, update = {} ) => ({
    type: 'EDIT_EXPENSIVE',
    expense: {
        ...update,
        id
    }
});

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
    return (dispatch) => {
        
        return database.ref('expenses').once('value').then( (snapshot) => {
            const expenses = [];
            snapshot.forEach( (childSnapshot) => {
                console.log('Child will added : ', childSnapshot);
                
                expenses.push({
                    id : childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            console.log(expenses)
            dispatch(setExpenses(expenses));
        });
    };
};

// Example from firebase.js:
/* 
database.ref('expenses')
    .once('value')
    .then( (snapshot) => {
        console.log(snapshot.val());
        const expenses = [];

        snapshot.forEach( (childSnapshot) => {
            expenses.push({
                id : childSnapshot.key,
                ...childSnapshot
            });
        });
        console.log(expenses);
        
    });
 */

