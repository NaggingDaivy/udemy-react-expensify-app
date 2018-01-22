// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // will make Store available to all components on the app
import 'normalize.css';
import AppRouter from './routers/AppRouter.jsx';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';

const store = configureStore();


const state = store.getState();

// const visiblesExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visiblesExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
