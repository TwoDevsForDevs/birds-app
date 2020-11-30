import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.default};
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  align-self: flex-end;
`;

export const ChooseLocationButtonText = styled.Text``;
