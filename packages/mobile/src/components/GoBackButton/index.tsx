import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';

import { Container } from './styles';

const GoBackButton: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container onPress={handleNavigateBack}>
      <Icon name="chevron-left" size={20} color={colors.black} />
    </Container>
  );
};

export default GoBackButton;
