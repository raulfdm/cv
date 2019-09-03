import React from 'react';
import { useForm } from 'react-final-form';
import set from 'lodash.set';
import uuid from 'uuid/v1';

import FormCardGroup from 'molecules/form-card-group';
import TagField from 'molecules/tag-field';
import NewSkill from 'molecules/new-skill';

const FIELDSET_NAME = 'hard_skills';

const SkillsContainer = () => {
  const { getState, change } = useForm();

  const fieldsetValues = getState().values[FIELDSET_NAME];

  function onSkillRename(skillId) {
    return newLabel => {
      const updatedFieldsetValues = { ...fieldsetValues };

      set(updatedFieldsetValues, `${skillId}.name`, newLabel);

      change(FIELDSET_NAME, updatedFieldsetValues);
    };
  }

  function onDeleteSkill(skillId) {
    return () => {
      const answer = confirm('Are you sure about this?');

      if (!answer) return;

      const nextSkillList = { ...fieldsetValues };
      delete nextSkillList[skillId];

      change(FIELDSET_NAME, nextSkillList);
    };
  }

  function onAddSkill(skillName) {
    const newSkillset = {
      ...fieldsetValues,
      [uuid()]: {
        name: skillName,
        values: [],
      },
    };

    change(FIELDSET_NAME, newSkillset);
  }

  function onAddTag(fieldName, skillId) {
    return ({ event, tagName }, callback) => {
      if (!tagName) return;
      switch (event.key) {
        case 'Enter':
        case 'Tab': {
          const actualValues = fieldsetValues[skillId].values;

          change(fieldName, [...actualValues, { label: tagName, value: tagName }]);
          if (callback) callback();
          event.preventDefault();
        }
      }
    };
  }

  return (
    <FormCardGroup title="Skills">
      {fieldsetValues &&
        Object.entries(fieldsetValues).map(([skillId, skill], index) => {
          const fieldName = `${FIELDSET_NAME}.${skillId}.values`;
          return (
            <TagField
              key={fieldName}
              index={index}
              fieldName={fieldName}
              deleteSkill={onDeleteSkill(skillId)}
              onAddTag={onAddTag(fieldName, skillId)}
              onConfirmLabelChange={onSkillRename(skillId)}
              {...skill}
            />
          );
        })}

      <NewSkill onAddSkill={onAddSkill} />
    </FormCardGroup>
  );
};

export default SkillsContainer;
