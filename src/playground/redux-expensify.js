import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => { // selectors
    
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {

        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // date la plus récente, on prend b si vrai
        }
        
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; // on veut le plus grand amount, donc en prend b
        }

    });
};



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// DISPATCH
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000}));

const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt:  -1000 }));

// // store.dispatch(removeExpense({
// //     id: expenseOne.expense.id
// // }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// // FILTERS

// store.dispatch(setTextFilter('co'));
// // store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'zrerzer',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0,

    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined,
    },
};


// OBJECT SPREADING

// const user = {
//     name: 'Jen',
//     age: 24,
// };

// console.log({
//     ...user, // need babel to be configured for that
//     age: 27, // override
    
// });
