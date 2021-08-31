import React from 'react';
import logo from './logo.svg';
import client from './Client'
import './App.css';
import { ClientContext } from 'graphql-hooks';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <ClientContext.Provider value={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/app" component={Main} />
          <Redirect to="/app" />
        </Switch>
      </BrowserRouter>
    </ClientContext.Provider>
  );
}

export default App;
