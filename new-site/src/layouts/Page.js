import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import ClientPage from '../pages/ClientPage';
import ContactPage from '../pages/ContactPage';
import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';



const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" exact component={ProductPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/client" exact component={ClientPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route component={ErrorPage} />
            </Switch >
        </>
    )
}

export default Page;