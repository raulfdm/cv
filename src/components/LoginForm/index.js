import React from 'react';
import styled from 'styled-components';

import Field from '../Field';
import Button from '../Button';
import HelperText from '../HelperText';

const CustomerHelperText = styled(HelperText)`
  margin: 1rem;
  text-align: center;
`;

export default ({ errors, isSubmitting, handleChange, handleSubmit }) => {
  return (
    <div>
      <Field
        type="email"
        name="email"
        onChange={handleChange}
        label="E-mail"
        error={errors.email}
        disabled={isSubmitting}
      />
      <Field
        type="password"
        name="password"
        onChange={handleChange}
        label="Password"
        error={errors.password}
        disabled={isSubmitting}
      />

      {errors.serverError && <CustomerHelperText>{errors.serverError}</CustomerHelperText>}
      <Button fullWidth onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
};
