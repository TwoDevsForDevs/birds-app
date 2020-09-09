import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';

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
    <ThemeProvider theme={theme}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
