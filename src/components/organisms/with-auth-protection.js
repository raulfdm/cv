import React from 'react';

import { useAuth } from 'src/config/auth';
import Layout from 'components/layout';
import PageLoader from 'molecules/page-loader';

const withAuthProtection = WrappedComponent => props => {
  const { isAuth, isChecking, ...restAuth } = useAuth();

  if (isChecking) {
    return (
      <Layout>
        <PageLoader />
      </Layout>
    );
  }

  if (!isAuth) {
    window.location.href = '/login';
    return 'Permission denied';
  }

  return <WrappedComponent {...props} authProps={{ isAuth, isChecking, ...restAuth }} />;
};

export default withAuthProtection;
