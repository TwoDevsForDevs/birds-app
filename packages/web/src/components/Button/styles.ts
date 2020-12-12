import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  height: 36px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.small};
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => darken(0.03, theme.colors.primary)};
  }
`;
