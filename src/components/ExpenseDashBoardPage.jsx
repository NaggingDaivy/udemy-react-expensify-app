import React from 'react';
import ExpenseList from './ExpenseList.jsx';
import ExpenseListFilters from './ExpenseListFilters.jsx';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);


export default ExpenseDashBoardPage;
