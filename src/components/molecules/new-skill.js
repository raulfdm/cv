import React from 'react';

import SingleInputActions from 'molecules/single-input-actions';
import AddNewButton from 'atoms/add-new-button';

const NewSkill = ({ onAddSkill }) => {
  const [isAdding, setIsAdding] = React.useState(false);

  return isAdding ? (
    <SingleInputActions
      label="Skill Name"
      onConfirm={name => {
        onAddSkill(name);
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

export default NewSkill;
