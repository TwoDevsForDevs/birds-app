import React, { useState, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import debounce from 'debounce-promise';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import api from '../../../services/api';

import {
  Container,
  InputContainer,
  TextInput,
  Icon,
  BirdsOptionsContainer,
  BirdOption,
  PopularNameText,
  ScientificNameText
} from './styles';

interface Bird {
  id: string;
  popular_name: string;
  scientific_name: string;
}

const Search: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const [birds, setBirds] = useState<Bird[]>([]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const getBirdsByName = debounce(
    useCallback(async (value: string) => {
      if (!value) {
        return Promise.resolve([]);
      }

      setLoading(true);

      const { data } = await api.get('birds', {
        params: {
          search: value
        }
      });

      if (data.length > 0) {
        const formattedBirds = data.map((bird: Bird) => {
          return {
            id: bird.id,
            popular_name: bird.popular_name,
            scientific_name: bird.scientific_name
          };
        });

        setBirds(formattedBirds);
      }

      setLoading(false);

      return [];
    }, []),
    500
  );

  const handleNavigateToPickBirdImage = useCallback(
    (id: string, name: string) => {
      navigation.navigate('RegisterBirdPickImage', {
        birdId: id,
        birdName: name
      });
    },
    [navigation]
  );

  return (
    <Container>
      <InputContainer isFocused={!!isFocused}>
        <TextInput
          keyboardAppearance="light"
          placeholderTextColor={colors.grey}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            getBirdsByName(value);
          }}
        />
        <Icon name="search" size={18} isFocused={!!isFocused} />
      </InputContainer>
      {birds && birds.length > 0 && (
        <BirdsOptionsContainer
          contentContainerStyle={{
            justifyContent: loading ? 'center' : 'flex-start'
          }}
        >
          {loading ? (
            <ActivityIndicator size="small" color={colors.black} />
          ) : (
            <>
              {birds.map((bird: Bird) => (
                <BirdOption
                  key={bird.id}
                  onPress={() =>
                    handleNavigateToPickBirdImage(bird.id, bird.popular_name)}
                >
                  <PopularNameText>{bird.popular_name}</PopularNameText>
                  <ScientificNameText>
                    {bird.scientific_name}
                  </ScientificNameText>
                </BirdOption>
              ))}
            </>
          )}
        </BirdsOptionsContainer>
      )}
    </Container>
  );
};

export default Search;
