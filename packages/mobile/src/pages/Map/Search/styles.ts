import styled from 'styled-components/native';
import { Feather as FeatherIcon } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
`;

export const SearchContainer = styled.View`
  flex: 1;
  height: 48px;
  flex-direction: row;
  margin: 16px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const InputContainer = styled.View`
  flex: 0.8;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: ${({ theme }) => theme.radius.small};
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  padding: 0 16px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.small};
  box-shadow: ${({ theme }) => theme.shadows.default};
  flex: 0.2;
`;

export const Icon = styled(FeatherIcon)`
  color: ${({ theme }) => theme.colors.black};
`;
