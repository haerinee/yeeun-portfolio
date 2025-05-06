import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica Neue", sans-serif;
    background: white;
    color: #1e293b;//#3c4657;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
