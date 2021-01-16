import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  /* padding: 24px;
  ; */
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false
})``;

export const Info = styled.View``;

export const Password = styled.View`
  margin-top: 16px;
`;

export const ButtonsContainer = styled.View`
  margin-top: 16px;
`;

export const TopButtons = styled.View`
  margin-top: 16px;
`;

export const DownButtons = styled.View`
  margin-top: 16px;
`;
