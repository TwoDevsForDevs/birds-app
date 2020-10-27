import React, { useCallback } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as ImagePicker from 'expo-image-picker';

import { useAuth } from '../../hooks';

import MyData from './MyData';

import {
  Container,
  Header,
  HelloContainer,
  Hello,
  UserName,
  UserAvatarButton,
  UserAvatar
} from './styles';

const Tab = createMaterialTopTabNavigator();

const Test1: React.FC = () => {
  return (
    <Container>
      <UserName>Teste1</UserName>
    </Container>
  );
};

const Profile: React.FC = () => {
  const { user } = useAuth();

  const handleUpdateAvatar = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }, []);

  return (
    <>
      <Container>
        <Header>
          <HelloContainer>
            <Hello>Olá,</Hello>
            <UserName>Paulo Henrique</UserName>
          </HelloContainer>
          <UserAvatarButton onPress={handleUpdateAvatar}>
            <UserAvatar source={{ uri: user.avatar_url }} />
          </UserAvatarButton>
        </Header>
      </Container>
      <Tab.Navigator>
        <Tab.Screen name="Minhas fotos" component={Test1} />
        <Tab.Screen name="Meus dados" component={MyData} />
      </Tab.Navigator>
    </>
  );
};

export default Profile;
