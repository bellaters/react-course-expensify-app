import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';


const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text}
            onChange={(e)=>{
                props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select 
            value={props.filters.sortBy}
            onChange={(e)=>{
                const sortValue = e.target.value;
                switch(sortValue){
                    case 'date':
                        props.dispatch(sortByDate());
                    case 'amount':
                        props.dispatch(sortByAmount());
                }
                console.log(sortValue);
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

// CHALLENGE 104.1
// setup value and onChange for select

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);