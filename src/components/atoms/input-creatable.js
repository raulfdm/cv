import React from 'react';
import Creatable from 'react-select/creatable';
import { Field } from 'react-final-form';

const createOptions = label => ({ label, value: label });

const InputCreatable = ({ name }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Field
      name={name}
      render={({ input }) => {
        const handleInputChange = inputValue => setInputValue(inputValue);
        const { onChange, value } = input;

        const handleKeyDown = event => {
          if (!inputValue) return;
          switch (event.key) {
            case 'Enter':
            case 'Tab': {
              onChange([...value, createOptions(inputValue)]);
              setInputValue('');
              event.preventDefault();
            }
          }
        };

        return (
          <Creatable
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
            {...input}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        );
      }}
    ></Field>
  );
};

export default InputCreatable;
