export default (exps = []) => {
    const expenseTotal = exps.reduce( (prevTotal, expense) => {
        return prevTotal + expense.amount;
    }, 0);

    return expenseTotal;
};