import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
    {
       desciption = '', 
       note = '', 
       amount = 0, 
       createAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        desciption,
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
