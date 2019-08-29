import React from 'react';
import SingleInputActions from './single-input-actions';

const EditLabel = ({ label, onConfirm }) => {
  const [isEditing, setIsEditing] = React.useState(false);

  return isEditing ? (
    <SingleInputActions
      inputValue={label}
      onConfirm={val => {
        setIsEditing(false);
        onConfirm(val);
      }}
      label="New value"
      onCancel={() => setIsEditing(false)}
    />
  ) : (
    <label
      className="label"
      onDoubleClick={() => {
        setIsEditing(true);
      }}
    >
      {label}
    </label>
  );
};

export default EditLabel;
