// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    background-image: linear-gradient(#d03f8d, #0c4cb4);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-repeat: no-repeat;
  }
`;
 
export default GlobalStyle;
