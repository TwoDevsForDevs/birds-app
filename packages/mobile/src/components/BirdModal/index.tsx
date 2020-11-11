import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { Feather as Icon, Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';

import {
  LoadingContainer,
  Container,
  Content,
  CloseModalButton,
  BirdImage,
  BirdDetails,
  StatsContainer,
  StatsContent,
  StatsNumber,
  StatsText,
  StatsDivider,
  LikeButton,
  LikeButtonText,
  Divider,
  BirdInfoContainer,
  BirdInfo,
  Label,
  InfoText
} from './styles';

interface BirdRegister {
  register: {
    id: string;
    owner_id: string;
    owner: {
      name: string;
    };
    bird_id: string;
    image_url: string;
    location: string;
    register_date: string;
    obs: string;
    views: number;
  };
  number_of_likes: number;
  user_has_like: boolean;
}

interface BirdModalProps {
  isVisible: boolean;
  register_id: string;
  toggleModal: () => void;
}

const BirdModal: React.FC<BirdModalProps> = ({
  isVisible,
  register_id,
  toggleModal
}) => {
  const { colors } = useTheme();

  const [registerData, setRegisterData] = useState({} as BirdRegister);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRegisterAndAddViewOnIt() {
      const response = await api.get(`birds-registers/${register_id}`);

      setRegisterData(response.data);

      await api.post('/birds-registers/views', {
        register_id
      });

      setLoading(false);
    }

    getRegisterAndAddViewOnIt();
  }, [register_id]);

  const { register } = registerData;

  const handleToggleLike = useCallback(async () => {
    if (registerData.user_has_like) {
      try {
        await api.delete(`birds-registers/like/${register.id}`);

        setRegisterData({
          ...registerData,
          user_has_like: false,
          number_of_likes: registerData.number_of_likes - 1
        });
      } catch (err) {
        Alert.alert(
          'Error',
          'Ocorreu um erro ao tentar descurtir essa foto, tente novamente.'
        );
      }

      return;
    }

    try {
      await api.post('birds-registers/like', {
        register_id: register.id
      });

      setRegisterData({
        ...registerData,
        user_has_like: true,
        number_of_likes: registerData.number_of_likes + 1
      });
    } catch (err) {
      Alert.alert(
        'Error',
        'Ocorreu um erro ao tentar curtir essa foto, tente novamente.'
      );
    }
  }, [registerData, register]);

  return (
    <Modal isVisible={isVisible} propagateSwipe onBackdropPress={toggleModal}>
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color={colors.grey} />
        </LoadingContainer>
      ) : (
        <Container>
          <Content>
            <CloseModalButton onPress={toggleModal}>
              <Icon name="x" size={16} color={colors.white} />
            </CloseModalButton>

            <BirdImage source={{ uri: register.image_url }} />

            <BirdDetails>
              <StatsContainer>
                <StatsContent>
                  <StatsNumber>{registerData.number_of_likes}</StatsNumber>
                  <StatsText>
                    {registerData.number_of_likes === 1
                      ? 'curtida'
                      : 'curtidas'}
                  </StatsText>
                </StatsContent>

                <StatsDivider>-</StatsDivider>

                <StatsContent>
                  <StatsNumber>{register.views}</StatsNumber>
                  <StatsText>
                    {register.views === 1 ? 'visualização' : 'visualizações'}
                  </StatsText>
                </StatsContent>
              </StatsContainer>

              <LikeButton
                onPress={handleToggleLike}
                userHasLike={registerData.user_has_like}
              >
                <Ionicons
                  name="ios-heart"
                  size={20}
                  color={
                    registerData.user_has_like ? colors.error : colors.grey
                  }
                />
                <LikeButtonText>
                  {registerData.user_has_like ? 'Descurtir' : 'Curtir'}
                </LikeButtonText>
              </LikeButton>

              <Divider />

              <BirdInfoContainer>
                <BirdInfo>
                  <Label>Autor:</Label>
                  <InfoText>{register.owner.name}</InfoText>
                </BirdInfo>

                <BirdInfo>
                  <Label>Localidate:</Label>
                  <InfoText>{register.location}</InfoText>
                </BirdInfo>

                <BirdInfo>
                  <Label>Data de registro:</Label>
                  <InfoText>
                    {format(parseISO(register.register_date), "dd'/'MM'/'yyyy")}
                  </InfoText>
                </BirdInfo>

                <BirdInfo>
                  <Label>Observações:</Label>
                  <InfoText>{register.obs}</InfoText>
                </BirdInfo>
              </BirdInfoContainer>
            </BirdDetails>
          </Content>
        </Container>
      )}
    </Modal>
  );
};

export default BirdModal;
