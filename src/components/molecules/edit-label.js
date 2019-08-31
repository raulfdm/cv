import React from 'react';
import PropTypes from 'prop-types';

import SingleInputActions from './single-input-actions';

const EditLabel = ({ label, onConfirm, ...props }) => {
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
      {...props}
    />
  ) : (
    <label
      className="label"
      onDoubleClick={() => {
        setIsEditing(true);
      }}
      {...props}
    >
      {label}
    </label>
  );
};

EditLabel.propTypes = {
  label: PropTypes.string,
  onConfirm: PropTypes.func,
};

export default EditLabel;
