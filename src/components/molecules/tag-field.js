import React from 'react';
import Creatable from 'react-select/creatable';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import styled from 'styled-components';

import FieldSet from 'molecules/fieldset';
import DeleteButton from 'organisms/delete-button';

const Input = styled(Creatable)`
  flex: 1;
  margin-right: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const TagField = ({ fieldName, onAddTag, name, values, deleteSkill, onConfirmLabelChange }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Field
      name={fieldName}
      render={({ input }) => {
        return (
          <FieldSet label={name} editable onConfirm={onConfirmLabelChange}>
            <InputWrapper>
              <Input
                /* Accept multi tags */
                isMulti
                /* Disable clear action */
                isClearable={false}
                /* Never open menu */
                menuIsOpen={false}
                /* Disable indicator */
                components={{
                  DropdownIndicator: null,
                }}
                value={values}
                inputValue={inputValue}
                onInputChange={inputValue => setInputValue(inputValue)}
                onKeyDown={event =>
                  onAddTag({ event, tagName: inputValue }, () => setInputValue(''))
                }
                {...input}
              />
              <DeleteButton onClick={deleteSkill} />
            </InputWrapper>
          </FieldSet>
        );
      }}
    />
  );
};

TagField.defaultProps = {
  values: [],
};

TagField.propTypes = {
  fieldName: PropTypes.string,
  onAddTag: PropTypes.func,
  name: PropTypes.string,
  values: PropTypes.array,
  deleteSkill: PropTypes.func,
  onConfirmLabelChange: PropTypes.func,
};

export default TagField;
