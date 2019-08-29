import React from 'react';

import SingleInputActions from 'molecules/single-input-actions';
import AddNewButton from 'atoms/add-new-button';

const NewExtraCourse = ({ onCreate }) => {
  const [isAdding, setIsAdding] = React.useState(false);

  return isAdding ? (
    <SingleInputActions
      label="Platform name"
      onConfirm={value => {
        onCreate(value);
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
      Add new Field
    </AddNewButton>
  );
};

export default NewExtraCourse;
