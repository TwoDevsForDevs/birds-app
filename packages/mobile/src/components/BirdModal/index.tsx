import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { parseISO, format } from 'date-fns';

import { Text } from 'react-native';

import api from '../../services/api';

import Placeholder from './Placeholder';

import {
  Container,
  Content,
  CloseButton,
  BirdImage,
  PopularityContainer,
  LikesContainer,
  NumberOfLikes,
  Likes,
  ViewsContainer,
  NumberOfViews,
  Views,
  LikeButton,
  LikeText,
  RegisterInfo,
  InfoContainer,
  InfoTitle,
  Info
} from './styles';

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

interface BirdModalProps {
  birdId: string;
  handleModal: () => void;
}

const BirdModal: React.FC<BirdModalProps> = ({ birdId, handleModal }) => {
  const { colors } = useTheme();

  const [register, setRegister] = useState<BirdRegister>({} as BirdRegister);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadRegister() {
      try {
        setLoading(true);

        const response = await api.get(`birds-registers/${birdId}`);

        console.log(response.data);

        const formattedRegister = response.data;

        formattedRegister.register_date = format(
          parseISO(formattedRegister.register_date),
          'dd/MM/yyyy'
        );

        setRegister(formattedRegister);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    loadRegister();
  }, [birdId]);

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
      {register && (
        <Modal
          isVisible
          onBackdropPress={handleModal}
          onBackButtonPress={handleModal}
          style={{ padding: 24 }}
        >
          <Content>
            <CloseButton onPress={handleModal}>
              <Icon name="chevron-left" size={20} color={colors.black} />
            </CloseButton>
            <BirdImage source={{ uri: register.image_url }} />
            <PopularityContainer>
              <LikesContainer>
                <NumberOfLikes>{register.likes}</NumberOfLikes>
                <Likes>curtidas</Likes>
              </LikesContainer>
              <ViewsContainer>
                <NumberOfViews>{register.views}</NumberOfViews>
                <Views>visualizações</Views>
              </ViewsContainer>
            </PopularityContainer>
            <LikeButton>
              <Icon name="heart" size={18} color={colors.grey} />
              <LikeText>Curtir</LikeText>
            </LikeButton>
            <RegisterInfo>
              <InfoContainer>
                <InfoTitle>Autor:</InfoTitle>
                <Info>Autor:</Info>
              </InfoContainer>
              <InfoContainer>
                <InfoTitle>Autor:</InfoTitle>
                <Info>Autor:</Info>
              </InfoContainer>
              <InfoContainer>
                <InfoTitle>Localidade:</InfoTitle>
                <Info>Autor:</Info>
              </InfoContainer>
              <InfoContainer>
                <InfoTitle>Data de registro:</InfoTitle>
                <Info>{register.register_date}</Info>
              </InfoContainer>
              <InfoContainer>
                <InfoTitle>Observação:</InfoTitle>
                <Info>{register.obs}</Info>
              </InfoContainer>
            </RegisterInfo>
          </Content>
        </Modal>
      )}
    </Container>
  );
};

export default BirdModal;
