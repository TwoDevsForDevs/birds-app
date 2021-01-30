import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import api from '../../../services/api';
import { postOrPut } from '../../../utils';
import {
  FileInput,
  FormContainer,
  Input,
  Select
} from '../../../components/Form';

import { InputBlock } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';

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

interface Diet {
  id: string;
  name: string;
}
interface Conservation {
  id: string;
  name: string;
}

interface ParamsType {
  id: string;
}

interface FormData {
  popular_name: string;
  scientific_name: string;
  conservation: string;
  habitat: string;
  diet: string;
  image: string;
  wikiaves_link: string;
}

const SIZE_LIMIT = 1000000;
const VALIDS_FORMAT = ['image/png', 'image/jpg', 'image/jpeg'];

const BirdsForm: React.FC = () => {
  const { id } = useParams<ParamsType>();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const [bird, setBird] = useState({} as Bird);
  const [diets, setDiets] = useState<Diet[]>([]);
  const [conservations, setConservations] = useState<Conservation[]>([]);
  const [loadingInitialData, setLoadingInitialData] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [selectedDiet, setSelectedDiet] = useState({} as Diet);
  const [dietError, setDietError] = useState('');

  const [selectedConservation, setSelectedConservation] = useState(
    {} as Conservation
  );
  const [conservationError, setConservationError] = useState('');

  const loadBird = useCallback(async () => {
    try {
      setLoadingInitialData(true);
      const response = await api.get(`birds/${id}`);

      setBird(response.data);
    } catch (err) {
      toast.error('Ocorreu um erro ao carregar os dados.');
    } finally {
      setLoadingInitialData(false);
    }
  }, [id]);

  async function loadBirdsStats() {
    try {
      setLoadingInitialData(true);

      const [dietsResponse, conservationData] = await Promise.all([
        api.get('diets'),
        api.get('conservations')
      ]);

      setDiets(dietsResponse.data);
      setConservations(conservationData.data);
    } catch (err) {
      toast.error('Ocorreu um erro ao carregar os dados.');
    } finally {
      setLoadingInitialData(false);
    }
  }

  useEffect(() => {
    loadBirdsStats();

    if (id) {
      loadBird();
    }
  }, [id, loadBird]);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        setLoadingSubmit(true);

        formRef.current?.setErrors({});

        if (Object.keys(selectedDiet).length === 0) {
          setDietError('A dieta é obrigatório.');
        } else {
          setDietError('');
        }

        if (Object.keys(selectedConservation).length === 0) {
          setConservationError('A conservação é obrigatório.');
        } else {
          setConservationError('');
        }

        const schema = Yup.object().shape({
          popular_name: Yup.string().required('O nome popular é obrigatório.'),
          scientific_name: Yup.string().required(
            'O nome científico é obrigatório.'
          ),
          wikiaves_link: Yup.string()
            .required('O link para Wiki Aves é obrigatório.')
            .url('O link para Wiki Aves deve ser uma URL válida.'),
          image_url: Yup.mixed()
            .test(
              'fileSize',
              'A foto deve ter no máximo 2MB.',
              value => value && value.size < SIZE_LIMIT
            )
            .test(
              'fileFormat',
              'A foto precisa estar no formato png, jpg ou jpeg.',
              value => value && VALIDS_FORMAT.includes(value.type)
            )
            .required('A foto é obrigatório.')
        });

        await schema.validate(data, {
          abortEarly: false
        });

        setLoadingSubmit(true);

        const { popular_name, scientific_name, wikiaves_link } = data;

        await postOrPut({
          id,
          route: 'birds',
          data: {
            popular_name,
            scientific_name,
            wikiaves_link
          }
        });

        setLoadingSubmit(false);

        toast.success('Pássaro salvo com sucesso.');

        history.push('/birds');

        setLoadingSubmit(false);
      } catch (err) {
        setLoadingSubmit(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Ocorreu um erro ao salvar os dados. Tente novamente.');
      }
    },
    [history, id, selectedDiet, selectedConservation]
  );

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

      <InputBlock>
        <Input name="popular_name" label="Nome popular" />
        <Input name="scientific_name" label="Nome científico" />
      </InputBlock>

      <Input name="wikiaves_link" label="Link para Wiki Aves" />

      <Select
        name="diet"
        label="Dieta"
        options={diets}
        setSelectedOptions={setSelectedDiet}
        error={dietError}
      />

      <Select
        name="conservation"
        label="Conservação"
        options={conservations}
        setSelectedOptions={setSelectedConservation}
        error={conservationError}
      />
    </FormContainer>
  );
};

export default BirdsForm;
