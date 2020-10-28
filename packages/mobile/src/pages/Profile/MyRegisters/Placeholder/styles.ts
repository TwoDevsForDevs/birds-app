import styled from 'styled-components/native';

import Shimmer from '../../../../components/Shimmer';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const BirdImageShimmer = styled(Shimmer)`
  width: 31%;
  height: 98px;
  border-radius: ${({ theme }) => theme.radius.default};
  margin-bottom: 16px;
  margin-right: 16px;
`;
