import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Page from './Page';
import Navigation from './Navigation';
import Footer from './Footer';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            {<Header />}
          </header>
          <main>
            <aside>
              {<Navigation />}
            </aside>
            <section className="blog">
              {<Page />}
            </section>
          </main>
          <footer>
            {<Footer />}
          </footer>

        </div>
      </Router>
    )
  }
}

export default App;
