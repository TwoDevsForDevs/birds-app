import React from 'react';
import { TextProps } from 'react-native';

import { Container } from './styles';

interface TitleProps extends TextProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Title;
