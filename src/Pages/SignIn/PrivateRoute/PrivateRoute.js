import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { allContext } = useAuth();
    const { isLoading } = allContext;
    if (isLoading) {
        return <Spinner animation="border" variant="secondary" />
    }
    return (
        <Route
        {...rest}
        render={({ location }) => allContext?.user?.email ? children :
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
        }></Route>
    );
};

export default PrivateRoute;