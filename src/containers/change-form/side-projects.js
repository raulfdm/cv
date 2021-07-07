import React from 'react';
import { useForm } from 'react-final-form';
import uuid from 'uuid/v1';

import SideProjectForm from 'organisms/side-project-form';
import FormCardGroup from 'molecules/form-card-group';
import AddNewButton from 'atoms/add-new-button';

const FIELDSET_NAME = 'projects';

const SideProjectsContainer = () => {
  const { getState, change } = useForm();

  const fieldsetValues = getState().values[FIELDSET_NAME];

  function onAddProject() {
    const newProject = {
      project_name: '',
      is_actual: false,
      start_date: '',
      end_date: '',
      description: '',
    };

    change(FIELDSET_NAME, { ...fieldsetValues, [uuid()]: newProject });
  }

  function onDeleteProject(projectId) {
    return () => {
      const answer = confirm('Are you sure about this?');

      if (!answer) return;

      const updatedFieldsetValues = { ...fieldsetValues };
      delete updatedFieldsetValues[projectId];

      change(FIELDSET_NAME, updatedFieldsetValues);
    };
  }

  return (
    <FormCardGroup title="Side Projects">
      {fieldsetValues &&
        Object.entries(fieldsetValues).map(([projectId, projectData], index) => (
          <SideProjectForm
            key={projectId}
            index={index}
            prefix={`${FIELDSET_NAME}.${projectId}`}
            onDeleteProject={onDeleteProject(projectId)}
            {...projectData}
          />
        ))}
      <AddNewButton onClick={onAddProject} data-cy="add-new-side-project">
        Add new Project
      </AddNewButton>
    </FormCardGroup>
  );
};

export default SideProjectsContainer;
