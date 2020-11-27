import styled, { css } from 'styled-components/native';
import { Feather as FeatherIcon } from '@expo/vector-icons';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View<Props>`
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
`;

export const BirdsOptionsContainer = styled.ScrollView`
  margin-top: 8px;
  border-radius: ${({ theme }) => theme.radius.default};
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  max-height: 250px;
`;

export const BirdOption = styled.TouchableOpacity`
  margin-bottom: 8px;
`;

export const PopularNameText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Roboto_400Regular';
  font-size: 16px;
`;

export const ScientificNameText = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-family: 'Roboto_400Regular';
  font-style: italic;
  font-size: 12px;
`;
