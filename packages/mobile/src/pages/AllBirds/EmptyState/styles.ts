import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 24px;
`;

export const Paragraph = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;
