import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

PageLoader.propTypes = {
  isLoading: PropTypes.bool,
};

export default PageLoader;
