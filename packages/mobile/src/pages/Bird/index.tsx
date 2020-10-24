import React, { useCallback, useEffect, useState } from 'react';
import { Linking, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import Title from '../../components/Title';
import GoBackButton from '../../components/GoBackButton';
import Header from '../../components/Header';

import {
  Container,
  Content,
  BirdImage,
  BirdInfoContainer,
  BirdInfo,
  Label,
  InfoText,
  WikiAvesLink
} from './styles';

interface RouteParams {
  birdId: string;
}

interface Bird {
  id: string;
  popular_name: string;
  scientific_name: string;
  conservation: string;
  habitat: string;
  diet: string;
  wikiaves_link: string;
  image_url: string;
}

const Bird: React.FC = () => {
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  const [bird, setBird] = useState({} as Bird);

  useEffect(() => {
    async function getBird() {
      try {
        const response = await api.get(`birds/${routeParams.birdId}`);

        setBird(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getBird();
  }, [routeParams.birdId]);

  const handleOpenBrowser = useCallback(async (wikiAvesUrl: string) => {
    try {
      await Linking.canOpenURL(wikiAvesUrl);
      await Linking.openURL(wikiAvesUrl);
    } catch (err) {
      Alert.alert('Error', 'Ocorreu um erro ao tentar abrir a página web.');
    }
  }, []);

  return (
    <Container>
      <Header>
        <GoBackButton />
      </Header>

      <Content>
        <Title>{bird.popular_name}</Title>

        <BirdImage source={{ uri: bird.image_url }} />

        <BirdInfoContainer>
          <BirdInfo>
            <Label>Nome científico:</Label>
            <InfoText>{bird.scientific_name}</InfoText>
          </BirdInfo>

          <BirdInfo>
            <Label>Estado de conservação:</Label>
            <InfoText>{bird.conservation}</InfoText>
          </BirdInfo>

          <BirdInfo>
            <Label>Habitat:</Label>
            <InfoText>{bird.habitat}</InfoText>
          </BirdInfo>

          <BirdInfo>
            <Label>Link para WIKIAVES:</Label>
            <WikiAvesLink onPress={() => handleOpenBrowser(bird.wikiaves_link)}>
              <InfoText style={{ textDecorationLine: 'underline' }}>
                {bird.wikiaves_link}
              </InfoText>
            </WikiAvesLink>
          </BirdInfo>

          <BirdInfo>
            <Label>Galeria:</Label>
          </BirdInfo>
        </BirdInfoContainer>
      </Content>
    </Container>
  );
};

export default Bird;
