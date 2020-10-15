import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const MainContent = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1, marginTop: 32 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false
})``;
