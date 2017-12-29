import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import {Link} from 'react-router-dom';

// CHALLENGE 108.1
// add a link to edit/<expense.id>

const ExpenseListItem = ({dispatch, id, description, amount, createAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createAt}</p>
        <button
            onClick={(e)=>{
                dispatch(removeExpense({id}));
            }}>
        
        Remove</button>
    </div>
);

export default connect()(ExpenseListItem);
