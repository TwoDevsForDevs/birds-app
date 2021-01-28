import React, { useCallback } from 'react';
import UserAvatar from 'react-native-user-avatar';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../../hooks';

import {
  Container,
  UserAvatarContainer,
  UserAvatarImage,
  ActionsContainer,
  AllBirdsButton,
  AllBirdsButtonText
} from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const handleNavigateToAllBirds = useCallback(() => {
    navigation.navigate('AllBirds');
  }, [navigation]);

  return (
    <Container>
      <UserAvatarContainer>
        {user.avatar_url ? (
          <UserAvatarImage source={{ uri: user.avatar_url }} />
        ) : (
          <UserAvatar size={32} name={user.name} />
        )}
      </UserAvatarContainer>

      <ActionsContainer>
        <AllBirdsButton onPress={handleNavigateToAllBirds}>
          <AllBirdsButtonText>Todas as aves</AllBirdsButtonText>
        </AllBirdsButton>
      </ActionsContainer>
    </Container>
  );
};

export default Header;
