import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';

const Auth = createStackNavigator();

const AuthRoute: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background
        }
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="ResetPassword" component={ResetPassword} />
    </Auth.Navigator>
  );
};

export default AuthRoute;
