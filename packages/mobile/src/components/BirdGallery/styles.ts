import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { BirdRegister } from '.';

export const Container = styled(FlatList as new () => FlatList<BirdRegister>)`
  margin: 0 -16px;
`;

export const RegisterButton = styled.TouchableOpacity`
  box-shadow: ${({ theme }) => theme.shadows.default};
  margin: 16px;
`;

export const BirdImage = styled.Image`
  width: 98px;
  height: 98px;
  border-radius: ${({ theme }) => theme.radius.default};
`;
