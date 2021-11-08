import React from "react";
import { Route, Switch } from "react-router-dom";

import './App.css';
import VendingMachine from "./VendingMachine";
import Snickers from "./Snickers";
import Doritos from "./Doritos";
import MountainDew from "./MountainDew";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="App">Vending Machine</h1>
      <Switch>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/mtndew">
          <MountainDew />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
        <Route exact path="/doritos">
          <Doritos />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
