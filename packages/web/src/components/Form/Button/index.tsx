import React, { ButtonHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { useTheme } from 'styled-components';

import Spinner from '../../Spinner';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
  color?: string;
  icon?: ComponentType<IconBaseProps>;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  background,
  color,
  icon: Icon,
  loading,
  children,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container background={background} color={color} hasIcon={!!Icon} {...rest}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Icon && <Icon size={20} color={colors.white} />}
          {children}
        </>
      )}
    </Container>
  );
};

export default Button;
