import styled from 'styled-components/native';

import Header from '../../../components/Header';

export const Container = styled(Header)``;

export const SearchInputContainer = styled.View`
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 0px 16px;

  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  width: 100%;
  height: 40px;
  margin: 0 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`;
