import React, { useCallback, useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Birds } from '../index';

import { Container, SearchInputContainer, SearchInput, Button } from './styles';
import GoBackButton from '../../../components/GoBackButton';

interface HeaderProps {
  birds: Birds[];
  setSearchBirds(birds: Birds[]): void;
}

const Header: React.FC<HeaderProps> = ({ birds, setSearchBirds }) => {
  const { colors } = useTheme();

  const [isSearching, setIsSearching] = useState(false);

  const handleToggleSearch = useCallback(() => {
    setSearchBirds(birds);

    setIsSearching(!isSearching);
  }, [setSearchBirds, birds, isSearching]);

  const handleSearch = useCallback(
    text => {
      const birdsFiltered = birds.filter(bird => {
        const birdPopularNameLowerCase = bird.popular_name.toLowerCase();
        const birdScientificNameLowerCase = bird.scientific_name.toLowerCase();

        return (
          birdPopularNameLowerCase.includes(text.toLowerCase()) ||
          birdScientificNameLowerCase.includes(text.toLowerCase())
        );
      });

      return setSearchBirds(birdsFiltered);
    },
    [birds, setSearchBirds]
  );

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
              onChangeText={handleSearch}
            />
          </SearchInputContainer>

          <Button style={{ marginLeft: 16 }} onPress={handleToggleSearch}>
            <Icon name="x" size={20} color={colors.black} />
          </Button>
        </>
      ) : (
        <>
          <GoBackButton />

          <Button onPress={handleToggleSearch}>
            <Icon name="search" size={20} color={colors.black} />
          </Button>
        </>
      )}
    </Container>
  );
};

export default Header;
