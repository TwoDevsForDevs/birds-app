import React, { useCallback, useEffect, useState } from 'react';
import { Linking, Alert, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useTheme } from 'styled-components';
import api from '../../services/api';

import Title from '../../components/Title';
import GoBackButton from '../../components/GoBackButton';
import Header from '../../components/Header';
import BirdGallery from '../../components/BirdGallery';

import Placeholder from './Placeholder';
import {
  Container,
  HeaderBirdPopularName,
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

interface BirdRegister {
  id: string;
  owner_id: string;
  bird_id: string;
  image_url: string;
  location: string;
  register_date: string;
  obs: string;
  likes: number;
  views: number;
}

const Bird: React.FC = () => {
  const route = useRoute();
  const { colors } = useTheme();

  const routeParams = route.params as RouteParams;

  const [bird, setBird] = useState({} as Bird);
  const [birdRegisters, setBirdRegisters] = useState<BirdRegister[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [passedHeaderHeight, setPassedHeaderHeight] = useState(false);

  useEffect(() => {
    async function getBirds() {
      try {
        setLoading(true);

        const [birdsResponse, birdRegistersResponse] = await Promise.all([
          api.get(`birds/${routeParams.birdId}`),
          api.get(`birds-registers?bird_id=${routeParams.birdId}`)
        ]);

        setBird(birdsResponse.data);
        setBirdRegisters(birdRegistersResponse.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getBirds();
  }, [routeParams.birdId]);

  const handleOpenBrowser = useCallback(async (wikiAvesUrl: string) => {
    try {
      await Linking.canOpenURL(wikiAvesUrl);
      await Linking.openURL(wikiAvesUrl);
    } catch (err) {
      Alert.alert('Error', 'Ocorreu um erro ao tentar abrir a página web.');
    }
  }, []);

  const handleScroll = useCallback(event => {
    if (event.nativeEvent.contentOffset.y >= 40) {
      setPassedHeaderHeight(true);
    } else {
      setPassedHeaderHeight(false);
    }
  }, []);

  if (loading) {
    return <Placeholder />;
  }

  if (error) {
    return (
      <Container>
        <Text>Error</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Header
        style={
          passedHeaderHeight && {
            borderBottomWidth: 1,
            borderBottomColor: colors.lightGrey,
            borderStyle: 'solid'
          }
        }
      >
        <GoBackButton />

        {passedHeaderHeight && (
          <>
            <HeaderBirdPopularName>{bird.popular_name}</HeaderBirdPopularName>

            <View style={{ width: 40, height: 40 }} />
          </>
        )}
      </Header>

      <Content onScroll={handleScroll} scrollEventThrottle={16}>
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

          {birdRegisters.length >= 1 && (
            <BirdInfo>
              <Label>Galeria:</Label>

              <BirdGallery
                birdRegisters={birdRegisters}
                onPress={() => console.log('xd')}
              />
            </BirdInfo>
          )}
        </BirdInfoContainer>
      </Content>
    </Container>
  );
};

export default Bird;
