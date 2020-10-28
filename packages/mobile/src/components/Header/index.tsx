import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, Content } from './styles';

interface HeaderProps {
  style?: ViewStyle | false;
}

const Header: React.FC<HeaderProps> = ({ children, style }) => {
  return (
    <Container style={style}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Header;
