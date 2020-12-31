import styled from 'styled-components';

import { Container as Input } from '../../../components/Form/Input/styles';

export const InputBlock = styled.div`
  width: 100%;
  margin-bottom: 16px;

  display: flex;
  align-items: center;

  ${Input} {
    flex: 1;

    & + ${Input} {
      margin-top: 0;
      margin-left: 16px;
    }
  }
`;
