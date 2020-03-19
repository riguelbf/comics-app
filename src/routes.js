import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CharacterDetail from './pages/Detail';

export const routes = [
  <Route path="/" exact component={Home} />,
  <Route path="/character/:id" component={CharacterDetail} />
];

export default function Routes () {
  return (
    <Switch>
      {routes.map(route => route)}
    </Switch>
  );
}

