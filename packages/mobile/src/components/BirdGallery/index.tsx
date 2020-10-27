import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

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
}

const BirdGallery: React.FC<Props> = ({ children, birdRegisters }) => {
  return (
    <Container
      data={birdRegisters}
      keyExtractor={register => register.id}
      numColumns={4}
      renderItem={({ item: register }) => {
        return (
          <>
            <Text>{register.obs}</Text>

            {/* {isOddNumber(register.length) && <EmptyItem />} */}
          </>
        );
      }}
    >
      {children}
    </Container>
  );
};

export default BirdGallery;
