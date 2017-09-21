import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Routes from './App.routes';

class App extends Component {

    render() {
    return (
        <Router>
      <main className="App">

              <Routes />

          <footer>
              <nav className="tabs">
                  <NavLink activeClassName="active-link" to="/products">Products</NavLink>
                  <NavLink activeClassName="active-link" to="/favorites">Favorites</NavLink>
                </nav>
            </footer>

      </main>
        </Router>
    );
  }
}

export default App;
