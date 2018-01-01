export default (expenses = []) => 
    expenses.reduce( (prevTotal, expense) => { 
        return prevTotal + expense.amount; 
    }, 0);