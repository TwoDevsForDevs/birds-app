import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 48px;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
`;

export const BackToLoginButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 64px;
  background: ${({ theme }) => theme.colors.white};
  padding-bottom: ${getBottomSpace()}px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToLoginButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 16px;
`;
