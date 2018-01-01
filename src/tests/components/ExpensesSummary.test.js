import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test(' should correctly rendere ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary count={1} total={100} />);
    expect(wrapper).toMatchSnapshot();
});

test(' should correctly rendere ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary count={10} total={1000} />);
    expect(wrapper).toMatchSnapshot();
});