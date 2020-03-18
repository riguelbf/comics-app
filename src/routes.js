import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import CharacterDetail from './pages/Detail';

export const routes = [

];

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />,
  <Route path="/character/:name" component={CharacterDetail} />
      </Switch>
    </BrowserRouter>
  );
}

