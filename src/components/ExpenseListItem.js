import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createAt}) => (
    <Link to={`/edit/${id}`}>
        <div>
            <h3>{description}</h3>
            <span>{moment(createAt).format('MMMM DD, YYYY')}</span>
        </div>
            <h3>{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

export default ExpenseListItem;
