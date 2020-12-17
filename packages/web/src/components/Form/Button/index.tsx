import React, { ButtonHTMLAttributes } from 'react';

import Spinner from '../../Spinner';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  background,
  loading,
  children,
  ...rest
}) => {
  return (
    <Container background={background} {...rest}>
      {loading ? <Spinner /> : children}
    </Container>
  );
};

export default Button;
