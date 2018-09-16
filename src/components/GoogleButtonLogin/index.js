import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.23);
  background-color: #fff;
  border-radius: 4px;
`;

const ButtonText = styled.p`
  margin: 0;
  margin-left: 1rem;
`;

export default ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img
        width="16"
        height="16"
        src="https://d3ptyyxy2at9ui.cloudfront.net/41de2075a7c2872b262ee762ee6ef972.svg"
      />
      <ButtonText>Log in with Google Account</ButtonText>
    </Button>
  );
};
