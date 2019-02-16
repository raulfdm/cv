import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ name, description }) => {
  return (
    <Helmet>
      <title>{name}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="author" content={name} />
      <meta name="robots" content="index,nofollow" />

      <meta name="description" content={description} />
    </Helmet>
  );
};
