import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { setTimeout } from 'timers';

const store = configureStore();

/* 
store.subscribe( () => {
    log('CURRENT STATE: ', store.getState());
});
 */

/* store.dispatch(addExpense({description: 'Water bill', amount: 5000, createAt: 2000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 7000, createAt: -1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createAt: 2000}));
 */

console.log('test');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

