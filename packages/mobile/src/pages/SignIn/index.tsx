import React from 'react';
import { View, Text } from 'react-native';

import Logo from '../../../assets/Test';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <View>
        <Logo />
      </View>
      <Title>Hello SignIn</Title>
    </Container>
  );
};

export default SignIn;
