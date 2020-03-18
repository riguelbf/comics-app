import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from "./store";

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './assets/styles/global';

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
