import { injectGlobal, css } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

const global = css`
  body,
  #___gatsby {
    height: 100%;
  }

  body {
    font-family: 'Raleway', serif;
    line-height: 1.4;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 0.754rem;
  }

  a {
    color: black;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1rem;
    font-family: 'Lora', sans-serif;
  }

  ul {
    padding-left: 1.5rem;
  }

  @page {
    size: A4;
    margin: 11mm 17mm 17mm 17mm;
  }

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
    }
    body {
      padding: 1.6cm;
    }
  }
`;

injectGlobal`
${global}
`;
