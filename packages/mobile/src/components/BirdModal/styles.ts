import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 0.9;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default};
`;

export const Content = styled.View`
  padding: 32px;
`;

export const CloseModalButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 20px;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;

  align-items: center;
  justify-content: center;
`;

export const BirdImage = styled.Image`
  width: 100%;
  height: 304px;
  border-radius: ${({ theme }) => theme.radius.default};
  margin-bottom: 16px;

  align-self: center;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
`;

export const StatsContent = styled.View`
  flex-direction: row;
`;

export const StatsNumber = styled.Text`
  font-family: 'Roboto_400Regular';
  color: ${({ theme }) => theme.colors.grey};
  margin-right: 4px;
`;

export const StatsText = styled.Text`
  font-family: 'Roboto_400Regular';
  color: ${({ theme }) => theme.colors.grey};
`;

export const StatsDivider = styled.Text`
  font-family: 'Roboto_400Regular';
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const LikeButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const LikeButtonText = styled.Text``;

export const Divider = styled.View`
  margin: 16px 0;
  background: ${({ theme }) => theme.colors.lightGrey};
  height: 1px;
  width: 100%;
`;

export const BirdInfoContainer = styled.View``;

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
