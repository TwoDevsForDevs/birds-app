import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { useDeleteModal } from '../../../hooks';
import {
  TableContainer,
  ActionsCell,
  DeleteItemModal
} from '../../../components/Table';

interface Conversations {
  id: string;
  name: string;
}

const ConversationsList: React.FC = () => {
  const { deleteItemId, handleToggleModal } = useDeleteModal();

  const [loading, setLoading] = useState(true);
  const [conservations, setConservations] = useState<Conversations[]>([]);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    async function loadConservations() {
      try {
        const response = await api.get<Conversations[]>('conservations');

        setConservations(response.data);
      } catch (err) {
        toast.error(
          'Não foi possível carregar as informações, tente novamente.'
        );
      } finally {
        setLoading(false);
      }
    }

    loadConservations();
  }, []);

  const handleDeleteConversation = useCallback(async () => {
    try {
      setDeleteLoading(true);

      await api.delete(`conversations/${deleteItemId}`);

      const updatedConservations = conservations.filter(
        conservation => conservation.id !== deleteItemId
      );

      setConservations(updatedConservations);

      toast.success('Conversação exluída com sucesso.');
    } catch (err) {
      toast.error('Não foi possível exluir essa conservação. Tenta novamente');
    } finally {
      setDeleteLoading(false);
      handleToggleModal();
    }
  }, [conservations, deleteItemId, handleToggleModal]);

  return (
    <>
      <DeleteItemModal
        title="Tem certeza que quer excluir esta conservação?"
        deleteButtonText="Sim, excluir conservação"
        handleDelete={handleDeleteConversation}
        loading={deleteLoading}
      />

      <TableContainer title="Conservações" loading={loading}>
        {conservations.length === 0 ? (
          <span>Nenhum registro cadastrado</span>
        ) : (
          <>
            <thead>
              <tr>
                <th>NOME</th>
                <th>AÇÕES</th>
              </tr>
            </thead>

            <tbody>
              {conservations.map(conservation => (
                <tr key={conservation.id}>
                  <td>{conservation.name}</td>

                  <ActionsCell id={conservation.id} itemId={conservation.id} />
                </tr>
              ))}
            </tbody>
          </>
        )}
      </TableContainer>
    </>
  );
};

export default ConversationsList;
