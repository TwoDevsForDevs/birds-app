import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Home from '../pages/Home';
import AllBirds from '../pages/AllBirds';
import Bird from '../pages/Bird';
import Map from '../pages/Map';
import RegisterBird from '../pages/RegisterBird';
import RegisterBirdPickImage from '../pages/RegisterBirdPickImage';
import RegisterBirdInfo from '../pages/RegisterBirdInfo';
import RegisterBirdComplete from '../pages/RegisterBirdComplete';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllBirds" component={AllBirds} />
      <Stack.Screen name="Bird" component={Bird} />
    </Stack.Navigator>
  );
};

const RegisterRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background }
      }}
    >
      <Stack.Screen name="RegisterBird" component={RegisterBird} />
      <Stack.Screen
        name="RegisterBirdPickImage"
        component={RegisterBirdPickImage}
      />
      <Stack.Screen name="RegisterBirdInfo" component={RegisterBirdInfo} />
      <Stack.Screen
        name="RegisterBirdComplete"
        component={RegisterBirdComplete}
      />
    </Stack.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: getBottomSpace() + 56,
          backgroundColor: colors.white,
          borderTopColor: colors.lightGrey
        },
        labelStyle: {
          fontFamily: 'Roboto_400Regular',
          fontSize: 10,
          marginBottom: 5
        },
        inactiveTintColor: colors.grey,
        activeTintColor: colors.black
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeRoutes}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="home"
                size={24}
                color={focused ? colors.black : colors.grey}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={Map}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="map-pin"
                size={24}
                color={focused ? colors.black : colors.grey}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Registrar"
        component={RegisterRoutes}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="plus-circle"
                size={24}
                color={focused ? colors.black : colors.grey}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="user"
                size={24}
                color={focused ? colors.black : colors.grey}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
