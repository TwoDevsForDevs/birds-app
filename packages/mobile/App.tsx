import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';

import AppProvider from './src/hooks';
import Routes from './src/routes';
import theme from './src/styles/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FBFBFB"
        translucent
      />

      <AppProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
