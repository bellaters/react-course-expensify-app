import React from 'react';

// CHALLENGE 103.1 - add handler to button,
// such that the expensiv will be removed
const ExpenseListItem = ({description, amount, createAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createAt}</p>
        <button>Remove</button>
    </div>
);

export default ExpenseListItem;

//export default connect(mapStateToProps)(ExpenseListFilters);
