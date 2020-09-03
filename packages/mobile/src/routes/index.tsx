import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  // return (
  //   <View>
  //     <ActivityIndicator size="large" />
  //   </View>
  // );

  return <AuthRoutes />;
};

export default Routes;
