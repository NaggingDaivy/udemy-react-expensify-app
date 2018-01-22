// High Order Component (HOC) - A Component that renders another component
// Reuse code
// Render hijacking
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
    <div>
        <h1>Info</h1>
        <p>This info is : {props.info}</p>
    </div>
);

const withAdminWarning = WrappedComponent => props => (
    <div>
        {props.isAdmin && <p>This is private info. Please don't share</p>}
        <WrappedComponent {...props} />
    </div>
);

const requireAunthentification = WrappedComponent => props => (
    <div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (
            <p>You must log in to see the page.</p>
        )}
    </div>
);

const AuthInfo = requireAunthentification(Info);
const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="This is the datails" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the datails" />, document.getElementById('app'));
