import styled from 'styled-components/native';

export const Container = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 40px;
  color: ${({ theme }) => theme.colors.black};
  max-width: 282px;
  margin-bottom: 32px;
`;

export default Container;
