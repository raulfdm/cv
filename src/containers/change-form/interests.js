import React from 'react';

import FormCardGroup from 'molecules/form-card-group';
import InputCreatable from 'atoms/input-creatable';

const FIELDSET_NAME = 'interests';

const InterestsContainer = () => {
  return (
    <FormCardGroup
      title="Interests"
      contentProps={{
        'data-cy': 'interests',
      }}
    >
      <InputCreatable name={FIELDSET_NAME} />
    </FormCardGroup>
  );
};

export default InterestsContainer;
