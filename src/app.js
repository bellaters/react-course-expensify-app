import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';

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
store.dispatch(addExpense({description: 'Water bill'}));
log(store.getState());


ReactDOM.render(<AppRouter />, document.getElementById('app'));

