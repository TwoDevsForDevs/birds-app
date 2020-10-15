import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Birds } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const MainContent = styled.View`
  flex: 1;
`;

export const BirdsList = styled(FlatList as new () => FlatList<Birds>).attrs({
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 24 - 16
  }
})``;

export const EmptyItem = styled.View`
  width: 160px;
  margin-right: 16px;

  flex: 1;
`;
