/* istanbul ignore file */
/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline:0;

  }

  html, body, #root {
    margin-top: 60px;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #191920;
  }

  body, -moz-user-input, button {
    font: 14px sans-serif;
     color: #fff;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
