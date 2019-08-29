import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const GoBackToCv = styled.a`
  margin-top: 2rem;
  font-size: 1.4rem;
  text-decoration: underline;
`;

const BackToCvButton = () => {
  return (
    <Link href="/">
      <GoBackToCv>Go back to the CV</GoBackToCv>
    </Link>
  );
};

export default BackToCvButton;
