import React from 'react';

import uuid from 'uuid/v1';
import { useForm } from 'react-final-form';
import FormCardGroup from 'molecules/form-card-group';

import NewGeneralInfo from 'src/components/molecules/new-general-info';

const FIELDSET_NAME = 'general_info';

const generateName = fieldName => `${FIELDSET_NAME}.${fieldName}`;

const GeneralInfoContainer = () => {
  const { getState, change } = useForm();
  const fieldsetValues = getState().values[FIELDSET_NAME];

  function onAddInfo(infoName) {
    const newInfo = {
      ...fieldsetValues,
      [uuid()]: {
        name: infoName,
        values: [],
      },
    };

    change(FIELDSET_NAME, newInfo);
  }

  return (
    <FormCardGroup title="General Info">
      {/* <FieldSet label="Cellphone" name={generateName('phone')} />
      <FieldSet label="Home Address" name={generateName('address')} />
      <FieldSet label="Linkedin" name={generateName('linkedin')} />
      <FieldSet label="Github" name={generateName('github')} />
      <FieldSet label="Email Contact" name={generateName('email')} /> */}
      <NewGeneralInfo onAddInfo={onAddInfo} />
    </FormCardGroup>
  );
};

export default GeneralInfoContainer;
