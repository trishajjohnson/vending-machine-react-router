import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import VendingMachine from "./VendingMachine";
import Snickers from "./Snickers";
import Doritos from "./Doritos";
import MountainDew from "./MountainDew";

function App() {
  return (
    <div className="App">
      {/* <h1>Vending Machine</h1> */}
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
