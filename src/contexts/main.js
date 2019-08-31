import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import PageLoader from 'molecules/page-loader';
import { useData } from 'utils/useData';

export const MainContext = createContext({});
MainContext.displayName = 'MainContext';

const END_ANIMATION_MILLISECONDS = 2000;

export const MainContextProvider = ({ children }) => {
  const { data, isLoadingData } = useData();
  const [isLoading, handleIsLoading] = useState(true);

  setTimeout(() => {
    handleIsLoading(false);
  }, END_ANIMATION_MILLISECONDS);

  return (
    <MainContext.Provider value={{ ...data, isLoadingData }}>
      {isLoading || isLoadingData ? <PageLoader /> : children}
    </MainContext.Provider>
  );
};

MainContextProvider.propTypes = {
  children: PropTypes.node,
};
