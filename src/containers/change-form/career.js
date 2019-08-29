import React from 'react';

import FieldSet from 'molecules/fieldset';
import FormCardGroup from 'molecules/form-card-group';

const FIELDSET_NAME = 'career_sumary';

const CareerContainer = () => {
  return (
    <FormCardGroup title="Career Summary">
      <FieldSet
        label="Summary"
        fieldProps={{
          className: 'textarea',
        }}
        name={FIELDSET_NAME}
        component="textarea"
        rows={10}
      />
    </FormCardGroup>
  );
};

export default CareerContainer;
