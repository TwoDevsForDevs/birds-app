import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  position: relative;

  /* Android */
  padding-top: 24px;
`;

export const Content = styled.View`
  height: 56px;
  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
