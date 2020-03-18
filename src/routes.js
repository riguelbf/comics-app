import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import CharacterDetail from './pages/Detail';

export const routes = [
  <Route path="/" exact component={Home} />,
  <Route path="/character/:id" component={CharacterDetail} />
];

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => route)}
      </Switch>
    </BrowserRouter>
  );
}

