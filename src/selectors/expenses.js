// Get visible expenses
import moment from 'moment'

export default (expenses, { text, sortBy, startDate, endDate }) => { // selectors
    
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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
