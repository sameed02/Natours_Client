import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

      --color-white: #fff;
      --color-grey-1:#f7f7f7;
      --color-grey-2: #777;
      --color-grey-3:#444;

      --color-light-green: #7ed56f;
      --color-medium-green: #55c57a;
      --color-dark-green: #28b485;
      
      --gradient-light-green: rgba(85,197,122,0.8);
      --gradient-dark-green: rgba(40,180,133,0.8);

      --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3)
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
    color: var(--color-grey-2);
    padding: 3rem;
  }

`;

export default GlobalStyle;
