import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Global from './styles/Global';

// import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />

      <Global />
    </BrowserRouter>
  );
};

export default App;
