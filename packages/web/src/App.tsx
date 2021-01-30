import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import AppProvider from './contexts';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer autoClose={4000} toastClassName="react-toastify" />

        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
