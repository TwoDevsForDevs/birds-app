import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const Shimmer = styled(ShimmerPlaceHolder).attrs({
  shimmerColors: ['#eff1f3', '#e2e2e2', '#eff1f3']
})``;

export default Shimmer;
