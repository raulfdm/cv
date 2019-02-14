import React from 'react';
import { Helmet } from 'react-helmet';

export default () => {
  const name = 'Raul Felipe de Melo';
  return (
    <Helmet>
      <title>{name}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="author" content={name} />
      <meta name="robots" content="index,nofollow" />

      <meta
        name="description"
        content="JavaScript Developer with more than 4 years of experience. Perfom front-end and back-end applications using JavaScript (vanilla or frameworks)."
      />
    </Helmet>
  );
};
