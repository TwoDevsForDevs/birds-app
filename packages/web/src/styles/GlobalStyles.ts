import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .react-toastify {
    border-radius: 4px;
    font-size: 16px;
    padding: 20px;
  }
`;
