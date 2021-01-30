import React from 'react';

import Header from '../../../components/Header';

import { Container, Main } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />

      <Main>{children}</Main>
    </Container>
  );
};

export default DefaultLayout;
