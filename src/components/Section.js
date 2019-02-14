import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
  page-break-before: auto;
`;

export default ({ children }) => {
  return <Section>{children}</Section>;
};
