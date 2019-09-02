import React from 'react';

import uuid from 'uuid/v1';
import { useForm } from 'react-final-form';
import FormCardGroup from 'molecules/form-card-group';

import NewGeneralInfo from 'src/components/molecules/new-general-info';
import GeneralInfoForm from 'src/components/organisms/general-info-form';

const FIELDSET_NAME = 'general_info';

const GeneralInfoContainer = () => {
  const { getState, change } = useForm();
  const fieldsetValues = getState().values[FIELDSET_NAME];

  function onAddInfo(infoName) {
    const newInfo = {
      ...fieldsetValues,
      [uuid()]: {
        name: infoName,
        label: '',
        href: '',
        position: Object.keys(fieldsetValues) ? Object.keys(fieldsetValues).length : 0,
      },
    };

    change(FIELDSET_NAME, newInfo);
  }

  function onDelete(infoId) {
    return () => {
      const confirmation = confirm('Are you sure you want to remove this info?');

      if (confirmation) {
        const nextValues = { ...fieldsetValues };
        delete nextValues[infoId];

        change(FIELDSET_NAME, nextValues);
      }
    };
  }

  return (
    <FormCardGroup title="General Info">
      {fieldsetValues &&
        Object.entries(fieldsetValues).map(([infoId, infoData]) => {
          const getFieldName = name => `${FIELDSET_NAME}.${infoId}.${name}`;

          return (
            <GeneralInfoForm
              key={infoId}
              getFieldName={getFieldName}
              onDelete={onDelete(infoId)}
              {...infoData}
            />
          );
        })}
      <NewGeneralInfo onAddInfo={onAddInfo} />
    </FormCardGroup>
  );
};

export default GeneralInfoContainer;
