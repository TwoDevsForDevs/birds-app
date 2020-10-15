import React from 'react';

import BirdCard from '../../../components/BirdCard';
import Title from '../../../components/Title';

import { Container, BirdsList } from './styles';

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
          <BirdCard
            imageUrl={bird.image_url}
            name={bird.name}
            scientificName={bird.scientific_name}
            onPress={() => {}}
          />
        )}
      />
    </Container>
  );
};

export default BirdsCarousel;
