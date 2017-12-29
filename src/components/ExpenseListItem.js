// Export a stateless functional component
// description, amount, createdAt  
// Use as reference indecision app 
import React from 'react';

const ExpenseListItem = ({description, amount, createAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createAt}</p>
    </div>
);

export default ExpenseListItem;
