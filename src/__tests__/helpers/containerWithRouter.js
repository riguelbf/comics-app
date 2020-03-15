import React from "react";
// import { createStore } from "redux";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { routes } from "../../routes";

// import { Provider } from "react-redux";

export const mountContainerWithRouter = (
  container = { pathToMatch: '/', container: () => <div /> },
  initialIndex = 0,
  pathname = '',
  search = '',
  initialEntries = [pathname + search],
  // state = {},
  // pathToMatch = "/",
  // actionInterceptor = () => { }
) => {
  // const reduxStore = createStore(
  //   s => s,
  //   state,
  //   actionInterceptor
  // );

  // const history = createMemoryHistory();

  return render(
    <MemoryRouter
      initialEntries={initialEntries}
      initialIndex={initialIndex}

    >
      {/* <Provider store={reduxStore}> */}
      {
        routes.map(route => {
          return route.props.component != container ? route : container;
        })
      }
      {/* <Route path={pathToMatch} render={() => container} />
      <Route path="/character/:name" component={CharacterDetail} /> */}
      {/* </Provider> */}
    </MemoryRouter>
  );
};
