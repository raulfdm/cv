import React from 'react';
import PropTypes from 'prop-types';

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

NewExtraCourse.propTypes = {
  onCreate: PropTypes.func,
};

export default NewExtraCourse;
