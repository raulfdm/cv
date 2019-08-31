import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import DeleteButton from 'organisms/delete-button';

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ActionButton = styled(DeleteButton)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  padding-right: 30px;
  padding-bottom: 30px;
  position: relative;
`;

const FormalEducationForm = ({ is_actual, prefix, onDeleteEducation }) => {
  const getFieldName = fieldName => `${prefix}.${fieldName}`;

  return (
    <Wrapper>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <label className="label">Course Name</label>
            <div className="control">
              <Field
                component="input"
                className="input"
                type="text"
                placeholder="Computer Science"
                name={getFieldName('name')}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Foundation</label>
            <div className="control">
              <Field
                component="input"
                className="input"
                type="text"
                placeholder="MIT University"
                name={getFieldName('foundation')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label">Start date</label>
                <div className="control">
                  <Field
                    component="input"
                    className="input"
                    type="date"
                    placeholder="2018-02-19"
                    name={getFieldName('start_date')}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">End date</label>
                <div className="control">
                  <Field type="date" name={getFieldName('end_date')}>
                    {props => (
                      <input
                        className="input"
                        disabled={is_actual}
                        placeholder="2018-02-19"
                        {...props.input}
                        value={is_actual ? '' : props.input.value}
                      />
                    )}
                  </Field>
                </div>
              </div>
            </div>
          </div>
          <CheckboxWrapper className="field">
            <div className="control">
              <label className="checkbox">
                <Field component="input" type="checkbox" name={getFieldName('is_actual')} /> In
                Progress
              </label>
            </div>
          </CheckboxWrapper>
        </div>
        <ActionButton onClick={onDeleteEducation} />
      </div>
      <hr />
    </Wrapper>
  );
};

FormalEducationForm.propTypes = {
  is_actual: PropTypes.boolean,
  prefix: PropTypes.string,
  onDeleteEducation: PropTypes.func,
  input: PropTypes.object,
};

export default FormalEducationForm;
