import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom'
import Header from './Header'

function App() {
  return (
    // <BrowserRouter>
    <div>
      <Header />
      <section>
        Strona - witaj
        </section>
    </div>
    // </BrowserRouter>
  );
}

export default App;
