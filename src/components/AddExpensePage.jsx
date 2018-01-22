import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.jsx';
import { addExpense } from '../actions/expenses';

const AddExpensePage = ({ dispatch, history }) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                console.log('Add expense : ', expense);
                dispatch(addExpense(expense));
                history.push('/');// to kick to the dash page
            }}
        />
    </div>
);

const mapStateToProps = state => ({
    expenses: state.expenses
});


export default connect(mapStateToProps)(AddExpensePage);

// export default AddExpensePage;
