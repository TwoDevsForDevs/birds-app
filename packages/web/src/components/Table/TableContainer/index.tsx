import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { Container, Header, Table } from './styles';

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
          <span>teste</span>

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
