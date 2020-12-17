import styled from 'styled-components';

import { Container as Button } from '../../Form/Button/styles';
import Modal from '../../Modal';

export const Container = styled(Modal)``;

export const CloseModalButton = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 32px;
  top: 32px;
`;

export const Content = styled.div`
  min-width: 450px;

  display: flex;
  flex-direction: column;

  main {
    padding: 24px;

    display: flex;
    flex-direction: column;

    h1 {
      max-width: 274px;
    }
  }

  footer {
    padding: 30px 44px;
    background: ${({ theme }) => theme.colors.lightGrey};

    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${Button} {
      width: fit-content;
      padding: 0 16px;

      & + ${Button} {
        margin-left: 8px;
      }
    }
  }
`;
