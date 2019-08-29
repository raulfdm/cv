import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from 'molecules/button-icon';

const DeleteButton = props => {
  return <ButtonIcon icon={faTrash} type="button" variant="danger" {...props} />;
};

export default DeleteButton;
