import styled from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  background?: string;
  color?: string;
  hasIcon?: boolean;
}

export const Container = styled.button<ContainerProps>`
  height: 36px;
  width: 100%;
  background: ${({ theme, background }) => background || theme.colors.primary};
  color: ${({ theme, color }) => color || theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.small};
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-left: ${props => props.hasIcon && 40}px !important;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme, background }) =>
      darken(0.03, background || theme.colors.primary)};
  }

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
