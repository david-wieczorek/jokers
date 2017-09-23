import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

import App from '../app';

import Home from './route_home';
import Team from './route_team';

const routes = [Home, Team];

const store = createStore(reducer);

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const Routes = () => (
  <Provider store={store}>
    <HashRouter>
      <App>{routeComponents}</App>
    </HashRouter>
  </Provider>
);

export default Routes;
