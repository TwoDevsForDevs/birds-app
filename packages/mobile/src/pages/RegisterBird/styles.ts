import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const MainContent = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1, marginTop: 32 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false
})`
  padding: 25px;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 32px;
`;

export const HeaderText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SearchContainer = styled.View`
  flex: 1;
`;

export const SearchTitle = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 16px;
`;

export const UnknowBird = styled.TouchableOpacity`
  padding: 25px;
  align-items: flex-end;
`;

export const UnknowBirdText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey};
`;
