import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.jsx';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = props => (
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');

            }}
        />
        <button
            onClick={() => {
                // console.log(id);
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');

            }}
        >
        Remove
        </button>
    </div>
);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => props.match.params.id === expense.id),
});


export default connect(mapStateToProps)(EditExpensePage);
