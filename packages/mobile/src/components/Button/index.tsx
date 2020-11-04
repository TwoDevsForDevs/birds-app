import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  loading?: boolean;
  color?: string;
  background?: string;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  children,
  color = '#fff',
  background = '#272727',
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container color={color} background={background} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <ButtonText color={color}>{children}</ButtonText>
      )}
    </Container>
  );
};

export default Button;
