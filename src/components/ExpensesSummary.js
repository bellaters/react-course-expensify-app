import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({count, total, hidden}) => {
    const expenseWord = count === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(total / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                Viewing <span>{count}</span> {expenseWord} totalling <span>{formattedTotal}</span>
                </h1>
                <h3 className="page-header__title">
                filtered out <span>{hidden}</span>
                </h3>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const hidden = state.expenses.length - visibleExpenses.length;
    return {
        count: visibleExpenses.length,
        total: selectExpensesTotal(visibleExpenses),
        hidden
    };
}; 

export default connect(mapStateToProps)(ExpensesSummary);