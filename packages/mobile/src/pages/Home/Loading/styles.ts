import styled from 'styled-components/native';
import Shimmer from '../../../components/Shimmer';

export const Container = styled.View`
  padding: 0 24px;
  margin-bottom: 40px;
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

export const BirdsContainer = styled.View`
  margin-right: 16px;
  width: 171px;
`;

export const BirdImageShimmer = styled(Shimmer)`
  width: 100%;
  height: 171px;
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
