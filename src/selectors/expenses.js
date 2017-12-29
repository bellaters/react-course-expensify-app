 // Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate}) => {
    
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.desciption.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a,b) => {
        switch(sortBy){
            case 'date':
                return a.createAt < b.createAt ? 1: -1;
            case 'amount':
                return a.amount < b.amount ? 1: -1;
        }
        // sortBy -> amount 
    });
};
