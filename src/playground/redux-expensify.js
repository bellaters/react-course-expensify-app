import {createStore, combineReducers} from 'redux';

const log = console.log;
log('running');
const demoState = {
    expenses: [{
        id: 'foo',
        desciption: 'January Rent',
        note: 'This was the final payment for the address',
        amount: 54500, //given in cent ;)
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
console.log(demoState);
