import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';

import { Container } from './styles';

interface ButtonProps extends RectButtonProperties {
  handleNavigation: () => void;
}

const GoBackButton: React.FC<ButtonProps> = ({ handleNavigation }) => {
  const { colors } = useTheme();

  return (
    <Container onPress={handleNavigation}>
      <Icon name="chevron-right" size={20} color={colors.white} />
    </Container>
  );
};

export default GoBackButton;
