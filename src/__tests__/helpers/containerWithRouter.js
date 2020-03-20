/* istanbul ignore file */
import React from "react";
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "../../routes";

import { mockState } from "./mockState";


export const mountContainerWithRouter = (
  container = { pathToMatch: '/', container: () => <div /> },
  state,
  initialIndex = 0,
  pathname = '',
  search = '',
  initialEntries = [pathname + search],
  // pathToMatch = "/",
  // actionInterceptor = () => { }
) => {

  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const states = state || mockState;
  const store = mockStore(states);

  return render(
    <MemoryRouter
      initialEntries={initialEntries}
      initialIndex={initialIndex}
    >
      <Provider store={store}>
        {
          routes.map((route, index) => {
            return <div key={index}> {route.props.component != container ? route : container}</div>;
          })
        }
      </Provider>
    </MemoryRouter>
  );
};
