import React, { useRef } from 'react';
import Input from '../components/Input';

import { Container, Form, Button } from '../styles/pages/SignIn';

const Home: React.FC = () => {
  const formRef = useRef(null);

  return (
    <Container>
      <Form ref={formRef} onSubmit={() => console.log()}>
        <Input name="email" label="E-mail" placeholder="exemplo@email.com" />
        <Input name="password" label="Senha" placeholder="*************" />

        <Button type="submit">Entrar no sistema</Button>
      </Form>
    </Container>
  );
};

export default Home;
