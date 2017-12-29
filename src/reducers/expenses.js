// Expense Reducers
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => id !== action.id);
        case 'EDIT_EXPENSIVE':
            return state.map( (expense) => {
                if(expense.id === action.expense.id){
                    return {
                        ...expense,
                        ...action.expense
                    };  
                }else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
