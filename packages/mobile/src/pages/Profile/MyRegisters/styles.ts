import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px 24px 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const NoRegisterContent = styled.View`
  margin-top: 16px;
`;

export const NoRegisterText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 24px;
`;
