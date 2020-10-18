import React from 'react';

import { Container, Title, Paragraph } from './styles';

const EmptyState: React.FC = () => {
  return (
    <Container>
      <Title>Nenhum resultado encontrado.</Title>

      <Paragraph>
        Não há resultados para sua pesquisa. Pesquise pelo nome popular ou
        científico das aves.
      </Paragraph>
    </Container>
  );
};

export default EmptyState;
