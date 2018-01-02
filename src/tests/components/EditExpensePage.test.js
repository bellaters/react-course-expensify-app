import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach( () => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() } ;
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            startRemoveExpense={startRemoveExpense} 
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

test(' should handle startRemoveExpense', () => {
    //given
    const idToBeRemoved = expenses[0].id;
    //when
    wrapper.find('button').simulate('click');
    //then
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: idToBeRemoved
    });
});






