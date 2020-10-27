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

export const TitleSmallShimmer = styled(Shimmer)`
  width: 40%;
  height: 32px;
  margin-bottom: 8px;
`;

export const TitleLargeShimmer = styled(Shimmer)`
  width: 60%;
  height: 32px;
`;

export const BirdsList = styled.View`
  flex-direction: row;
  margin-top: 32px;
`;

export const BirdContainer = styled.View`
  margin-right: 16px;
  width: 160px;
`;

export const BirdImageShimmer = styled(Shimmer)`
  width: 100%;
  height: 160px;
  border-radius: ${({ theme }) => theme.radius.default};
`;

export const BirdNameShimmer = styled(Shimmer)`
  margin-top: 16px;
  height: 16px;
  width: 90%;
`;

export const BirdScientificNameShimmer = styled(Shimmer)`
  margin-top: 4px;
  height: 12px;
  width: 60%;
`;
