import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, BirdImage, BirdName, BirdScientificName } from './styles';

interface Props extends TouchableOpacityProps {
  imageUrl: string;
  name: string;
  scientificName: string;
  onPress: () => void;
}

const BirdCard: React.FC<Props> = ({
  imageUrl,
  name,
  scientificName,
  onPress,
  ...rest
}) => {
  return (
    <Container onPress={onPress} activeOpacity={0.8} {...rest}>
      <BirdImage
        source={{
          uri: imageUrl
        }}
      />

      <BirdName numberOfLines={1}>{name}</BirdName>
      <BirdScientificName>{scientificName}</BirdScientificName>
    </Container>
  );
};

export default BirdCard;
