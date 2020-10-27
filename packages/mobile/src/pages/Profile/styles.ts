import styled from 'styled-components/native';

export const Container = styled.View`
  height: 25%;
`;

export const Header = styled.View`
  flex: 1;
  padding: 32px 24px 24px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HelloContainer = styled.View`
  padding: 16px;
`;

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
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 96px;
  align-self: center;
`;
