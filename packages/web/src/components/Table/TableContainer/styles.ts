import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;

  div {
    margin-top: 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
      padding: 8px 16px;
      border-radius: 4px;
      transition: background 0.2s;

      display: flex;
      align-items: center;

      &:hover {
        background: ${({ theme }) => darken(0.03, theme.colors.primary)};
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;

  thead th {
    text-align: left;
    font-size: 16px;
    padding: 6px 15px 0;

    &:last-child {
      text-align: right;
    }
  }

  tbody td {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lightBlack};
    border-radius: 4px;
    height: 56px;
    padding: 6px 16px;
    font-size: 16px;

    &:last-child {
      text-align: right;
    }

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;

      display: flex;
      align-self: center;
    }
  }
`;
