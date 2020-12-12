import React, { ButtonHTMLAttributes } from 'react';

import Spinner from '../Spinner';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ loading, children, ...rest }) => {
  return <Container {...rest}>{loading ? <Spinner /> : children}</Container>;
};

export default Button;
