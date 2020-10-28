import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import api from '../../services/api';

import Placeholder from './Placeholder';

import { Container, Content, BirdImage } from './styles';

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

interface BirdModalProps {
  birdId: string;
}

const BirdModal: React.FC<BirdModalProps> = ({ birdId }) => {
  const [register, setRegister] = useState<BirdRegister>({} as BirdRegister);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadRegister() {
      try {
        setLoading(true);

        const response = await api.get(`birds-registers/${birdId}`);

        setRegister(response.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadRegister();
  }, [birdId]);

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
    <Container>
      {register && (
        <Content>
          <BirdImage source={{ uri: register.image_url }} />
        </Content>
      )}
    </Container>
  );
};

export default BirdModal;
