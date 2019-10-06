import React from 'react';

import { useCvService } from 'src/config/useCvService';
import Layout from 'components/layout';
import PageLoader from 'molecules/page-loader';

const withAuthProtection = WrappedComponent =>
  function withAuth(props) {
    // const { isAuth, isChecking, ...restAuth } = useCvService();

    // if (isChecking) {
    //   return (
    //     <Layout>
    //       <PageLoader />
    //     </Layout>
    //   );
    // }

    // if (!isAuth) {
    //   window.location.href = '/login';
    //   return 'Permission denied';
    // }

    return <WrappedComponent {...props} /* authProps={{ isAuth, isChecking, ...restAuth }}  */ />;
  };

export default withAuthProtection;
