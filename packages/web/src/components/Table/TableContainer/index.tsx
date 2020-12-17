import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { Container, Header, SearchInputContainer, Table } from './styles';

interface TableContainerProps {
  title: string;
  loading: boolean;
}

const TableContainer: React.FC<TableContainerProps> = ({
  title,
  loading,
  children
}) => {
  const location = useLocation();
  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <h1>{title}</h1>

        <div>
          <SearchInputContainer>
            <input type="text" placeholder="Buscar por pássaros" />
            <FiSearch color={colors.grey} size={16} />
          </SearchInputContainer>

          <Link to={`${location.pathname}/new`}>
            <FiPlus color={colors.white} size={20} />
            CADASTRAR
          </Link>
        </div>
      </Header>

      {loading ? <strong>Carregando..</strong> : <Table>{children}</Table>}
    </Container>
  );
};

export default TableContainer;
