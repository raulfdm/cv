import React from 'react';
import { Helmet } from 'react-helmet';
import { MainContext } from 'src/contexts/main';

const Headers = () => {
  const { headers } = React.useContext(MainContext);

  return (
    <Helmet>
      <title>{headers.name}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="author" content={headers.name} />
      <meta name="robots" content="index,nofollow" />

      <meta name="description" content={headers.description} />
    </Helmet>
  );
};

export default Headers;
