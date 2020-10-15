import React from 'react';

import Header from './Header';
import BirdsCarousel from './BirdsCarousel';
import Placeholder from './Placeholder';
import { Container, MainContent } from './styles';

const birds = [
  {
    id: '1',
    name: 'Arara-vermelha-grande',
    scientific_name: 'Ara chloropterus',
    image_url:
      'https://greensavers.sapo.pt/wp-content/uploads/2020/04/ararinha-azul.jpg'
  },
  {
    id: '2',
    name: 'Arara-vermelha-grande',
    scientific_name: 'Ara chloropterus',
    image_url:
      'https://greensavers.sapo.pt/wp-content/uploads/2020/04/ararinha-azul.jpg'
  },
  {
    id: '3',
    name: 'Arara-vermelha-grande',
    scientific_name: 'Ara chloropterus',
    image_url:
      'https://greensavers.sapo.pt/wp-content/uploads/2020/04/ararinha-azul.jpg'
  }
];

const Home: React.FC = () => {
  const loading = false;

  return (
    <Container>
      <Header />

      <MainContent>
        {loading ? (
          <Placeholder />
        ) : (
          <>
            <BirdsCarousel title="Mais populares" birds={birds} />

            <BirdsCarousel title="Mais Difíceis" birds={birds} />

            <BirdsCarousel title="Não identificados" birds={birds} />
          </>
        )}
      </MainContent>
    </Container>
  );
};

export default Home;
