import uuid from 'uuid';

// component calls action generator
// action generator return object 
// component dispatch object
// redux store change

// ##############################
//          Async Actions
// ##############################
// component calls action generator
// action generator returns function 
// component dispatch function (?)
// function runs (has the ability to dispatch actions and do whaever it wants)

// ADD_EXPENSE
export const addExpense = (
    {
       description = '', 
       note = '', 
       amount = 0, 
       createAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});
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
