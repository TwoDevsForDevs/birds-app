import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  color: string;
  background: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  height: 48px;
  background: ${({ background }) => background};
  border-radius: ${({ theme }) => theme.radius.small};
  margin-top: 6px;
  justify-content: center;
  align-items: center;
`;

interface ButtonTextProps {
  color: string;
}

export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: 'Roboto_700Bold';
  color: ${({ color }) => color};
  font-size: 16px;
`;
