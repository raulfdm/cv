import React from 'react';
import { Field } from 'react-final-form';
import classnames from 'classnames';

import EditLabel from './edit-label';

const FieldSet = ({ label, className, editable, onConfirm, children, fieldProps, ...props }) => {
  return (
    <div className={classnames('field', className)}>
      {editable ? (
        <EditLabel label={label} onConfirm={onConfirm} />
      ) : (
        <label className="label">{label}</label>
      )}
      <div className="control">
        {children || <Field className="input" component="input" {...fieldProps} {...props} />}
      </div>
    </div>
  );
};

export default FieldSet;
