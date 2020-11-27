import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { BirdRegister } from '.';

export const Container = styled(FlatList as new () => FlatList<BirdRegister>)`
  margin-top: 8px;
`;

export const RegisterButton = styled.TouchableOpacity`
  box-shadow: ${({ theme }) => theme.shadows.default};

  margin: auto;
  margin-bottom: 16px;
`;

export const BirdImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.radius.default};
`;
