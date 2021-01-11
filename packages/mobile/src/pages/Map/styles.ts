import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BirdRegisterImage = styled.Image`
  height: 44px;
  width: 44px;
  border-radius: ${({ theme }) => theme.radius.default};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.black};
`;

export const RegisterCalloutContainer = styled.View`
  padding: 8px;
  flex: 1;
  width: 170px;
  border-radius: ${({ theme }) => theme.radius.default};
`;

export const PopularNameText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Roboto_700Bold';
  font-size: 16px;
`;

export const ScientificNameText = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-family: 'Roboto_400Regular';
  font-style: italic;
  font-size: 12px;
`;

export const OwnerNameContainer = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const OwnerNameLabel = styled.Text`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.grey};
  font-family: 'Roboto_400Regular';
  font-size: 12px;
`;

export const OwnerNameText = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-family: 'Roboto_400Regular';
  font-size: 12px;
`;

export const RegisterDateContainer = styled.View`
  flex-direction: row;
`;

export const RegisterDateLabel = styled.Text`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.grey};
  font-family: 'Roboto_400Regular';
  font-size: 12px;
`;

export const RegisterDateText = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-family: 'Roboto_400Regular';
  font-size: 12px;
`;
