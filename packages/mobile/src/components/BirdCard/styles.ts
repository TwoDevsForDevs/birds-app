import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 160px;
  margin-right: 16px;

  flex: 1;
`;

export const BirdImage = styled.Image`
  width: 100%;
  height: 160px;
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
