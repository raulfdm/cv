import { injectGlobal } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lora|Raleway:400,700');
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

body {
    max-width: 70rem;
    margin: 0 auto;
    font-family: 'Raleway', serif;
    line-height: 1.4;
}

@media (max-width: 600px) {
    body {
        width: 95%;
    }

}

@media (min-width: 601px) {
    body {
        width: 90%;
    }
}

@media (min-width: 960px) {
    body {
        width: 70%;
    }
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
    body>section{
        margin-bottom: 1rem;
    }
}

@media print {
  @page { margin: 0; }
  body { padding: 1.6cm; }
}

`;
