import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView``;

export const BirdImage = styled.Image`
  width: 90%;
  height: 90%;
  border-radius: ${({ theme }) => theme.radius.default};

  align-self: center;
`;

export const BirdInfoContainer = styled.View`
  margin-top: 32px;
  /* padding: 0 24px; */
`;

export const BirdInfo = styled.View`
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

export const InfoText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 18px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const WikiAvesLink = styled.TouchableOpacity``;
