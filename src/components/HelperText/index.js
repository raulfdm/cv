import React from 'react';
import styled from 'styled-components';

const HelperText = styled.p`
  margin: 0;
  flex-basis: 100%;
  font-size: 10px;
  color: tomato;
`;

export default ({ children, className }) => {
  return <HelperText className={className}>{children}</HelperText>;
};
