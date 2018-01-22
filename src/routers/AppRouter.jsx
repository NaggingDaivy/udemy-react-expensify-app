import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import AddExpensePage from '../components/AddExpensePage.jsx';
import EditExpensePage from '../components/EditExpensePage.jsx';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage.jsx';
import HelpPage from '../components/HelpPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import Header from '../components/Header.jsx';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch> {/* with switch, return when find a match */}
                <Route path='/' component={ExpenseDashBoardPage} exact={true} /> {/* exact va prendre le nom de la route EXACTE */}
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} /> {/* 404 page */}
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
