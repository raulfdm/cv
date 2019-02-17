import { createGlobalStyle } from 'styled-components';

const GlobalPrintStyles = createGlobalStyle`
  @media print {
    html,
    body {
      width: 210mm;
      height: 297mm;
    }

    a {
      text-decoration: none;
    }
  }

  @page {
    size: A4;
    margin: 2cm;
  }
`;

export default GlobalPrintStyles;
