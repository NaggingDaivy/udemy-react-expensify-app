import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem.jsx';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props => (
    <div>
        
        <h1>Expense List</h1>
        {props.expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense} />
        ))
        }
    </div>

);

const mapStateToProps = state => // ConnectedExpenseList
    ({ // return props
        expenses: selectExpenses(state.expenses, state.filters), // selector
    });
// Not the HOC, but the function with the component
export default connect(mapStateToProps)(ExpenseList);

