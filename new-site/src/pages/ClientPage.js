import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const permission = false;

const ClientPage = () => {
    return (
        <Route render={() => (
            permission ? <h3> Strefa klienta - witaj</h3> : <Redirect to="/login" />
        )} />
    );
}

export default ClientPage;
