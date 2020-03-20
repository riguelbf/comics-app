/* istanbul ignore file */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CharacterDetail from './pages/Detail';
import Character from './pages/Character';

export const routes = [
  <Route path="/" exact component={Home} />,
  <Route path="/character/:id" exact component={CharacterDetail} />,
  <Route path="/character/:id/edit" exact component={Character} />
];

export default function Routes () {
  return (
    <Switch>
      {routes.map(route => route)}
    </Switch>
  );
}

