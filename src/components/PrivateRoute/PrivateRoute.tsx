import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../../services/authService';
import { store } from '../../store/store';

interface RouteProps {
    roles?: string[];
    Component: React.FC<any>;
}

const PrivateRoute: React.FC<RouteProps> = ({ Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            const state = store.getState();
            const currentUser = authService.currentUserValue;
            if (!currentUser) {
                // If not logged in, redirect to login page
                return (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />
                );
            }

            // If not authorised by role, redirect to home page
            if (roles && roles.indexOf(currentUser.role) === -1) {
                return <Redirect to={{ pathname: '/' }} />;
            }

            // If authorised, return component
            return <Component {...props} />;
        }}
    />
);

export default PrivateRoute;
