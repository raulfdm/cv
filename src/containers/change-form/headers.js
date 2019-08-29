import React from 'react';

import FormCardGroup from 'molecules/form-card-group';
import FieldSet from 'molecules/fieldset';

const FIELDSET_NAME = 'headers';
const generateName = fieldName => `${FIELDSET_NAME}.${fieldName}`;

const HeadersContainer = () => {
  return (
    <FormCardGroup title="Headers">
      <FieldSet label="Name" name={generateName('name')} />
      <FieldSet label="Description" name={generateName('description')} />
    </FormCardGroup>
  );
};

export default HeadersContainer;
