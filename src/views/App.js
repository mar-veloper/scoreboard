import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./layout/index";
import HomePage from "./pages/HomePage";
import Players from "context/players";

const App = () => {
  return (
    <BrowserRouter>
      <Players.Controller>
        <Layout>
          <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} />} />
          </Switch>
        </Layout>
      </Players.Controller>
    </BrowserRouter>
  );
};

export default App;
