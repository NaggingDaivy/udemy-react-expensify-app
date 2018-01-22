import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


// Store creation

// const store = createStore(expensesReducer);
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer, // state root value, here expenses and filters
            filters: filtersReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // redux dev tools
    );
    return store;
};