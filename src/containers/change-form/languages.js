import React from 'react';

import FormCardGroup from 'molecules/form-card-group';
import InputCreatable from 'atoms/input-creatable';

const FIELDSET_NAME = 'languages';

const LanguagesContainer = () => {
  return (
    <FormCardGroup title="Languages">
      <InputCreatable name={FIELDSET_NAME} />
    </FormCardGroup>
  );
};

export default LanguagesContainer;
