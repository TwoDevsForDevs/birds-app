import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FormHandles } from '@unform/core';

import { Input, Button } from '../../components/Form';
import { useAuth } from '../../hooks';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Form } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
          password: Yup.string().required('A senha é obrigatório')
        });

        await schema.validate(data, {
          abortEarly: false
        });

        setLoading(true);

        const { email, password } = data;

        await signIn({
          email,
          password
        });

        setLoading(false);
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Ocorreu um erro ao fazer o login, tente novamente.');
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" label="E-mail" placeholder="exemplo@email.com" />
        <Input
          name="password"
          label="Senha"
          placeholder="*************"
          type="password"
        />

        <Button
          type="submit"
          loading={loading}
          style={{ height: 45, marginTop: 16 }}
        >
          Entrar no sistema
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
