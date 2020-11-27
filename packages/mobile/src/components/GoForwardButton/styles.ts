import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  align-self: flex-end;
  background: ${({ theme }) => theme.colors.black};
`;
