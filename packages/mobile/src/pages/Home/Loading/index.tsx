import React from 'react';

import {
  Container,
  TitleSmallShimmer,
  TitleLargeShimmer,
  BirdsList,
  BirdsContainer,
  BirdImageShimmer,
  BirdNameShimmer,
  BirdScientificNameShimmer
} from './styles';

const Loading: React.FC = () => {
  return (
    <>
      <Container>
        <TitleSmallShimmer />
        <TitleLargeShimmer />

        <BirdsList>
          <BirdsContainer>
            <BirdImageShimmer />

            <BirdNameShimmer />
            <BirdScientificNameShimmer />
          </BirdsContainer>

          <BirdsContainer>
            <BirdImageShimmer />

            <BirdNameShimmer />
            <BirdScientificNameShimmer />
          </BirdsContainer>
        </BirdsList>
      </Container>

      <Container>
        <TitleSmallShimmer />
        <TitleLargeShimmer />

        <BirdsList>
          <BirdsContainer>
            <BirdImageShimmer />

            <BirdNameShimmer />
            <BirdScientificNameShimmer />
          </BirdsContainer>

          <BirdsContainer>
            <BirdImageShimmer />

            <BirdNameShimmer />
            <BirdScientificNameShimmer />
          </BirdsContainer>
        </BirdsList>
      </Container>

      <Container>
        <TitleSmallShimmer />
        <TitleLargeShimmer />

        <BirdsList>
          <BirdsContainer>
            <BirdImageShimmer />

            <BirdNameShimmer />
            <BirdScientificNameShimmer />
          </BirdsContainer>

          <BirdsContainer>
            <BirdImageShimmer />

            <BirdNameShimmer />
            <BirdScientificNameShimmer />
          </BirdsContainer>
        </BirdsList>
      </Container>
    </>
  );
};

export default Loading;
