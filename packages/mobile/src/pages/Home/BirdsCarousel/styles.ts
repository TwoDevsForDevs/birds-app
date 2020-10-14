import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Birds } from './index';

export const Container = styled.View`
  margin-bottom: 40px;
`;

export const BirdsList = styled(FlatList as new () => FlatList<Birds>).attrs({
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 24 - 16
  }
})`
  flex: 1;
`;
