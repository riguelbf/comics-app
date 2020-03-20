/* istanbul ignore file */
/* istanbul ignore file */
import React from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from "./store";

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './assets/styles/global';

function App () {

  const history = createHistory({
    basename: "",
    forceRefresh: false
  });

  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Routes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
