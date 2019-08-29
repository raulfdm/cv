import React from 'react';

import FieldSet from 'molecules/fieldset';
import FormCardGroup from 'molecules/form-card-group';

const FIELDSET_NAME = 'general_info';
const generateName = fieldName => `${FIELDSET_NAME}.${fieldName}`;

const GeneralInfoContainer = () => {
  return (
    <FormCardGroup title="General Info">
      <FieldSet label="Cellphone" name={generateName('phone')} />
      <FieldSet label="Home Address" name={generateName('address')} />
      <FieldSet label="Linkedin" name={generateName('linkedin')} />
      <FieldSet label="Github" name={generateName('github')} />
      <FieldSet label="Email Contact" name={generateName('email')} />
    </FormCardGroup>
  );
};

export default GeneralInfoContainer;
