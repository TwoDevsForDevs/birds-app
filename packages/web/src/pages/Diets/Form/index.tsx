import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { FormContainer, Input } from '../../../components/Form';

interface Diet {
  id: string;
  name: string;
}

interface ParamsType {
  id: string;
}

const DietsForm: React.FC = () => {
  const { id } = useParams<ParamsType>();
  const history = useHistory();

  const formRef = useRef(null);

  const [diet, setDiet] = useState({} as Diet);
  const [loadingInitialData, setLoadingInitialData] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    async function loadDiet() {
      try {
        setLoadingInitialData(true);
        const response = await api.get(`diets/${id}`);

        setDiet(response.data);
      } catch (err) {
        toast.error('Ocorreu um erro ao carregar os dados.');
      } finally {
        setLoadingInitialData(false);
      }
    }

    if (id) {
      loadDiet();
    }
  }, [id]);

  const handleSubmit = useCallback(
    async data => {
      try {
        setLoadingSubmit(true);

        if (id) {
          await api.put(`diets/${id}`, {
            name: data.name
          });
        }

        if (!id) {
          await api.post('diets', {
            name: data.name
          });
        }

        toast.success('Dieta salva com sucesso.');

        setLoadingSubmit(false);

        history.push('/diets');
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
      title={`${id ? 'Atualização' : 'Cadastro'} de dieta`}
      goBackTo="/diets"
      initialData={diet}
      loadingInitialData={loadingInitialData}
      handleSubmit={handleSubmit}
      loadingSubmit={loadingSubmit}
    >
      <Input name="name" label="Nome" />
    </FormContainer>
  );
};

export default DietsForm;
