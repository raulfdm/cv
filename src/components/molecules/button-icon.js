import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const VARIANTS = {
  info: 'has-text-info',
  danger: 'has-text-danger',
};
const ButtonIcon = ({ icon, variant, ...rest }) => {
  return (
    <Button {...rest}>
      <span className={classnames('icon', VARIANTS[variant])}>
        <FontAwesomeIcon icon={icon} />
      </span>
    </Button>
  );
};

export default ButtonIcon;
