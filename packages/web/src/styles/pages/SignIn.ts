import styled from 'styled-components';
import { Form as UnForm } from '@unform/web';
import { darken } from 'polished';

import { Container as Input } from '../../components/Input/styles';

export const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled(UnForm)`
  width: 360px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px #00000033;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 60px 30px;

  display: flex;
  flex-direction: column;

  ${Input} + ${Input} {
    margin-top: 16px;
  }
`;

export const Button = styled.button`
  height: 45px;
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
