import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Google from '../../assets/google.svg';
import Facebook from '../../assets/facebook.svg';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 48px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin: 10px 0;
`;

export const ForgotPasswordButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const OrText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  margin: 24px 0;
`;

export const SocialButtonsContainer = styled.View`
  width: 100%;

  flex-direction: row;
`;

export const SocialButton = styled.TouchableOpacity`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.small};
  box-shadow: ${({ theme }) => theme.shadows.default};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SocialButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  color: ${({ theme }) => theme.colors.grey};
  margin-left: 16px;
`;

export const GoogleIcon = styled(Google)``;

export const FacebookIcon = styled(Facebook)``;

export const CreateAccountButton = styled.TouchableOpacity`
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

export const CreateAccountButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 16px;
`;
