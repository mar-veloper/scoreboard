import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from "./layout/index";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch></Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
