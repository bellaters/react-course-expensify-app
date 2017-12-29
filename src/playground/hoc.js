// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && 
                <p>This is private info. Please don't share!</p>}
        <WrappedComponent {...props}/>
        </div>
    );
};

// CHALLENGE 100.1 - requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated  ? (
                <WrappedComponent {...props}/>
            ) : (
                <div>
                    <p>Please login!</p>
                </div>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details'/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='There are the details'/>, document.getElementById('app'))