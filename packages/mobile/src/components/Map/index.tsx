import React, { useEffect, useState, useCallback } from 'react';
import Modal from 'react-native-modal';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';
import { useTheme } from 'styled-components';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, ActivityIndicator } from 'react-native';

import Button from '../Button';

import { Container, Content, ButtonContainer } from './styles';

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface MarkedPosition {
  latitude: number;
  longitude: number;
}

interface MapModalProps {
  handleModal: () => void;
  handleMarkPosition: (markPosition: MarkedPosition) => void;
}

const Map: React.FC<MapModalProps> = ({ handleModal, handleMarkPosition }) => {
  const { colors } = useTheme();

  const [loading, setLoading] = useState(false);
  const [currentRegion, setCurrentRegion] = useState<Region>({} as Region);
  const [markedPosition, setMarkedPosition] = useState<MarkedPosition | null>(
    null
  );

  useEffect(() => {
    async function loadInitialPosition() {
      setLoading(true);

      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          accuracy: 6
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });

        setLoading(false);
      }
    }

    loadInitialPosition();
  }, []);

  const handleMarkOnMap = useCallback(region => {
    const position = region.nativeEvent.coordinate;

    setMarkedPosition(position);
  }, []);

  return (
    <Modal
      isVisible
      style={{ padding: 24 }}
      onBackdropPress={handleModal}
      onBackButtonPress={handleModal}
    >
      <Container>
        <Content>
          {loading ? (
            <ActivityIndicator size="small" color={colors.black} />
          ) : (
            <MapView
              initialRegion={currentRegion}
              style={{ ...StyleSheet.absoluteFillObject }}
              onPress={handleMarkOnMap}
            >
              {markedPosition && (
                <Marker
                  coordinate={{
                    latitude: markedPosition.latitude,
                    longitude: markedPosition.longitude
                  }}
                  draggable
                />
              )}
            </MapView>
          )}
        </Content>
        {markedPosition && (
          <ButtonContainer onPress={() => handleMarkPosition(markedPosition)}>
            <Button>Escolher localidade</Button>
          </ButtonContainer>
        )}
      </Container>
    </Modal>
  );
};

export default Map;
