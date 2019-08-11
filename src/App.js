import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Common components
import NavBar from "./components/NavBar";
import Main from "./components/Main";

// Route-specific components
// import Intro from "./components/Intro";
const Intro = lazy(() => import("./components/Intro"));
// import Cowsay from "./components/Cowsay";
const Cowsay = lazy(() => import("./components/Cowsay"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main>
        <Switch>
          <Route path="/cowsay">
            <Suspense fallback={null}>
              <Cowsay />
            </Suspense>
          </Route>
          <Route path="/" exact={true}>
            <Suspense fallback={null}>
              <Intro />
            </Suspense>
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default App;
