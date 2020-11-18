import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Route from 'components/common/Route';
import Layout from './layout/index';
import HomePage from './pages/HomePage';
import Players from 'context/players';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Players.Controller>
        <Layout>
          <Switch>
            <Route.Public exact path="/" component={HomePage} />
            <Route.Public path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </Layout>
      </Players.Controller>
    </BrowserRouter>
  );
};

export default App;
