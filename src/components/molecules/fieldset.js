import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
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

FieldSet.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  editable: PropTypes.bool,
  onConfirm: PropTypes.func,
  children: PropTypes.node,
  wrapperProps: PropTypes.object,
  fieldProps: PropTypes.object,
  labelProps: PropTypes.object,
};

export default FieldSet;
