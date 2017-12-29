import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const log = console.log;
const store = configureStore();

// CHALLENGE 99.1
// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill
// getVisibleExpenses -> print visibles ones to screen


log(store.getState());
store.subscribe( () => {
    log('CURRENT STATE: ', store.getState());
});
store.dispatch(addExpense({description: 'Water bill', amount: 5000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 7000}));
store.dispatch(setTextFilter('bill'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
log('VISIBLE: ', visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));

