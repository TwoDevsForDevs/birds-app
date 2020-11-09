import React, { useCallback, useState } from 'react';

import BirdModal from '../BirdModal';

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
}

const BirdGallery: React.FC<Props> = ({ birdRegisters }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [birdsRegisterInModal, setBirdsRegisterInModal] = useState(
    {} as BirdRegister
  );

  const toggleModal = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

  const handleSetBirdsRegisterInModal = useCallback(
    (register: BirdRegister) => {
      setBirdsRegisterInModal(register);
    },
    []
  );

  return (
    <>
      <Container
        data={birdRegisters}
        keyExtractor={register => register.id}
        numColumns={3}
        renderItem={({ item: register }) => {
          return (
            <RegisterButton
              activeOpacity={0.8}
              onPress={() => {
                toggleModal();
                handleSetBirdsRegisterInModal(register);
              }}
            >
              <BirdImage source={{ uri: register.image_url }} />
            </RegisterButton>
          );
        }}
      />

      <BirdModal
        isVisible={isModalVisible}
        register={birdsRegisterInModal}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default BirdGallery;
