import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentTitle = styled.h2`
  width: 100%;
  font-size: 1.8rem;
  margin: 0.8rem 0;
  border-bottom: 1px solid #cdcdcd;
`;

const TitleWrapper = ({ title }) => {
  return <ContentTitle>{title}</ContentTitle>;
};

TitleWrapper.defaultProps = {
  title: 'Some Title Right Here',
};

TitleWrapper.propTypes = {
  title: PropTypes.string,
};

export default TitleWrapper;
