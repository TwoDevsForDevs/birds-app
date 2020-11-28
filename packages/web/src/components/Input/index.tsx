import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  InputHTMLAttributes
} from 'react';
import { useTheme } from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, label, placeholder, ...rest }) => {
  const { colors } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused}>
      <label>{label}</label>

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        placeholder={placeholder}
        {...rest}
      />

      {error && (
        <Error>
          <FiAlertCircle size={16} color={colors.error} />
          {error}
        </Error>
      )}
    </Container>
  );
};

export default Input;
