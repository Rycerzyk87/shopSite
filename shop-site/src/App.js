import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Header';

function Home() { return (<h1>Strona startowa</h1>) };
function News() { return (<h1>Aktualności</h1>) };
function Contact() { return (<h1>Kontakt</h1>) };

function App() {
  return (
    // <BrowserRouter>
    <div>
      <Header />
      <section>
        <Route path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />

      </section>
    </div>
    // </BrowserRouter>
  );
}

export default App;
