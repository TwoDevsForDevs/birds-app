import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import ButtonComponent from '../Button';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }
  }
`;

export const Button = styled(ButtonComponent)`
  font-size: 14px;
  padding: 0 24px;

  & + button {
    margin-left: 16px;
  }
`;

export const Form = styled(Unform)`
  background: ${({ theme }) => theme.colors.white};
  padding: 28px 32px;
  margin-top: 28px;
  border-radius: ${({ theme }) => theme.radius.small};
`;
