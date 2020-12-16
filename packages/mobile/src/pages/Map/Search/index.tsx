import React, { useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  SearchContainer,
  InputContainer,
  IconContainer,
  TextInput,
  Icon
} from './styles';

interface SearchProps {
  setSearch: (value: string) => void;
  searchLoading: boolean;
}

const Search: React.FC<SearchProps> = ({ setSearch, searchLoading }) => {
  const { colors } = useTheme();

  const [name, setName] = useState<string>('');

  const getBirdsByName = useCallback(() => {
    setSearch(name);
  }, [setSearch, name]);

  return (
    <Container>
      <SearchContainer>
        <InputContainer>
          <TextInput
            keyboardAppearance="light"
            placeholderTextColor={colors.grey}
            onChangeText={value => {
              setName(value);
            }}
          />
        </InputContainer>
        <IconContainer onPress={getBirdsByName}>
          {searchLoading ? (
            <ActivityIndicator size="small" color={colors.black} />
          ) : (
            <Icon name="search" size={18} />
          )}
        </IconContainer>
      </SearchContainer>
    </Container>
  );
};

export default Search;
