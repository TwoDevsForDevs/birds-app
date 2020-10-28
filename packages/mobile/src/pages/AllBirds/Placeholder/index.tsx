import React from 'react';

import {
  Container,
  HeaderContent,
  HeaderContentButton,
  Content,
  TitleSmallShimmer,
  TitleLargeShimmer,
  BirdsList,
  BirdContainer,
  BirdImageShimmer,
  BirdNameShimmer,
  BirdScientificNameShimmer
} from './styles';

const Placeholder: React.FC = () => {
  const Carousel = () => (
    <>
      <BirdsList>
        <BirdContainer>
          <BirdImageShimmer />

          <BirdNameShimmer />
          <BirdScientificNameShimmer />
        </BirdContainer>

        <BirdContainer>
          <BirdImageShimmer />

          <BirdNameShimmer />
          <BirdScientificNameShimmer />
        </BirdContainer>

        <BirdContainer>
          <BirdImageShimmer />

          <BirdNameShimmer />
          <BirdScientificNameShimmer />
        </BirdContainer>
      </BirdsList>
    </>
  );

  return (
    <Container>
      <HeaderContent>
        <HeaderContentButton />
        <HeaderContentButton />
      </HeaderContent>

      <Content>
        <TitleSmallShimmer />
        <TitleLargeShimmer />

        <Carousel />
        <Carousel />
        <Carousel />
      </Content>
    </Container>
  );
};

export default Placeholder;
