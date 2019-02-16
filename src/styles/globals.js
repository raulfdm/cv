import { createGlobalStyle } from 'styled-components';
import 'sanitize.css/sanitize.css';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.font.sans};
  }

  body {
    font-family: ${theme.font.serif};
    color: ${theme.color.black};

    line-height: 1.6;
  }

  a {
    color: ${theme.color.black};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    margin: 0;
  }
`;
