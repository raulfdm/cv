import React from 'react';
import uuid from 'uuid/v1';
import { useForm } from 'react-final-form';

import Experience from 'molecules/experience';
import FormCardGroup from 'molecules/form-card-group';
import AddNewButton from 'atoms/add-new-button';

const FIELDSET_NAME = 'experiences';

const ExperienceContainer = () => {
  const { getState, change } = useForm();

  const fieldsetValues = getState().values[FIELDSET_NAME];

  const addNewExperience = () => {
    const newExperience = {
      ...fieldsetValues,
      [uuid()]: {
        role: '',
        company: '',
        is_actual: false,
        start_date: '',
        end_date: '',
        job_description: '',
      },
    };

    change(FIELDSET_NAME, newExperience);
  };

  const removeExperience = id => () => {
    const answer = confirm('Are you sure about this?');

    if (!answer) return;

    const newCaeerData = { ...fieldsetValues };
    delete newCaeerData[id];

    change(FIELDSET_NAME, newCaeerData);
  };

  return (
    <FormCardGroup title="Professional Experiences">
      {fieldsetValues &&
        Object.entries(fieldsetValues).map(([id, experience], index) => (
          <Experience
            key={id}
            id={id}
            index={index}
            prefix={`${FIELDSET_NAME}.${id}`}
            onDeleteExperience={removeExperience(id)}
            {...experience}
          />
        ))}

      <AddNewButton onClick={addNewExperience} data-cy="add-new-experience">
        Add new Field
      </AddNewButton>
    </FormCardGroup>
  );
};

export default ExperienceContainer;
