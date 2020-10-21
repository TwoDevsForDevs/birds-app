/* eslint-disable react/jsx-wrap-multilines */
import React, { useCallback, useEffect, useState } from 'react';

import BirdCard from '../../components/BirdCard';
import Title from '../../components/Title';
import api from '../../services/api';

import Header from './Header';
import Placeholder from './Placeholder';
import EmptyState from './EmptyState';
import { Container, MainContent, BirdsList, EmptyItem } from './styles';

export interface Birds {
  id: string;
  popular_name: string;
  scientific_name: string;
  conservation: string;
  habitat: string;
  diet: string;
  wikiaves_link: string;
  image_url: string;
  empty?: boolean;
}

const AllBirds: React.FC = () => {
  const [birds, setBirds] = useState<Birds[]>([]);
  const [searchBirds, setSearchBirds] = useState<Birds[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [createdRows, setCreatedRows] = useState(false);

  useEffect(() => {
    async function getBirds() {
      try {
        setLoading(true);

        const response = await api.get('/birds');

        setBirds(response.data);
        setSearchBirds(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getBirds();
  }, []);

  const createRows = useCallback((data: Birds[], columns: number) => {
    const rows = Math.floor(data.length / columns);

    let lastRowElements = data.length - rows * columns;

    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        popular_name: '',
        scientific_name: '',
        conservation: '',
        habitat: '',
        diet: '',
        wikiaves_link: '',
        image_url: '',
        empty: true
      });

      lastRowElements += 1;
    }

    setCreatedRows(true);

    return data;
  }, []);

  const renderAllBirdsContent = useCallback(() => {
    if (loading) {
      return <Placeholder />;
    }

    // if (error) {}

    if (!loading && searchBirds.length === 0) {
      return <EmptyState />;
    }

    return (
      <BirdsList
        data={createdRows ? createRows(searchBirds, 2) : searchBirds}
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
              name={bird.popular_name}
              scientificName={bird.scientific_name}
              onPress={() => {
                console.log('Oi');
              }}
              style={{ marginTop: 24 }}
            />
          );
        }}
      />
    );
  }, [createRows, loading, searchBirds]);

  return (
    <Container>
      <Header birds={birds} setSearchBirds={setSearchBirds} />

      <MainContent>{renderAllBirdsContent()}</MainContent>
    </Container>
  );
};

export default AllBirds;
