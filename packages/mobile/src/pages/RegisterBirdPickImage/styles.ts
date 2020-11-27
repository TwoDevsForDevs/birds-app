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
  margin: 24px 0;
`;

export const BirdName = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
`;

export const PickImageContainer = styled.View`
  flex: 1;
`;

export const PickImageText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 24px;
`;

export const BirdEmptyImage = styled.View`
  width: 212px;
  height: 212px;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.radius.default};
  align-self: center;
  margin-bottom: 16px;
`;

export const BirdImage = styled.Image`
  width: 212px;
  height: 212px;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.radius.default};
  align-self: center;
  margin-bottom: 16px;
`;
