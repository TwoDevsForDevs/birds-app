import React from 'react';
import Modal from 'react-native-modal';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  Content,
  CloseModalButton,
  BirdImage,
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

  return (
    <Modal isVisible={isVisible} propagateSwipe onBackdropPress={toggleModal}>
      <Container>
        <Content>
          <CloseModalButton onPress={toggleModal}>
            <Icon name="x" size={16} color={colors.white} />
          </CloseModalButton>

          <BirdImage source={{ uri: register.image_url }} />

          <StatsContainer>
            <StatsContent>
              <StatsNumber>250</StatsNumber>
              <StatsText>curtidas</StatsText>
            </StatsContent>

            <StatsDivider>-</StatsDivider>

            <StatsContent>
              <StatsNumber>158</StatsNumber>
              <StatsText>visualizações</StatsText>
            </StatsContent>
          </StatsContainer>

          <LikeButton>
            <LikeButtonText>Curtir</LikeButtonText>
          </LikeButton>

          <Divider />

          <BirdInfoContainer>
            <BirdInfo>
              <Label>Autor:</Label>
              <InfoText>Matheus</InfoText>
            </BirdInfo>

            <BirdInfo>
              <Label>Localidate:</Label>
              <InfoText>Rua das Palmeiras, 125</InfoText>
            </BirdInfo>

            <BirdInfo>
              <Label>Data de registro:</Label>
              <InfoText>13/08/2020</InfoText>
            </BirdInfo>

            <BirdInfo>
              <Label>Observações:</Label>
              <InfoText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, aspernatur eos amet similique blanditiis tenetur
                nulla, error neque rerum, perferendis impedit ab eum dolore
                laborum accusamus iste beatae quas eveniet?
              </InfoText>
            </BirdInfo>
          </BirdInfoContainer>
        </Content>
      </Container>
    </Modal>
  );
};

export default BirdModal;
