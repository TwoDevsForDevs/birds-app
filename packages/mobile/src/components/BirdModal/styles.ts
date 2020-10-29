import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.default};
`;

export const CloseButton = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 8px;
`;

export const BirdImage = styled.Image`
  width: 264px;
  height: 264px;
  border-radius: ${({ theme }) => theme.radius.default};
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

export const LikeButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 8px;
  width: 100%;
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
