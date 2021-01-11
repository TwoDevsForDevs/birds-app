import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { useDeleteModal } from '../../../hooks';
import {
  TableContainer,
  ActionsCell,
  DeleteItemModal
} from '../../../components/Table';

interface Birds {
  id: string;
  popular_name: string;
  scientific_name: string;
  image_url: string;
}

const BirdsList: React.FC = () => {
  const { deleteItemId, handleToggleModal } = useDeleteModal();

  const [loading, setLoading] = useState(true);
  const [birds, setBirds] = useState<Birds[]>([]);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    async function loadBirds() {
      try {
        const response = await api.get<Birds[]>('birds');

        setBirds(response.data);
      } catch (err) {
        toast.error(
          'Não foi possível carregar as informações, tente novamente.'
        );
      } finally {
        setLoading(false);
      }
    }

    loadBirds();
  }, []);

  const handleDeleteBird = useCallback(async () => {
    try {
      setDeleteLoading(true);

      await api.delete(`birds/${deleteItemId}`);

      const updatedBirds = birds.filter(bird => bird.id !== deleteItemId);

      setBirds(updatedBirds);

      toast.success('Pássaro exluído com sucesso.');
    } catch (err) {
      toast.error('Não foi possível exluir esse pássaro. Tenta novamente');
    } finally {
      setDeleteLoading(false);
      handleToggleModal();
    }
  }, [birds, deleteItemId, handleToggleModal]);

  return (
    <>
      <DeleteItemModal
        title="Tem certeza que quer excluir este pássaro?"
        deleteButtonText="Sim, excluir pássaro"
        handleDelete={handleDeleteBird}
        loading={deleteLoading}
      />

      <TableContainer title="Pássaros" loading={loading}>
        {birds.length === 0 ? (
          <span>Nenhum registro cadastrado</span>
        ) : (
          <>
            <thead>
              <tr>
                <th>FOTO</th>
                <th>NOME POPULAR</th>
                <th>NOME CIENTÍFICO</th>
                <th>AÇÕES</th>
              </tr>
            </thead>

            <tbody>
              {birds.map(bird => (
                <tr key={bird.id}>
                  <td>
                    <img src={bird.image_url} alt={bird.popular_name} />
                  </td>
                  <td>{bird.popular_name}</td>
                  <td>{bird.scientific_name}</td>

                  <ActionsCell id={bird.id} itemId={bird.id} />
                </tr>
              ))}
            </tbody>
          </>
        )}
      </TableContainer>
    </>
  );
};

export default BirdsList;
