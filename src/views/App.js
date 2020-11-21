import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Route from 'components/common/Route';
import Layout from './layout/index';
import HomePage from './pages/HomePage';
import Players from 'context/players';
import NotFound from './pages/NotFound';
import { SWRConfig } from 'swr';
import Axios from 'axios';
import AddPlayerPage from './pages/AddPlayer';
import PlayerPage from './pages/PlayerPage';

const App = () => {
  return (
    <BrowserRouter>
      <SWRConfig
        value={{
          dedupingInterval: 1000,
          fetcher: (...args) => Axios(...args).then(res => res.data),
        }}
      >
        <Players.Controller>
          <Layout>
            <Switch>
              <Route.Public path="/players/:id" component={PlayerPage} />
              <Route.Public path="/add-player" component={AddPlayerPage} />
              <Route.Public exact path="/" component={HomePage} />
              <Route.Public path="/not-found" component={NotFound} />
              <Redirect exact from="/players" to="/" />
              <Redirect to="/not-found" />
            </Switch>
          </Layout>
        </Players.Controller>
      </SWRConfig>
    </BrowserRouter>
  );
};

export default App;
