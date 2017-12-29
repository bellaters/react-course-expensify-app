import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// CHALLENGE 103.1 - add handler to button,
// such that the expensiv will be removed
const ExpenseListItem = ({dispatch, id, description, amount, createAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createAt}</p>
        <button
            onClick={(e)=>{
                dispatch(removeExpense({id}));
            }}>
        Remove</button>
    </div>
);

export default connect()(ExpenseListItem);
