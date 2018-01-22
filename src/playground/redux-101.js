import { createStore } from 'redux';

// Action generators - funcitons that return action objects

// const add = ({ a, b }) => a + b; // object destructuring 

// console.log(add({ a: 1, b: 12 }));


// object destructuring, avec incrementBy qui a une valeur par def de 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy,
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({ count }) => ({
    type: 'SET',
    count,
});


// REDUCERS
// 1. Reducers are pure functions

// Exemple of non-pure function  
// const a = 10;
// const add = b => a + b;
// a is exterior to the function

// EXemple of pure function
// const add = (a,b) => a + b
// const res = add(3,4);
// Nothing is exterior

// 2. NEVER CHANGE state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                count: state.count + action.incrementBy,
            };
        }
        case 'DECREMENT': {
            return {
                count: state.count - action.decrementBy,
            };
        }

        case 'RESET':
            return {
                count: 0,
            };
        case 'SET': {
            return {
                count: action.count,
            };
        }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => { // ce qui se passe à chaque fois qu'on change le state
    console.log(store.getState());
});

// unsubscribe();


// Actions - nothing more than an object that get sent to the store
// increment, decrement, reset
// i would like to increment the count
// store.dispatch({
//     type: 'INCREMENT', // Naming convention in REDUX
//     incrementBy: 5,
// });
store.dispatch(incrementCount({ incrementBy: 5 }));


store.dispatch(decrementCount({ decrementBy: 10 }));


store.dispatch(resetCount());

store.dispatch(setCount({ count: 105 }));


console.log(store.getState());
