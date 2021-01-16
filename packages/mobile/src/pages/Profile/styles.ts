import styled from 'styled-components/native';

export const Container = styled.View`
  height: 30%;
`;

export const Header = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 48px 24px 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HelloContainer = styled.View``;

export const Hello = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 32px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const UserName = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
  width: 200px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  padding-top: 16px;
`;

export const UserAvatarImage = styled.Image`
  width: 156px;
  height: 156px;
  border-radius: 73px;
  align-self: center;
`;
