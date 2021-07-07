import React from 'react';

import FormCardGroup from 'molecules/form-card-group';
import InputCreatable from 'atoms/input-creatable';

const FIELDSET_NAME = 'languages';

const LanguagesContainer = () => {
  return (
    <FormCardGroup
      title="Languages"
      contentProps={{
        'data-cy': 'languages',
      }}
    >
      <InputCreatable name={FIELDSET_NAME} />
    </FormCardGroup>
  );
};

export default LanguagesContainer;
