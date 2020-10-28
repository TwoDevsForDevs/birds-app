import React from 'react';

import { Container, Row, BirdImageShimmer } from './styles';

const Placeholder: React.FC = () => {
  return (
    <Container>
      <Row>
        <BirdImageShimmer />
        <BirdImageShimmer />
        <BirdImageShimmer />
      </Row>

      <Row>
        <BirdImageShimmer />
        <BirdImageShimmer />
        <BirdImageShimmer />
      </Row>

      <Row>
        <BirdImageShimmer />
        <BirdImageShimmer />
        <BirdImageShimmer />
      </Row>
    </Container>
  );
};

export default Placeholder;
