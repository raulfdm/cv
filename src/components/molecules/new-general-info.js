import React from 'react';
import PropTypes from 'prop-types';

import AddNewButton from 'src/components/atoms/add-new-button';
import SingleInputActions from './single-input-actions';

const NewGeneralInfo = ({ onAddInfo }) => {
  const [isAdding, setIsAdding] = React.useState(false);

  return isAdding ? (
    <SingleInputActions
      label="Info Name"
      onConfirm={name => {
        onAddInfo(name);
        setIsAdding(false);
      }}
      onCancel={() => setIsAdding(false)}
    />
  ) : (
    <AddNewButton
      onClick={() => {
        setIsAdding(true);
      }}
    >
      Add new Info
    </AddNewButton>
  );
};

NewGeneralInfo.propTypes = {
  onAddInfo: PropTypes.func,
};

export default NewGeneralInfo;
