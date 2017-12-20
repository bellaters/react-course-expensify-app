import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true}>
                    <ExpenseDashboardPage /> 
                </Route>
                <Route path="/create">
                    <AddExpensePage />
                </Route>
                <Route path="/edit">
                    <EditExpensePage />
                </Route>
                <Route path="/help">
                    <HelpPage />
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
            <a href="http://localhost:8080/pagennotexist"> Go to PageNotExist </a>
        </div>
    </BrowserRouter>
);

export default AppRouter;