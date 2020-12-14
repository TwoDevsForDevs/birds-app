import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import useDeleteModal from '../../../hooks/useDeleteModal';

import { Container, ActionButtons } from './styles';

interface ActionsCellProps {
  id: string;
  itemId: string;
}

const ActionsCell: React.FC<ActionsCellProps> = ({ id, itemId }) => {
  const location = useLocation();
  const { colors } = useTheme();
  const { handleToggleModal, setDeleteItemId } = useDeleteModal();

  useEffect(() => setDeleteItemId(itemId), [setDeleteItemId, itemId]);

  return (
    <Container>
      <ActionButtons>
        <Link to={`${location.pathname}/edit/${id}`}>
          <FiEdit2 color={colors.primary} size={18} />
        </Link>

        <button type="button" onClick={handleToggleModal}>
          <FiTrash2 color={colors.error} size={18} />
        </button>
      </ActionButtons>
    </Container>
  );
};

export default ActionsCell;
