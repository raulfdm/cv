import React from 'react';
import styled from 'styled-components';

import HelperText from '../HelperText';

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 5px 3px;
`;

const Field = ({
  className,
  inputClassName,
  labelClassName,
  type,
  label,
  name,
  onChange,
  error,
  disabled,
  value,
}) => {
  return (
    <FieldContainer className={className}>
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
      <Input
        type={type}
        onChange={onChange}
        name={name}
        className={inputClassName}
        disabled={disabled}
        value={value}
      />
      {error && <HelperText>{error}</HelperText>}
    </FieldContainer>
  );
};

Field.defaultProps = {
  type: 'text',
  label: 'default label',
};

export default Field;
