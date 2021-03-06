import React, { useRef, useCallback } from 'react';
import {
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import api from '../../../services/api';

import { useAuth } from '../../../hooks';

import getValidationErrors from '../../../utils/getValidationErrors';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Info, Password, ButtonsContainer } from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}

const MyData: React.FC = () => {
  const { colors } = useTheme();
  const { user, updateUser } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const emailRef = useRef<TextInput>(null);
  const oldPasswordRef = useRef<TextInput>(null);
  const newPasswordRef = useRef<TextInput>(null);
  const confirmNewPasswordRef = useRef<TextInput>(null);

  const handleUpdateUser = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          old_password: Yup.string(),
          new_password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string()
          }),
          confirm_new_password: Yup.string()
            .when('old_password', {
              is: val => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string()
            })
            .oneOf([Yup.ref('new_password'), null], 'Confirmação incorreta')
        });

        await schema.validate(data, {
          abortEarly: false
        });

        const {
          name,
          email,
          old_password,
          new_password,
          confirm_new_password
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                new_password,
                confirm_new_password
              }
            : {})
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        Alert.alert('Perfil atualizado com sucesso!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na atualização do perfil',
          'Ocorreu um erro ao atualizar seu perfil, tente novamente.'
        );
      }
    },
    [updateUser]
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Form ref={formRef} onSubmit={handleUpdateUser} initialData={user}>
            <Info>
              <Input
                name="name"
                placeholder="Seu nome"
                icon="user"
                onSubmitEditing={() => {
                  emailRef.current?.focus();
                }}
              />
              <Input
                ref={emailRef}
                name="email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Seu email"
                icon="mail"
                onSubmitEditing={() => {
                  oldPasswordRef.current?.focus();
                }}
              />
            </Info>
            <Password>
              <Input
                ref={oldPasswordRef}
                name="old_password"
                placeholder="Senha atual"
                icon="lock"
                secureTextEntry
                onSubmitEditing={() => {
                  newPasswordRef.current?.focus();
                }}
              />
              <Input
                ref={newPasswordRef}
                name="new_password"
                placeholder="Nova senha"
                icon="lock"
                secureTextEntry
                onSubmitEditing={() => {
                  confirmNewPasswordRef.current?.focus();
                }}
              />
              <Input
                ref={confirmNewPasswordRef}
                name="confirm_new_password"
                placeholder="Confirmar nova senha"
                icon="lock"
                secureTextEntry
              />
            </Password>
          </Form>
          <ButtonsContainer>
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Atualizar dados
            </Button>
            <Button color={colors.white} background={colors.error}>
              Deletar minha conta
            </Button>
          </ButtonsContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MyData;
