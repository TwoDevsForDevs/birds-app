import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }

  input {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lightBlack};
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: ${({ theme }) => theme.radius.small};
    height: 45px;
    padding: 12px 16px;
    font-size: 16px;
    transition: box-shadow 0.1s, border-color 0.1s;

    ${props =>
      props.isErrored &&
      css`
        border-color: ${({ theme }) => theme.colors.error};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.error};
      `}

    ${props =>
      props.isFocused &&
      css`
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
      `}

    &::placeholder {
      color: ${({ theme }) => theme.colors.inputPlaceholder};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.error};
    font-weight: bold;
    margin-top: 10px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Error = styled.span``;
