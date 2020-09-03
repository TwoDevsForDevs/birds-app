import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const Auth = createStackNavigator();

const AuthRoute: React.FC = () => (
  <Auth.Navigator screenOptions={{ headerShown: false }}>
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default AuthRoute;
