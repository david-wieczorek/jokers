import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import App from '../app';

import Home from './route_home';
import Team from './route_team';

const routes = [Home, Team];

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const Routes = () => (
  <HashRouter>
    <App>{routeComponents}</App>
  </HashRouter>
);

export default Routes;
