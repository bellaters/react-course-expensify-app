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
import { setTimeout } from 'timers';

const log = console.log;
const store = configureStore();


log(store.getState());
store.subscribe( () => {
    log('CURRENT STATE: ', store.getState());
});
store.dispatch(addExpense({description: 'Water bill', amount: 5000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 7000}));
store.dispatch(setTextFilter('bill'));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000);


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
log('VISIBLE: ', visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

