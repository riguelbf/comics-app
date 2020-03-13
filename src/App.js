import React from 'react';
import Routes from './routes';

import Header from './components/Header';
import Global from './assets/styles/global';

function App () {
  return (
    <div className="App">
      <Global />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
