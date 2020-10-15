/* eslint-disable react/jsx-wrap-multilines */
import React, { useCallback } from 'react';

import BirdCard from '../../components/BirdCard';
import Title from '../../components/Title';

import Header from './Header';
import Placeholder from './Placeholder';
import { Container, MainContent, BirdsList, EmptyItem } from './styles';

export interface Birds {
  id: string;
  name: string;
  scientific_name: string;
  image_url: string;
  empty?: boolean;
}

const birds = [
  {
    id: '1',
    name: 'Arara-vermelha-grande',
    scientific_name: 'Ara chloropterus',
    image_url:
      'https://greensavers.sapo.pt/wp-content/uploads/2020/04/ararinha-azul.jpg',
    empty: false
  },
  {
    id: '2',
    name: 'Arara-vermelha-grande',
    scientific_name: 'Ara chloropterus',
    image_url:
      'https://greensavers.sapo.pt/wp-content/uploads/2020/04/ararinha-azul.jpg',
    empty: false
  },
  {
    id: '3',
    name: 'Arara-vermelha-grande',
    scientific_name: 'Ara chloropterus',
    image_url:
      'https://greensavers.sapo.pt/wp-content/uploads/2020/04/ararinha-azul.jpg',
    empty: false
  }
];

const AllBirds: React.FC = () => {
  const loading = false;

  const createRows = useCallback((data: Birds[], columns: number) => {
    const rows = Math.floor(data.length / columns);

    let lastRowElements = data.length - rows * columns;

    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        scientific_name: '',
        image_url: '',
        empty: true
      });
      lastRowElements += 1;
    }
    return data;
  }, []);

  return (
    <Container>
      <Header />

      <MainContent>
        {loading ? (
          <Placeholder />
        ) : (
          <BirdsList
            data={createRows(birds, 2)}
            ListHeaderComponent={
              <Title style={{ paddingLeft: 0, marginBottom: 8 }}>
                Todas as aves
              </Title>
            }
            keyExtractor={bird => bird.id}
            numColumns={2}
            renderItem={({ item: bird }) => {
              if (bird.empty) {
                return <EmptyItem />;
              }

              return (
                <BirdCard
                  imageUrl={bird.image_url}
                  name={bird.name}
                  scientificName={bird.scientific_name}
                  onPress={() => {
                    console.log('Oi');
                  }}
                  style={{ marginTop: 24 }}
                />
              );
            }}
          />
        )}
      </MainContent>
    </Container>
  );
};

export default AllBirds;
