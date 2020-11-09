import React, { useEffect, useMemo } from 'react';
import Modal from 'react-native-modal';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { format, parseISO } from 'date-fns';
import {
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
import api from '../../services/api';

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
  register: BirdRegister;
  isVisible: boolean;
  toggleModal: () => void;
}

const BirdModal: React.FC<BirdModalProps> = ({
  isVisible,
  register,
  toggleModal
}) => {
  const { colors } = useTheme();

  useEffect(() => {
    async function addViewOnBirdRegister() {
      await api.post('/birds-registers/views', {
        register_id: register.id
      });

      // eslint-disable-next-line no-param-reassign
      register.views += 1;
    }

    addViewOnBirdRegister();
  }, [register]);

  const registerFormatted = useMemo(() => {
    return {
      ...register,
      registerDateFormatted: format(
        parseISO(register.register_date),
        "dd'/'MM'/'yyyy"
      )
    };
  }, [register]);

  return (
    <Modal isVisible={isVisible} propagateSwipe onBackdropPress={toggleModal}>
      <Container>
        <Content>
          <CloseModalButton onPress={toggleModal}>
            <Icon name="x" size={16} color={colors.white} />
          </CloseModalButton>

          <BirdImage source={{ uri: registerFormatted.image_url }} />

          <BirdDetails>
            <StatsContainer>
              <StatsContent>
                <StatsNumber>{registerFormatted.likes}</StatsNumber>
                <StatsText>curtidas</StatsText>
              </StatsContent>

              <StatsDivider>-</StatsDivider>

              <StatsContent>
                <StatsNumber>{registerFormatted.views}</StatsNumber>
                <StatsText>
                  {registerFormatted.views === 1
                    ? 'visualização'
                    : 'visualizações'}
                </StatsText>
              </StatsContent>
            </StatsContainer>

            <LikeButton>
              <LikeButtonText>Curtir</LikeButtonText>
            </LikeButton>

            <Divider />

            <BirdInfoContainer>
              <BirdInfo>
                <Label>Autor:</Label>
                <InfoText>RELACIONAMENTO</InfoText>
              </BirdInfo>

              <BirdInfo>
                <Label>Localidate:</Label>
                <InfoText>{registerFormatted.location}</InfoText>
              </BirdInfo>

              <BirdInfo>
                <Label>Data de registro:</Label>
                <InfoText>{registerFormatted.registerDateFormatted}</InfoText>
              </BirdInfo>

              <BirdInfo>
                <Label>Observações:</Label>
                <InfoText>{registerFormatted.obs}</InfoText>
              </BirdInfo>
            </BirdInfoContainer>
          </BirdDetails>
        </Content>
      </Container>
    </Modal>
  );
};

export default BirdModal;
