import React from "react";
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "../../routes";


export const mountContainerWithRouter = (
  container = { pathToMatch: '/', container: () => <div /> },
  state = {},
  initialIndex = 0,
  pathname = '',
  search = '',
  initialEntries = [pathname + search],
  // pathToMatch = "/",
  // actionInterceptor = () => { }
) => {

  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore(state);

  return render(
    <MemoryRouter
      initialEntries={initialEntries}
      initialIndex={initialIndex}
    >
      <Provider store={store}>
        {
          routes.map(route => {
            return route.props.component != container ? route : container;
          })
        }
      </Provider>
    </MemoryRouter>
  );
};
