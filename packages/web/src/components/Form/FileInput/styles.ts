import styled from 'styled-components';

export const Container = styled.div``;

export const PreviewContainer = styled.label`
  width: 150px;
  height: 150px;
  border-radius: ${({ theme }) => theme.radius.default};
  border: 1px dashed ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radius.default};
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
