import React from 'react';
import styled from 'styled-components';

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const HelperText = styled.p`
  margin: 0;
  flex-basis: 100%;
  font-size: 10px;
  color: tomato;
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
}) => {
  return (
    <FieldContainer className={className}>
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
      <Input type={type} onChange={onChange} name={name} className={inputClassName} />
      {error && <HelperText>{error}</HelperText>}
    </FieldContainer>
  );
};

Field.defaultProps = {
  type: 'text',
  label: 'default label',
};

export default Field;
