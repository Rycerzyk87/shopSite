import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Logo from './Logo';


const Home = () => <h1>Strona Start</h1>;
const News = () => <h1>Aktualności</h1>;
const Offer = () => <h1>Oferta</h1>
const Contact = () => <h1>Kontakt</h1>;
const Error = () => <h1>Strone nie istnieje</h1>;

function App() {
  return (

    <BrowserRouter>

      <div className="main">
        <Logo />
        <header>
          <nav>
            <ul>
              <li><NavLink exact to="/">Start</NavLink></li>
              <li><NavLink to="/news">Aktualności</NavLink></li>
              <li><NavLink to="/offer">Oferta</NavLink></li>
              <li><NavLink to="/contact">Kontakt</NavLink></li>

            </ul>
          </nav>
        </header>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/offer" component={Offer} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>

  );
}

export default App;
