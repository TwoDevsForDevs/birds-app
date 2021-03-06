import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 0.9;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default};
`;

export const Content = styled.View``;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface LikeButtonProps {
  userHasLike: boolean;
}

export const LoadingContainer = styled.View`
  height: 200px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default};

  align-items: center;
  justify-content: center;
`;

export const CloseModalButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(39, 39, 39, 0.7);
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
  border-top-left-radius: ${({ theme }) => theme.radius.default};
  border-top-right-radius: ${({ theme }) => theme.radius.default};

  align-self: center;
`;

export const BirdDetails = styled.View`
  padding: 24px;
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

export const LikeButton = styled.TouchableOpacity<LikeButtonProps>`
  margin-top: 16px;
  padding: 8px;
  background: ${({ theme, userHasLike }) =>
    userHasLike ? 'rgba(255, 0 ,0, 0.1)' : theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.radius.small};

  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

export const LikeButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.grey};
`;

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

export const PopularityContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const LikesContainer = styled.View`
  flex-direction: row;
  margin-right: 8px;
`;

export const NumberOfLikes = styled.Text`
  margin-right: 4px;
  font-family: 'Roboto_400Regular';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Likes = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const ViewsContainer = styled.View`
  flex-direction: row;
`;

export const NumberOfViews = styled.Text`
  margin-right: 4px;
  font-family: 'Roboto_400Regular';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Views = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const LikeText = styled.Text`
  margin-left: 8px;
  font-family: 'Roboto_400Regular';
  color: ${({ theme }) => theme.colors.grey};
`;

export const RegisterInfo = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 16px;
  justify-content: flex-start;
`;

export const InfoContainer = styled.View`
  margin-bottom: 16px;
`;

export const InfoTitle = styled.Text`
  font-family: 'Roboto_700Bold';
  color: ${({ theme }) => theme.colors.black};
`;

export const Info = styled.Text`
  font-family: 'Roboto_400Regular';
  color: ${({ theme }) => theme.colors.grey};
  font-size: 18px;
`;

export const Label = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

export const InfoText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey};
`;
