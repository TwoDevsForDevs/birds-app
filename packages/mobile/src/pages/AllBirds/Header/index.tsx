import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Container, SearchInputContainer, SearchInput, Button } from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleNavigateBackToHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handleToggleSearch = useCallback(() => {
    setIsSearching(!isSearching);
  }, [isSearching]);

  const handleSearch = useCallback(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <Container>
      {isSearching ? (
        <>
          <SearchInputContainer>
            <Icon name="search" size={16} color={colors.grey} />

            <SearchInput
              autoCapitalize="words"
              placeholder="Faça sua busca"
              placeholderTextColor={colors.grey}
              returnKeyType="send"
              value={searchValue}
              onChangeText={setSearchValue}
              onSubmitEditing={handleSearch}
            />
          </SearchInputContainer>

          <Button style={{ marginLeft: 16 }} onPress={handleToggleSearch}>
            <Icon name="x" size={20} color={colors.black} />
          </Button>
        </>
      ) : (
        <>
          <Button onPress={handleNavigateBackToHome}>
            <Icon name="chevron-left" size={20} color={colors.black} />
          </Button>

          <Button onPress={handleToggleSearch}>
            <Icon name="search" size={20} color={colors.black} />
          </Button>
        </>
      )}
    </Container>
  );
};

export default Header;
