import React, { useEffect, useState, useCallback } from 'react';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';
import { parseISO, format } from 'date-fns';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useTheme } from 'styled-components';

import {
  Container,
  BirdRegisterImage,
  RegisterCalloutContainer,
  PopularNameText,
  ScientificNameText,
  OwnerNameContainer,
  OwnerNameLabel,
  OwnerNameText,
  RegisterDateContainer,
  RegisterDateLabel,
  RegisterDateText
} from './styles';

import api from '../../services/api';

import BirdModal from '../../components/BirdModal';
import Search from './Search';

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface MarkerData {
  id: string;
  latitude: number;
  longitude: number;
  image_url: string;
  popular_name: string;
  scientific_name: string;
  owner_name: string;
  register_date: string;
}

interface BirdRegister {
  id: string;
  location: string;
  image_url: string;
  register_date: string;
  bird: {
    popular_name: string;
    scientific_name: string;
  };
  owner: {
    name: string;
  };
}

const Map: React.FC = () => {
  const { colors } = useTheme();

  const [mapLoading, setMapLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [currentRegion, setCurrentRegion] = useState<Region | null>(null);
  const [markes, setMarkes] = useState<MarkerData[]>([]);
  const [birdRegisterId, setBirdRegisterId] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    async function loadMarkers() {
      setSearchLoading(true);

      const response = await api.get('birds-registers', {
        params: {
          search
        }
      });

      if (response.data) {
        const formattedMarkes = response.data.map((marker: BirdRegister) => {
          const splitedLocation = marker.location.split(',');

          return {
            id: marker.id,
            latitude: Number(splitedLocation[0]),
            longitude: Number(splitedLocation[1]),
            popular_name: marker.bird.popular_name,
            scientific_name: marker.bird.scientific_name,
            owner_name: marker.owner.name,
            image_url: marker.image_url,
            register_date: format(parseISO(marker.register_date), 'dd/MM/yyyy')
          };
        });

        setMarkes(formattedMarkes);
      }

      setSearchLoading(false);
    }

    loadMarkers();
  }, [search]);

  useEffect(() => {
    async function loadInitialPosition() {
      setMapLoading(true);

      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          accuracy: 6
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        });

        setMapLoading(false);
      }
    }

    loadInitialPosition();
  }, []);

  const handleRegionChanged = useCallback(region => {
    setCurrentRegion(region);
  }, []);

  const toggleModal = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

  return (
    <>
      <Container>
        {mapLoading ? (
          <ActivityIndicator size="small" color={colors.black} />
        ) : (
          <>
            <View
              style={{
                position: 'absolute',
                top: 40,
                left: 20,
                right: 20,
                zIndex: 5
              }}
            >
              <Search setSearch={setSearch} searchLoading={searchLoading} />
            </View>
            {currentRegion && (
              <MapView
                onRegionChangeComplete={handleRegionChanged}
                initialRegion={currentRegion}
                style={{ ...StyleSheet.absoluteFillObject }}
              >
                {markes?.map(marker => (
                  <Marker
                    key={marker.id}
                    coordinate={{
                      latitude: marker.latitude,
                      longitude: marker.longitude
                    }}
                  >
                    <BirdRegisterImage source={{ uri: marker.image_url }} />
                    <Callout
                      onPress={() => {
                        setBirdRegisterId(marker.id);
                        toggleModal();
                      }}
                    >
                      <RegisterCalloutContainer>
                        <PopularNameText>{marker.popular_name}</PopularNameText>
                        <ScientificNameText>
                          {marker.scientific_name}
                        </ScientificNameText>
                        <OwnerNameContainer>
                          <OwnerNameLabel>Autor:</OwnerNameLabel>
                          <OwnerNameText>{marker.owner_name}</OwnerNameText>
                        </OwnerNameContainer>
                        <RegisterDateContainer>
                          <RegisterDateLabel>
                            Data de registro:
                          </RegisterDateLabel>
                          <RegisterDateText>
                            {marker.register_date}
                          </RegisterDateText>
                        </RegisterDateContainer>
                      </RegisterCalloutContainer>
                    </Callout>
                  </Marker>
                ))}
              </MapView>
            )}
          </>
        )}
      </Container>

      {isModalVisible && (
        <BirdModal
          isVisible={isModalVisible}
          register_id={birdRegisterId}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Map;
