import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

import Google from '../../assets/google.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Google />
      <Text>Hello SignIn</Text>
    </Container>
  );
};

export default SignIn;
