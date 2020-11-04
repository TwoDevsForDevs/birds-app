import styled from 'styled-components/native';
import { Modal } from 'react-native';

export const Container = styled(Modal)``;

export const Content = styled.View`
  padding: 32px;
  align-items: center;
`;

export const BirdImage = styled.Image`
  width: 264px;
  height: 264px;
  border-radius: ${({ theme }) => theme.radius.default};
  margin-bottom: 16px;
`;
