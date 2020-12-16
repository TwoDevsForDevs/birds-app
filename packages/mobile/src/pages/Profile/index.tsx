import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as ImagePicker from 'expo-image-picker';
import { useTheme } from 'styled-components';

import api from '../../services/api';

import { useAuth } from '../../hooks';

import MyData from './MyData';
import MyRegisters from './MyRegisters';

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

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { colors } = useTheme();

  const handleUpdateAvatar = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Você precisa permitir acesso a galeria para mudar a foto de perfil.'
      );
    }

    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5
    });

    if (!response.cancelled) {
      const data = new FormData();

      data.append('avatar', {
        type: 'image/jpeg',
        name: `${user.id}.jpg`,
        uri: response.uri
      });

      api.patch('/users/avatar', data).then(apiResponse => {
        updateUser(apiResponse.data);
      });
    }
  }, [updateUser, user.id]);

  return (
    <>
      <Container>
        <Header>
          <HelloContainer>
            <Hello>Olá,</Hello>
            <UserName>{user.name}</UserName>
          </HelloContainer>
          <UserAvatarButton onPress={handleUpdateAvatar}>
            <UserAvatar source={{ uri: user.avatar_url }} />
          </UserAvatarButton>
        </Header>
      </Container>

      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontFamily: 'Roboto_700Bold',
            fontSize: 16,
            marginBottom: 14,
            textTransform: 'none'
          },
          activeTintColor: colors.black,
          inactiveTintColor: colors.grey,
          indicatorStyle: {
            backgroundColor: colors.black,
            height: 3
          }
        }}
      >
        <Tab.Screen name="Meus registros" component={MyRegisters} />
        <Tab.Screen name="Meus dados" component={MyData} />
      </Tab.Navigator>
    </>
  );
};

export default Profile;
