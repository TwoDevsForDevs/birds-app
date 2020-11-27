import React, { useRef, useState, useCallback } from 'react';
import { Platform, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { FormHandles } from '@unform/core';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import api from '../../services/api';

import { useAuth } from '../../hooks';

import getValidationErrors from '../../utils/getValidationErrors';

import GoBackButton from '../../components/GoBackButton';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Map from '../../components/Map';

import {
  MainContent,
  Header,
  BirdName,
  FormTitle,
  ChooseLocationButton,
  ChooseDateButton
} from './styles';

interface BirdImage {
  type: string;
  name: string;
  uri: string;
}

interface RouteParams {
  birdId: string | null;
  birdName: string;
  birdImage: BirdImage;
}

interface MarkedPosition {
  latitude: number;
  longitude: number;
}

interface BirdRegister {
  location: string;
  register_date: string;
  obs: string;
}

interface RegisterBirdFormData {
  location: string;
  obs: string;
}

const RegisterBirdInfo: React.FC = () => {
  const { colors } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();

  const { user } = useAuth();

  const routeParams = route.params as RouteParams;

  const { birdId, birdName, birdImage } = routeParams;

  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleDatePicker, setToggleDatePicker] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [birdRegister, setBirdRegister] = useState<BirdRegister>({
    register_date: format(new Date(), 'dd/MM/yyyy'),
    obs: '',
    location: ''
  });

  const handleModal = useCallback(() => {
    setToggleModal(!toggleModal);
  }, [toggleModal]);

  const handleMarkPosition = useCallback(
    ({ latitude, longitude }: MarkedPosition) => {
      setBirdRegister(register => ({
        ...register,
        location: `${latitude}, ${longitude}`
      }));

      handleModal();
    },
    [handleModal]
  );

  const handleDateChange = useCallback((event: any, date: Date | undefined) => {
    if (Platform.OS === 'android') {
      setToggleDatePicker(false);
    }

    if (date) {
      setSelectedDate(date);
      setBirdRegister(register => ({
        ...register,
        register_date: format(date, 'dd/MM/yyyy')
      }));
    }
  }, []);

  const handleToggleDatePicker = useCallback(() => {
    setToggleDatePicker(state => !state);
  }, []);

  const handleRegisterBird = useCallback(
    async (data: RegisterBirdFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          location: Yup.string().required('Localização obrigatória'),
          register_date: Yup.string().required('Data de registro obrigatoria'),
          obs: Yup.string()
        });

        await schema.validate(data, {
          abortEarly: false
        });

        const { location, obs } = data;

        const registerData = new FormData();

        registerData.append('image', {
          type: birdImage.type,
          name: birdImage.name,
          uri: birdImage.uri
        });

        registerData.append('owner_id', user.id);
        registerData.append('bird_id', birdId);
        registerData.append('location', location);
        registerData.append('register_date', selectedDate.toISOString());
        registerData.append('obs', obs);

        await api.post('birds-registers', registerData);

        navigation.navigate('RegisterBirdComplete');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          setLoading(false);
          return;
        }

        setLoading(false);

        Alert.alert(
          'Erro no cadastro de registro',
          'Ocorreu um erro ao cadastrar seu registro, tente novamente.'
        );
      }
    },
    [user, birdId, birdImage, selectedDate, navigation]
  );

  return (
    <>
      <MainContent>
        <GoBackButton />
        <Header>
          <BirdName>{birdName || 'Adicionar Registro'}</BirdName>
        </Header>
        <FormTitle>Preencha os dados:</FormTitle>
        <Form
          ref={formRef}
          onSubmit={handleRegisterBird}
          initialData={birdRegister}
        >
          <ChooseLocationButton onPress={handleModal}>
            <Input name="location" label="Localidade" editable={false} />
          </ChooseLocationButton>

          <ChooseDateButton onPress={handleToggleDatePicker}>
            <Input
              name="register_date"
              label="Data de registro"
              editable={false}
            />
          </ChooseDateButton>
          {toggleDatePicker && (
            <DateTimePicker
              mode="date"
              display="calendar"
              textColor={colors.grey}
              onChange={handleDateChange}
              value={selectedDate}
            />
          )}
          <Input
            name="obs"
            label="Detalhes do que a ave estava fazendo"
            multiline
            numberOfLines={6}
            height="150px"
          />
        </Form>
        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}
          loading={loading}
        >
          Finalizar cadastro
        </Button>
      </MainContent>
      {toggleModal && (
        <Map
          handleModal={handleModal}
          handleMarkPosition={handleMarkPosition}
        />
      )}
    </>
  );
};

export default RegisterBirdInfo;
