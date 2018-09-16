import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #fff;
  ${({ fullWidth }) => fullWidth && `width: 100%;`};
`;

const Button = ({ onClick, className, children, type, fullWidth }) => {
  return (
    <StyledButton onClick={onClick} className={className} type={type} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: '',
  children: 'button',
  className: '',
};

export default Button;
