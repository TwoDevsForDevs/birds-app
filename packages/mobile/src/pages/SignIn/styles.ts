import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Google from '../../assets/google.svg';
import Facebook from '../../assets/facebook.svg';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 48px;
`;

export const SocialButtonsContainer = styled.View`
  margin: 40px 0px 24px;
  width: 100%;
`;

export const SocialButton = styled.TouchableOpacity`
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

export const OrContainer = styled.View`
  margin-bottom: 24px;

  flex-direction: row;
  align-items: center;
`;

export const OrLine = styled.View`
  border: ${StyleSheet.hairlineWidth}px solid
    ${({ theme }) => theme.colors.grey};
  width: 108px;
`;

export const OrText = styled.Text`
  font-family: 'Roboto_700Bold';
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 16px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
`;

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
