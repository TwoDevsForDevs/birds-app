import React from 'react';

import {
  Container,
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
      <TitleSmallShimmer />
      <TitleLargeShimmer />

      <Carousel />
      <Carousel />
      <Carousel />
    </Container>
  );
};

export default Placeholder;
