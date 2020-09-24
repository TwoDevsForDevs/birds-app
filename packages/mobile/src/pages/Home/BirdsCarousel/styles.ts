import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Birds } from './index';

export const Container = styled.View`
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 40px;
  color: ${({ theme }) => theme.colors.black};
  width: 296px;
  margin-bottom: 32px;
  padding: 0 24px;
`;

export const BirdsList = styled(FlatList as new () => FlatList<Birds>).attrs({
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 24 - 16
  }
})``;

export const BirdContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 171px;
  margin-right: 16px;
`;

export const BirdImage = styled.Image`
  width: 100%;
  height: 171px;
  border-radius: ${({ theme }) => theme.radius.default};
`;

export const BirdName = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 16px;
`;

export const BirdScientificName = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  margin-top: 4px;
`;
