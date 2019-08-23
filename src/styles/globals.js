import { createGlobalStyle } from 'styled-components';
import 'sanitize.css/sanitize.css';

import theme from './theme';

export const GlobalFullHeight = createGlobalStyle`
  html,
  body,
  #__next,
  #__next > div[role="group"] {
    height: 100%
  }
`;

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

  ul{
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    display: inline;
  }
`;
