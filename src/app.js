import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';

import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';


// TODO: clear this imports 
import { setTimeout } from 'timers';
import moment from 'moment';
//import './playground/promises';

const store = configureStore();

 const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// render only ones! I.e. make a singelton
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));  
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged( (user) => {
    if(user){
        //console.log('log in');
        store.dispatch(startSetExpenses()).then( () =>{
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    } else {
        //console.log('log out');
        renderApp();
        history.push('/');
    }
});

//ReactDOM.render(jsx, document.getElementById('app'));


// add some fake data
//store.dispatch(addExpense({description: 'Water bill', amount: 5000, createAt: moment()}));
//console.log(store.getState());

//store.dispatch(addExpense({description: 'Gas bill', amount: 7000, createAt: moment()}));
//store.dispatch(addExpense({description: 'Rent', amount: 109500, createAt: moment()}));