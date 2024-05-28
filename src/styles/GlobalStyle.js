import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
   
      --color-grey: #777;

      --color-light-green: #7ed56f;
      --color-medium-green: #55c57a;
      --color-dark-green: #28b485;

      --gradient-light-green: rgba(126,213,111,0.8);
      --gradient-dark-green: rgba(40,180,131,0.8);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: var(--color-grey);
    padding: 30px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    margin-bottom: 1rem;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
