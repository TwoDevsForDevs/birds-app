import React, { forwardRef, ReactNode, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft, FiCheck } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import Spinner from '../../Spinner';
import { Container, InputsContainer, Button } from './styles';

interface FormContainerProps {
  title: string;
  goBackTo: string;
  initialData: any;
  loadingInitialData: boolean;
  handleSubmit: (data: FormData) => void;
  loadingSubmit: boolean;
  children: ReactNode;
}

const FormContainer: React.ForwardRefRenderFunction<
  FormHandles,
  FormContainerProps
> = (
  {
    title,
    goBackTo,
    initialData,
    loadingInitialData,
    handleSubmit,
    loadingSubmit,
    children
  },
  ref
) => {
  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.push(goBackTo);
  }, [history, goBackTo]);

  return (
    <Container ref={ref} onSubmit={handleSubmit} initialData={initialData}>
      <header>
        <h1>{title}</h1>

        <div>
          <Button onClick={handleGoBack} icon={FiChevronLeft} background="#ccc">
            VOLTAR
          </Button>

          <Button type="submit" disabled={loadingSubmit} icon={FiCheck}>
            {loadingSubmit ? <Spinner /> : 'SALVAR'}
          </Button>
        </div>
      </header>

      {loadingInitialData ? (
        <p>Carregando...</p>
      ) : (
        <InputsContainer>{children}</InputsContainer>
      )}
    </Container>
  );
};

export default forwardRef(FormContainer);
