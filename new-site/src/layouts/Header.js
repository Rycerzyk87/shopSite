import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css'
import header1 from '../images/brocoli.jpg';
import header2 from '../images/grapefruit.jpg';
import header3 from '../images/vegetables.jpg';

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (<img src={header3} alt="vegetables" />)} />
                <Route path="/products" render={() => (<img src={header2} alt="orange" />)} />
                <Route path="/contact" render={() => (<img src={header1} alt="broccoli" />)} />
                <Route path="/admin" render={() => (<img src={header1} alt="broccoli" />)} />
                {/* na dole route do error 404 */}
                <Route render={() => (<img src={header3} alt="vege" />)} />
            </Switch>

        </>
    )
}

export default Header;