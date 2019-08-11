import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ProductPage from '../pages/ProductPage';


const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" exact component={ProductPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/admin" exact component={AdminPage} />
                <Route component={ErrorPage} />
            </Switch >
        </>
    )
}

export default Page;