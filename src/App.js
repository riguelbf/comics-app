import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Header from './components/Header';
import GlobalStyles from './assets/styles/global';

function App () {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
