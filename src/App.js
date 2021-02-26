// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
// import './App.css';
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Button, Badge, Accordion, Card, Dropdown } from 'react-bootstrap';
// import { render } from '@testing-library/react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/media">
              <Media/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route> */}
            <Route path="/" exact>
              <Home />
            </Route>

          </Switch>

          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
