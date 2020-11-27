import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
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
  margin: 24px 0;
`;

export const BirdName = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
`;

export const FormTitle = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 16px;
`;

export const ChooseLocationButton = styled.TouchableOpacity``;

export const ChooseDateButton = styled.TouchableOpacity``;
