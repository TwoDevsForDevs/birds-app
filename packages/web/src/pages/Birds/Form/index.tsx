import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { FileInput, FormContainer, Input } from '../../../components/Form';

interface Bird {
  id: string;
  popular_name: string;
  scientific_name: string;
  conservation: string;
  habitat: string;
  diet: string;
  image: string;
  wikiaves_link: string;
}

interface ParamsType {
  id: string;
}

const BirdsForm: React.FC = () => {
  const { id } = useParams<ParamsType>();

  const formRef = useRef(null);

  const [bird, setBird] = useState({} as Bird);
  const [loadingInitialData, setLoadingInitialData] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    async function loadBird() {
      try {
        setLoadingInitialData(true);
        const response = await api.get(`birds/${id}`);

        setBird(response.data);
      } catch (err) {
        toast.error('Ocorreu um erro ao carregar os dados.');
      } finally {
        setLoadingInitialData(false);
      }
    }

    if (id) {
      loadBird();
    }
  }, [id]);

  const handleSubmit = useCallback(() => {
    try {
      setLoadingSubmit(true);

      setLoadingSubmit(false);
    } catch (err) {
      setLoadingSubmit(false);
    }
  }, []);

  return (
    <FormContainer
      ref={formRef}
      title="Cadastro de pássaros"
      goBackTo="/birds"
      initialData={bird}
      loadingInitialData={loadingInitialData}
      handleSubmit={handleSubmit}
      loadingSubmit={loadingSubmit}
    >
      <FileInput name="image_url" />

      <Input name="popular_name" label="Nome popular" />
      <Input name="scientific_name" label="Nome científico" />
      <Input name="wikiaves_link" label="Link para Wiki Aves" />
    </FormContainer>
  );
};

export default BirdsForm;
