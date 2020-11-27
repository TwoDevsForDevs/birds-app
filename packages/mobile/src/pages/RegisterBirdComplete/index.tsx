import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';

import Button from '../../components/Button';

import {
  Container,
  IconContainer,
  Content,
  Title,
  Message,
  ButtonContainer
} from './styles';

const RegisterBirdComplete: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <IconContainer>
        <Icon name="check" size={80} color={colors.success} />
      </IconContainer>
      <Content>
        <Title>Registro concluído com sucesso</Title>
        <Message>
          Seu registro será analisado pelos administradores e assim que obtermos
          uma resposta você será notificado.
        </Message>
        <ButtonContainer>
          <Button onPress={() => navigation.navigate('Home')}>Ok</Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default RegisterBirdComplete;
