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
    height: 100%;
  }

  #root {
    min-height:100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #191920;
    min-height:100%;
    margin-top: 120px;
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

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 20px;
  }
  div[class^="react-toast-notifications__container"] {
    top: 120px;
   }
`;
