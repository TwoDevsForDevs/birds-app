import React, { useEffect, useState, useCallback } from 'react';
import { Text } from 'react-native';

import api from '../../../services/api';

import { useAuth } from '../../../hooks';

import Placeholder from './Placeholder';
import BirdGallery from '../../../components/BirdGallery';
import BirdModal from '../../../components/BirdModal';

import { Container, BirdImage } from './styles';

interface BirdRegister {
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

const MyRegisters: React.FC = () => {
  const { user } = useAuth();

  const [birdRegisters, setBirdRegisters] = useState<BirdRegister[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [birdId, setBirdId] = useState('');

  useEffect(() => {
    async function getBirds() {
      try {
        setLoading(true);

        const response = await api.get(`birds-registers?user_id=${user.id}`);

        setBirdRegisters(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getBirds();
  }, [user.id]);

  const handleModal = useCallback(() => {
    setToggleModal(!toggleModal);
  }, [toggleModal]);

  const handleBirdRegister = useCallback(
    bird_id => {
      setBirdId(bird_id);
      handleModal();
    },
    [handleModal]
  );

  if (loading) {
    return <Placeholder />;
  }

  if (error) {
    return (
      <Container>
        <Text>Error</Text>
      </Container>
    );
  }

  return (
    <>
      <Container>
        {birdRegisters.length > 0 && (
          <BirdImage>
            <BirdGallery
              birdRegisters={birdRegisters}
              onPress={handleBirdRegister}
            />
          </BirdImage>
        )}
      </Container>
      {toggleModal && <BirdModal birdId={birdId} handleModal={handleModal} />}
    </>
  );
};

export default MyRegisters;
