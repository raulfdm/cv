import React from 'react';
import styled from 'styled-components';
import CirclesSvg from 'atoms/circles-svg';

import { GlobalFullHeight } from 'styles/globals';

const PageLoaderWrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoader = styled(CirclesSvg)`
  stroke: ${props => props.theme.color.black};
`;

const PageLoader = ({ isLoading }) => {
  return (
    <PageLoaderWrapper isLoading={isLoading}>
      <GlobalFullHeight />
      <StyledLoader />
    </PageLoaderWrapper>
  );
};

export default PageLoader;
