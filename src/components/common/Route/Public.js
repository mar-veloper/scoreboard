import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ path, component: Component, ...rest }) => (
  <Route {...rest} path="/" render={props => <Component {...props} />} />
);

export default PublicRoute;
