import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import AppProvider from './contexts';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer autoClose={4000} toastClassName="react-toastify" />

      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
