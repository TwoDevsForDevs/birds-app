import styled, { css } from 'styled-components/native';
import { Feather as FeatherIcon } from '@expo/vector-icons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.Text``;

export const Content = styled.View<Props>`
  height: 48px;
  background: ${({ theme }) => theme.colors.inputBackground};
  border: 2px solid ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.radius.small};
  position: relative;

  ${props =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.primary};
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  padding: 0 16px;
`;

export const Icon = styled(FeatherIcon)<Props>`
  position: absolute;
  right: 16px;
  top: 14px;
  color: ${({ theme }) => theme.colors.grey};

  ${props =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${props =>
    props.isErrored &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`;

export const Error = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const ErrorText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 12px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.error};
`;
