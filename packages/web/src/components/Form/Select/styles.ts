import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 16px 0;

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  .react-select__control {
    height: 45px;

    ${props =>
      props.isErrored &&
      css`
        border: 2px solid ${({ theme }) => theme.colors.error};
      `}
  }

  .react-select__placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
    opacity: 0.8;
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-weight: bold;
  margin-top: 8px;
`;
