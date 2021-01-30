import React from 'react';
import { FiX } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { useDeleteModal } from '../../../hooks';
import { Button } from '../../Form';
import Spinner from '../../Spinner';

import { Container, CloseModalButton, Content } from './styles';

interface DeleteItemModalProps {
  title: string;
  deleteButtonText: string;
  handleDelete: () => void;
  loading: boolean;
}

const DeleteItemModal: React.FC<DeleteItemModalProps> = ({
  title,
  deleteButtonText,
  handleDelete,
  loading
}) => {
  const { colors } = useTheme();
  const { isModalOpen, handleToggleModal } = useDeleteModal();

  return (
    <Container isOpen={isModalOpen} onRequestClose={handleToggleModal}>
      <CloseModalButton onClick={handleToggleModal}>
        <FiX color={colors.black} size={18} />
      </CloseModalButton>

      <Content>
        <main>
          <h1>{title}</h1>
        </main>

        <footer>
          <Button
            onClick={handleToggleModal}
            color={colors.primary}
            background={colors.white}
          >
            Cancelar
          </Button>

          <Button onClick={handleDelete}>
            {loading ? <Spinner /> : deleteButtonText}
          </Button>
        </footer>
      </Content>
    </Container>
  );
};

export default DeleteItemModal;
