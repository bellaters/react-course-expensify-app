import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// 1. Create LoginPage component with 'Login' button
// 2. Add snapshot test for LoginPage
// 3. Show Login component at root of app -> /
// 4. Show ExpenseDashboardPage at -> /dashboard
export const LoginPage = ({startLogin}) => (
    <div>
        <button onClick={startLogin}>
            Login
        </button>        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);
