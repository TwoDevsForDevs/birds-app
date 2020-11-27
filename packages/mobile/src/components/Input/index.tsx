import React, {
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { Feather as FeatherIcon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  Content,
  Label,
  TextInput,
  Icon,
  Error,
  ErrorText
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  label?: string;
  height?: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, label, height = '48px', ...rest },
  ref
) => {
  const { colors } = useTheme();
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <Label>{label}</Label>}

      <Content isFocused={!!isFocused} isErrored={!!error} height={height}>
        {icon && (
          <Icon
            name={icon}
            size={18}
            isFocused={!!isFocused}
            isErrored={!!error}
          />
        )}

        <TextInput
          ref={inputElementRef}
          keyboardAppearance="light"
          placeholderTextColor={colors.grey}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
      </Content>

      {error && (
        <Error>
          <FeatherIcon name="alert-octagon" size={16} color={colors.error} />
          <ErrorText>{error}</ErrorText>
        </Error>
      )}
    </Container>
  );
};

export default forwardRef(Input);
