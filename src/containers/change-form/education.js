import React from 'react';
import { useForm } from 'react-final-form';
import uuid from 'uuid/v1';

import AddNewButton from 'atoms/add-new-button';
import FormCardGroup from 'molecules/form-card-group';
import FormalEducationForm from 'organisms/formal-education-form';

const FIELDSET_NAME = 'formal_education';

const EducationContainer = () => {
  const { getState, change } = useForm();

  const {
    values: { formal_education },
  } = getState();

  function onAddEducation() {
    const newEducation = {
      name: '',
      foundation: '',
      is_actual: false,
      start_date: '',
      end_date: '',
    };

    change(FIELDSET_NAME, { ...formal_education, [uuid()]: newEducation });
  }

  function onDeleteEducation(educationId) {
    return () => {
      const answer = confirm('Are you sure about this?');

      if (!answer) return;

      const updatedEducations = { ...formal_education };
      delete updatedEducations[educationId];

      change(FIELDSET_NAME, updatedEducations);
    };
  }

  return (
    <FormCardGroup title="Formal Education">
      {formal_education &&
        Object.entries(formal_education).map(([educationId, education], index) => {
          return (
            <FormalEducationForm
              key={educationId}
              index={index}
              prefix={`${FIELDSET_NAME}.${educationId}`}
              onDeleteEducation={onDeleteEducation(educationId)}
              {...education}
            />
          );
        })}
      <AddNewButton onClick={onAddEducation} data-cy="formal-education-new">
        Add new Formal Education
      </AddNewButton>
    </FormCardGroup>
  );
};

export default EducationContainer;
