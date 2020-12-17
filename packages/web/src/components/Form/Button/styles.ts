import styled from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  background?: string;
  color?: string;
}

export const Container = styled.button<ContainerProps>`
  height: 36px;
  width: 100%;
  background: ${({ theme, background }) => background || theme.colors.primary};
  color: ${({ theme, background }) =>
    background ? theme.colors.primary : theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.small};
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme, background }) =>
      darken(0.03, background || theme.colors.primary)};
  }
`;
