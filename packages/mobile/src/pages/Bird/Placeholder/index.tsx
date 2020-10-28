import React from 'react';

import { BirdInfo } from '../styles';
import {
  Container,
  HeaderContent,
  HeaderContentButton,
  Content,
  TitleShimmer,
  BirdImageShimmer,
  BirdLabelShimmer,
  InfoTextShimmer
} from './styles';

const Placeholder: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <HeaderContentButton />
      </HeaderContent>

      <Content>
        <TitleShimmer />

        <BirdImageShimmer />

        <BirdInfo>
          <BirdLabelShimmer />
          <InfoTextShimmer />
        </BirdInfo>

        <BirdInfo>
          <BirdLabelShimmer />
          <InfoTextShimmer />
        </BirdInfo>

        <BirdInfo>
          <BirdLabelShimmer />
          <InfoTextShimmer />
        </BirdInfo>

        <BirdInfo>
          <BirdLabelShimmer />
          <InfoTextShimmer />
        </BirdInfo>
      </Content>
    </Container>
  );
};

export default Placeholder;
