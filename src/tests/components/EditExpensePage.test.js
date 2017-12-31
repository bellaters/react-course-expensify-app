import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach( () => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() } ;
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history}
            expense={expenses[0]}
    />);
});

test(' should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test(' should handle editExpense', () => {
    //given
    const newExpense = expenses[1];
    //when
    wrapper.find('ExpenseForm').prop('onSubmit')(newExpense);
    //then
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[1]);
});

// should handle removeExpense
// spies
test(' should handle removeExpense', () => {
    //given
    const idToBeRemoved = expenses[0].id;
    //when
    wrapper.find('button').simulate('click');
    //then
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: idToBeRemoved
    });
});





