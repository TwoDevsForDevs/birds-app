import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import theme from './src/styles/theme';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar translucent />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
