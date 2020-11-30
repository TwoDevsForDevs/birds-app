import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import { useAuth } from '../../hooks';

import GoBackButton from '../../components/GoBackButton';
import GoForwardButton from '../../components/GoForwardButton';
import Button from '../../components/Button';

import {
  Container,
  MainContent,
  Header,
  BirdName,
  PickImageContainer,
  PickImageText,
  BirdEmptyImage,
  BirdImage
} from './styles';

interface RouteParams {
  birdId: string | null;
  birdName: string;
}

interface BirdImage {
  type: string;
  name: string;
  uri: string;
}

const RegisterBirdPickImage: React.FC = () => {
  const { user } = useAuth();

  const route = useRoute();
  const navigation = useNavigation();

  const routeParams = route.params as RouteParams;

  const { birdId, birdName } = routeParams;

  const [birdImage, setBirdImage] = useState<BirdImage>({
    type: '',
    name: '',
    uri: ''
  });

  const handlePickImage = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Você precisa permitir acesso a galeria para mudar a foto de perfil.'
      );
    }

    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5
    });

    if (!response.cancelled) {
      setBirdImage({
        type: 'image/jpeg',
        name: `${Date.now()}.${user.id}.jpg`,
        uri: response.uri
      });
    }
  }, [user]);

  const handleNavigateToRegisterBirdInfo = useCallback(() => {
    navigation.navigate('RegisterBirdInfo', {
      birdId,
      birdName,
      birdImage
    });
  }, [navigation, birdId, birdName, birdImage]);

  return (
    <Container>
      <MainContent>
        <GoBackButton />
        <Header>
          <BirdName>{birdName || 'Adicionar Registro'}</BirdName>
        </Header>
        <PickImageContainer>
          <PickImageText>Escolha uma foto:</PickImageText>
          {birdImage.uri !== '' ? (
            <BirdImage source={{ uri: birdImage.uri }} />
          ) : (
            <BirdEmptyImage />
          )}
          <Button onPress={handlePickImage}>Escolher uma foto</Button>
        </PickImageContainer>
        {birdImage.uri !== '' && (
          <GoForwardButton
            handleNavigation={handleNavigateToRegisterBirdInfo}
          />
        )}
      </MainContent>
    </Container>
  );
};

export default RegisterBirdPickImage;
