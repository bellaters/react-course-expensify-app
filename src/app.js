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


// TODO: clear this imports 
import { setTimeout } from 'timers';
import moment from 'moment';
import './firebase/firebase';
//import './playground/promises';

const store = configureStore();

/* 
store.subscribe( () => {
    log('CURRENT STATE: ', store.getState());
});
 */

 const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));



// add some fake data
//store.dispatch(addExpense({description: 'Water bill', amount: 5000, createAt: moment()}));
//console.log(store.getState());

//store.dispatch(addExpense({description: 'Gas bill', amount: 7000, createAt: moment()}));
//store.dispatch(addExpense({description: 'Rent', amount: 109500, createAt: moment()}));