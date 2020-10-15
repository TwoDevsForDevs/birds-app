import React, { useCallback, useRef, useState } from 'react';
import {
  TextInput,
  Alert,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  OrText,
  SocialButtonsContainer,
  SocialButton,
  SocialButtonText,
  GoogleIcon,
  FacebookIcon,
  CreateAccountButton,
  CreateAccountButtonText
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      Keyboard.dismiss();

      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória')
        });

        await schema.validate(data, {
          abortEarly: false
        });

        await signIn({
          email: data.email,
          password: data.password
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais'
        );
      } finally {
        setLoading(false);
      }
    },
    [signIn]
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
                passwordInputRef.current?.focus();
              }}
            />

            <Input
              ref={passwordInputRef}
              secureTextEntry
              name="password"
              icon="lock"
              returnKeyType="send"
              placeholder="Senha"
            />

            <ForgotPasswordButton
              onPress={() => {
                console.log('Navegar para tela de esqueci senha');
              }}
            >
              <ForgotPasswordButtonText>
                Esqueci minha senha
              </ForgotPasswordButtonText>
            </ForgotPasswordButton>

            <Button
              loading={loading}
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Button>
          </Form>

          <View>
            <OrText>ou entre com:</OrText>
          </View>

          <SocialButtonsContainer>
            <SocialButton style={{ marginRight: 24 }}>
              <GoogleIcon />
              <SocialButtonText>Google</SocialButtonText>
            </SocialButton>

            <SocialButton>
              <FacebookIcon />
              <SocialButtonText>Facebook</SocialButtonText>
            </SocialButton>
          </SocialButtonsContainer>

          <CreateAccountButton
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Icon name="log-in" size={20} color={colors.primary} />
            <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
          </CreateAccountButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
