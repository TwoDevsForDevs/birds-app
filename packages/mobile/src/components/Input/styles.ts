import styled from 'styled-components/native';
import { Feather as FeatherIcon } from '@expo/vector-icons';

interface Props {
  label: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  margin-bottom: ${props => (props.label ? 16 : 8)}px;
`;

export const Label = styled.Text``;

export const TextInput = styled.TextInput``;

export const Icon = styled(FeatherIcon)``;

export const Error = styled.Text``;
