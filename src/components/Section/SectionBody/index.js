import React from 'react';
import styled from 'styled-components';

const SectionBody = styled.div`
  margin: 0.5rem 0;
`;

export default ({ children }) => {
  return <SectionBody>{children}</SectionBody>;
};
