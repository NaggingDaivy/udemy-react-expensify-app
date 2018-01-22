import {
    addExpense,
    editExpense,
    removeExpense
} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({
        id: '123abc'
    });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    });

});

test('should setup edit expense action object', () => {
    const id = '123abc';
    const description = 'blabla';
    const amount = 0;
    const note = 'myNote';

    const action = editExpense(id, {
        description,
        amount,
        note
    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates: {
            description,
            amount,
            note,
        },
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'blabla',
        amount: 0,
        note: 'myNote',
        createdAt: 1000,
    };


    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object without value', () => {

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            amount: 0,
            createdAt: 0,
            description: '',
            note: '',
        }
    });
});
