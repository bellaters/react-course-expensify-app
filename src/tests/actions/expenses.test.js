import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('my dummy test',() => {

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

// CHALLENGE 113.1
// Setup test case 
// Call editExpense { note: 'new note value'}
// Make an assertion



