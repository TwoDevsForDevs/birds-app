import React, { useCallback } from 'react';
import { Button } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../../hooks/auth';

import {
  Container,
  Content,
  UserAvatar,
  UserAvatarImage,
  UserAvatarIcon,
  ActionsContainer,
  AllBirdsButton,
  AllBirdsButtonText
} from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { user, signOut } = useAuth();

  const handleNavigateToAllBirds = useCallback(() => {
    navigation.navigate('AllBirds');
  }, [navigation]);

  return (
    <Container>
      <Content>
        <UserAvatar>
          {user.avatar_url ? (
            <UserAvatarImage
              source={{
                uri:
                  'https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4'
              }}
            />
          ) : (
            <UserAvatarIcon>
              <Icon name="user" color={colors.grey} size={20} />
            </UserAvatarIcon>
          )}
        </UserAvatar>

        <Button title="Sair" onPress={signOut} />

        <ActionsContainer>
          <AllBirdsButton onPress={handleNavigateToAllBirds}>
            <AllBirdsButtonText>Todas as aves</AllBirdsButtonText>
          </AllBirdsButton>
        </ActionsContainer>
      </Content>
    </Container>
  );
};

export default Header;
