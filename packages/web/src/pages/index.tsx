import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../hooks';

import { Container, Form } from '../styles/pages/SignIn';

const Home: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

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

        const validationErrors = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });

          formRef.current.setErrors(validationErrors);

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

        <Button type="submit" loading={loading} style={{ height: 45 }}>
          Entrar no sistema
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
