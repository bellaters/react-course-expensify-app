// 1. Create ExpensesSummary Component
// -----------------------------------
import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <p>
        {`Viewing ${props.expenses.length} expenses 
        totalling ${selectExpensesTotal(props.expenses)}`}
        </p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpensesTotal(state.expenses, state.filters)
    };
}; 

export default connect(mapStateToProps)(ExpensesSummary);

// Rendered by ExpenseDashboardPage
// Test with two snapshot tests
// Connected to store for:
//      - expenseCount (how many visible expenses?)
//      - expensesTotal (what's the total of the visible expenses?)

// Example
// Viewing 2 expenses totalling $94.34

// Example
// Viewing 3 expenses totalling $94.34

// 2. Commit and Deploy
// ------------------------------------

// Get the feature live!