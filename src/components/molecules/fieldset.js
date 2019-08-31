import React from 'react';
import { Field } from 'react-final-form';
import classnames from 'classnames';

import EditLabel from './edit-label';

const FieldSet = ({
  label,
  className,
  editable,
  onConfirm,
  children,
  wrapperProps,
  fieldProps,
  labelProps,
  ...props
}) => {
  return (
    <div className={classnames('field', className)} {...wrapperProps}>
      {editable ? (
        <EditLabel label={label} onConfirm={onConfirm} />
      ) : (
        <label {...labelProps} className={classnames('label', labelProps && labelProps.className)}>
          {label}
        </label>
      )}
      <div className="control">
        {children || <Field className="input" component="input" {...fieldProps} {...props} />}
      </div>
    </div>
  );
};

export default FieldSet;
