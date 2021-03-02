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
// import Home from './components/pages/Home';
// import Team from './components/pages/Team';
// import Services from './components/pages/Services';
import Routes from "./routes";

function App() { 
  

  return (
    <div className="App">
       <BrowserRouter>
        <div>
            <Header/>
            <Switch> 
              {
                Routes.map( (routeConfig,i) => {
                  return (
                    <Route path={routeConfig.path} exact={routeConfig.exact}  component={routeConfig.component} key={i}  />
                  )
                })
              }
            </Switch>
            <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
