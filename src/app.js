import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const log = console.log;
const store = configureStore();

log(store.getState());


ReactDOM.render(<AppRouter />, document.getElementById('app'));

