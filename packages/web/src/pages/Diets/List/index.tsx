import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { useDeleteModal } from '../../../hooks';
import {
  TableContainer,
  ActionsCell,
  DeleteItemModal
} from '../../../components/Table';

interface Diets {
  id: string;
  name: string;
}

const DietsList: React.FC = () => {
  const { deleteItemId, handleToggleModal } = useDeleteModal();

  const [loading, setLoading] = useState(true);
  const [diets, setDiets] = useState<Diets[]>([]);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    async function loadDiets() {
      try {
        const response = await api.get<Diets[]>('diets');

        setDiets(response.data);
      } catch (err) {
        toast.error(
          'Não foi possível carregar as informações, tente novamente.'
        );
      } finally {
        setLoading(false);
      }
    }

    loadDiets();
  }, []);

  const handleDeleteDiet = useCallback(async () => {
    try {
      setDeleteLoading(true);

      await api.delete(`diets/${deleteItemId}`);

      const updatedBirds = diets.filter(diet => diet.id !== deleteItemId);

      setDiets(updatedBirds);

      toast.success('Dieta exluída com sucesso.');
    } catch (err) {
      toast.error('Não foi possível exluir essa dieta. Tenta novamente');
    } finally {
      setDeleteLoading(false);
      handleToggleModal();
    }
  }, [diets, deleteItemId, handleToggleModal]);

  return (
    <>
      <DeleteItemModal
        title="Tem certeza que quer excluir esta dieta?"
        deleteButtonText="Sim, excluir dieta"
        handleDelete={handleDeleteDiet}
        loading={deleteLoading}
      />

      <TableContainer title="Dietas" loading={loading}>
        {diets.length === 0 ? (
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
              {diets.map(diet => (
                <tr key={diet.id}>
                  <td>{diet.name}</td>

                  <ActionsCell id={diet.id} itemId={diet.id} />
                </tr>
              ))}
            </tbody>
          </>
        )}
      </TableContainer>
    </>
  );
};

export default DietsList;
