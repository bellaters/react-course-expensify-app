// 1. Create ExpensesSummary Component
// -----------------------------------
import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({count, total }) => {
    const expenseWord = count === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(total / 100).format('$0,0.00');
    return (
        <div>
            <h2>
            Viewing {count} {expenseWord} totalling {formattedTotal} .
            </h2>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        count: visibleExpenses.length,
        total: selectExpensesTotal(visibleExpenses)
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