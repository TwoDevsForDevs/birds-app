import styled from 'styled-components/native';

import Shimmer from '../../Shimmer';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BirdImageShimmer = styled(Shimmer)`
  width: 264px;
  height: 264px;
  border-radius: ${({ theme }) => theme.radius.default};
  margin-bottom: 16px;
`;
