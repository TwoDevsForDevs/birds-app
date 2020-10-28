import styled from 'styled-components/native';

import Header from '../../../components/Header';
import Shimmer from '../../../components/Shimmer';

export const Container = styled.View``;

export const HeaderContent = styled(Header)``;

export const HeaderContentButton = styled(Shimmer)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: 32px;
`;

export const TitleShimmer = styled(Shimmer)`
  width: 60%;
  height: 42px;
  margin-bottom: 32px;
`;

export const BirdImageShimmer = styled(Shimmer)`
  width: 100%;
  height: 304px;
  border-radius: ${({ theme }) => theme.radius.default};
  margin-bottom: 32px;
`;

export const BirdLabelShimmer = styled(Shimmer)`
  height: 16px;
  width: 80px;
`;

export const InfoTextShimmer = styled(Shimmer)`
  margin-top: 8px;
  height: 18px;
  width: 174px;
`;
