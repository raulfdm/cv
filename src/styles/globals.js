import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  :root{
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
    color: ${theme.black};
  }

  a {
    color: ${theme.black};
  }
`;

/* TODO: Refactor Print
@media print {
    html,
    body {
      width: 210mm;
      height: 297mm;
    }
    body > section {
      margin-bottom: 1rem;
    }
  }

  @media print {
    @page {
      margin: 0;
      size: A4;
      margin: 11mm 17mm 17mm 17mm;
    }
    body {
      padding: 1.6cm;
    }
  }

*/
