import React, { useRef, useCallback, useState } from 'react';
import {
  TextInput,
  Alert,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  BackToLoginButton,
  BackToLoginButtonText
} from './styles';

interface ResetPasswordFormData {
  email: string;
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}

const ResetPassword: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const oldPasswordRef = useRef<TextInput>(null);
  const newPasswordRef = useRef<TextInput>(null);
  const confirmNewPasswordRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      Keyboard.dismiss();

      try {
        setLoading(true);

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          old_password: Yup.string().required('Campo obrigatório'),
          new_password: Yup.string().required('Campo obrigatório'),
          confirm_new_password: Yup.string()
            .required('Campo obrigatório')
            .oneOf([Yup.ref('new_password')], 'Confirmação incorreta')
        });

        await schema.validate(data, {
          abortEarly: false
        });

        await api.put('users/reset-password', data);

        Alert.alert('Senha resetada com sucesso!');

        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          setLoading(false);

          return;
        }

        console.log(err);

        setLoading(false);

        Alert.alert(
          'Erro ao resetar senha',
          'Ocorreu um erro ao resetar sua senha, tente novamente.'
        );
      }
    },
    [navigation]
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
          <Title>Resetar senha</Title>

          <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                oldPasswordRef.current?.focus();
              }}
            />

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

            <Button
              loading={loading}
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Resetar senha
            </Button>
          </Form>

          <BackToLoginButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color={colors.primary} />
            <BackToLoginButtonText>Voltar para o login</BackToLoginButtonText>
          </BackToLoginButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;
