/* eslint-disable no-param-reassign */
import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState
} from 'react';
import { useField } from '@unform/core';
import { MdInsertPhoto } from 'react-icons/md';
import { useTheme } from 'styled-components';

import { Container, PreviewContainer } from './styles';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const FileInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const { colors } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);

  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
    }

    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      }
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <PreviewContainer htmlFor="image">
        {preview ? (
          <img src={preview} alt="Preview" />
        ) : (
          <>
            <MdInsertPhoto color={colors.lightGrey} size={40} />
            <span>Adicionar foto</span>
          </>
        )}

        <input
          id="image"
          type="file"
          ref={inputRef}
          onChange={handlePreview}
          {...rest}
        />
      </PreviewContainer>
    </Container>
  );
};
export default FileInput;
