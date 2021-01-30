import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { FormContainer, Input } from '../../../components/Form';

interface Conservation {
  id: string;
  name: string;
}

interface ParamsType {
  id: string;
}

const ConservationsForm: React.FC = () => {
  const { id } = useParams<ParamsType>();
  const history = useHistory();

  const formRef = useRef(null);

  const [conservation, setConservation] = useState({} as Conservation);
  const [loadingInitialData, setLoadingInitialData] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    async function loadConservation() {
      try {
        setLoadingInitialData(true);
        const response = await api.get(`conservations/${id}`);

        setConservation(response.data);
      } catch (err) {
        toast.error('Ocorreu um erro ao carregar os dados.');
      } finally {
        setLoadingInitialData(false);
      }
    }

    if (id) {
      loadConservation();
    }
  }, [id]);

  const handleSubmit = useCallback(
    async data => {
      try {
        setLoadingSubmit(true);

        if (id) {
          await api.put(`conservations/${id}`, {
            name: data.name
          });
        }

        if (!id) {
          await api.post('conservations', {
            name: data.name
          });
        }

        toast.success('Conservação salva com sucesso.');

        setLoadingSubmit(false);

        history.push('/conservations');
      } catch (err) {
        toast.error(
          'Ocorreu um erro ao salvar as alterações. Tente novamente.'
        );

        setLoadingSubmit(false);
      }
    },
    [id, history]
  );

  return (
    <FormContainer
      ref={formRef}
      title={`${id ? 'Atualização' : 'Cadastro'} de conservações`}
      goBackTo="/conservations"
      initialData={conservation}
      loadingInitialData={loadingInitialData}
      handleSubmit={handleSubmit}
      loadingSubmit={loadingSubmit}
    >
      <Input name="name" label="Nome" />
    </FormContainer>
  );
};

export default ConservationsForm;
