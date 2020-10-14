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
    <Container>
      <TitleSmallShimmer />
      <TitleLargeShimmer />

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
    </Container>
  );

  return (
    <>
      <Carousel />
      <Carousel />
      <Carousel />
    </>
  );
};

export default Placeholder;
