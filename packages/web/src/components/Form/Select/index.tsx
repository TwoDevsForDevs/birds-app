import React, { useRef, useEffect, useCallback } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
  ValueType
} from 'react-select';
import { useField } from '@unform/core';
import { useTheme } from 'styled-components';
import { lighten } from 'polished';

import { Container, Error } from './styles';

interface Option {
  id: string;
  name: string;
}

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  label: string;
  options: Option[];
  setSelectedOptions: any;
  error: string;
}
const Select: React.FC<Props> = ({
  name,
  label,
  options,
  setSelectedOptions,
  error,
  ...rest
}) => {
  const { colors } = useTheme();
  const selectRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }

        if (!ref.state.value) {
          return '';
        }

        return ref.state.value.value;
      }
    });
  }, [fieldName, registerField, rest.isMulti]);

  const getOptions =
    options &&
    options.map(option => {
      const data = {
        value: option.id,
        label: option.name
      };

      return data;
    });

  const getDefatultValue = {
    label: defaultValue?.name,
    value: defaultValue?.id
  };

  const handleChangeOptions = useCallback(
    (e: ValueType<OptionTypeBase, false>) => {
      setSelectedOptions(e);
    },
    [setSelectedOptions]
  );

  return (
    <Container isErrored={!!error}>
      <label>{label}</label>

      <ReactSelect
        ref={selectRef}
        classNamePrefix="react-select"
        defaultValue={getDefatultValue}
        options={getOptions}
        onChange={handleChangeOptions}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: colors.primary,
            primary25: lighten(0.35, colors.primary)
          }
        })}
        {...rest}
      />

      {!!error && <Error>{error}</Error>}
    </Container>
  );
};
export default Select;
