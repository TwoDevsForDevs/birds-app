import React from 'react';

import { Container, RegisterButton, BirdImage } from './styles';

export interface BirdRegister {
  id: string;
  owner_id: string;
  bird_id: string;
  image_url: string;
  location: string;
  register_date: string;
  obs: string;
  likes: number;
  views: number;
}

interface Props {
  birdRegisters: BirdRegister[];
  onPress: (id: string) => void;
}

const BirdGallery: React.FC<Props> = ({ birdRegisters, onPress }) => {
  return (
    <Container
      data={birdRegisters}
      keyExtractor={register => register.id}
      numColumns={3}
      renderItem={({ item: register }) => {
        return (
          <RegisterButton
            activeOpacity={0.8}
            onPress={() => onPress(register.id)}
          >
            <BirdImage source={{ uri: register.image_url }} />
          </RegisterButton>
        );
      }}
    />
  );
};

export default BirdGallery;
