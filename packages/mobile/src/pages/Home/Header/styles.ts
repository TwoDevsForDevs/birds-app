import styled from 'styled-components/native';

import Header from '../../../components/Header';

export const Container = styled(Header)``;

export const UserAvatar = styled.View`
  width: 32px;
  height: 32px;
  box-shadow: ${({ theme }) => theme.shadows.default};

  justify-content: center;
  align-items: center;
`;

export const UserAvatarImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const UserAvatarIcon = styled.View`
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: 5px;
  border-radius: 16px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AllBirdsButton = styled.TouchableOpacity`
  width: 92px;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius.default};
  background: ${({ theme }) => theme.colors.white};

  justify-content: center;
  align-items: center;
`;

export const AllBirdsButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
`;
