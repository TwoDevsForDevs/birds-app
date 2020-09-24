import React from 'react';

import {
  Container,
  BirdsList,
  Title,
  BirdContainer,
  BirdImage,
  BirdName,
  BirdScientificName
} from './styles';

export interface Birds {
  id: string;
  name: string;
  scientific_name: string;
  image_url: string;
}

interface Props {
  title: string;
  birds: Birds[];
}

const BirdsCarousel: React.FC<Props> = ({ title, birds }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <BirdsList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={birds}
        keyExtractor={bird => bird.id}
        renderItem={({ item: bird }) => (
          <BirdContainer onPress={() => {}}>
            <BirdImage
              source={{
                uri: bird.image_url
              }}
            />

            <BirdName numberOfLines={1}>{bird.name}</BirdName>
            <BirdScientificName>{bird.scientific_name}</BirdScientificName>
          </BirdContainer>
        )}
      />
    </Container>
  );
};

export default BirdsCarousel;
