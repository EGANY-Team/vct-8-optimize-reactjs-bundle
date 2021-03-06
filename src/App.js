import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Common components
import NavBar from "./components/NavBar";
import Main from "./components/Main";

// Route-specific components
import Intro from "./components/Intro";
import Cowsay from "./components/Cowsay";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main>
        <Switch>
          <Route path="/cowsay">
            <Cowsay />
          </Route>
          <Route path="/" exact={true}>
            <Intro />
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default App;
