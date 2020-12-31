import styled from 'styled-components';

interface PreviewContainerProps {
  isErrored: boolean;
}

export const Container = styled.div`
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreviewContainer = styled.label<PreviewContainerProps>`
  width: 150px;
  height: 150px;
  border-radius: ${({ theme }) => theme.radius.default};
  border: 1px dashed
    ${({ theme, isErrored }) =>
      isErrored ? theme.colors.error : theme.colors.lightGrey};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radius.default};
    object-fit: cover;
  }

  span {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 16px;
    font-weight: bold;
  }

  input {
    display: none;
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-weight: bold;
  margin-top: 8px;
`;
