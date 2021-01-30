import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 64px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  display: flex;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    a {
      color: ${({ theme }) => theme.colors.grey};
      font-size: 15px;
      font-weight: bold;

      & + a {
        margin-left: 24px;
      }

      &.selected {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    margin-bottom: 5px;
  }

  button {
    color: ${({ theme }) => theme.colors.error};
  }
`;
