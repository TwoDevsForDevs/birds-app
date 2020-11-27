import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Search from './Search';

import {
  Container,
  MainContent,
  Header,
  HeaderText,
  SearchContainer,
  SearchTitle,
  UnknowBird,
  UnknowBirdText
} from './styles';

const RegisterBird: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToPickBirdImage = useCallback(() => {
    navigation.navigate('RegisterBirdPickImage', {
      birdId: null,
      birdName: ''
    });
  }, [navigation]);

  return (
    <Container>
      <MainContent>
        <Header>
          <HeaderText>Adicionar Registro</HeaderText>
        </Header>
        <SearchContainer>
          <SearchTitle>Ave</SearchTitle>
          <Search />
        </SearchContainer>
      </MainContent>
      <UnknowBird onPress={handleNavigateToPickBirdImage}>
        <UnknowBirdText>Não conheço a espécie da ave</UnknowBirdText>
      </UnknowBird>
    </Container>
  );
};

export default RegisterBird;
