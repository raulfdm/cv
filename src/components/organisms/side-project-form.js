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

const SideProjectForm = ({ is_actual, prefix, onDeleteProject, index }) => {
  const getFieldName = fieldName => `${prefix}.${fieldName}`;

  return (
    <Wrapper data-cy={`side-project-${index}`}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <Field
            component="input"
            className="input"
            type="text"
            placeholder="Computer Science"
            data-cy="side-project-name"
            name={getFieldName('project_name')}
          />
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
                    data-cy="side-project-start-date"
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
                        data-cy="side-project-end-date"
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
                <Field
                  component="input"
                  type="checkbox"
                  data-cy="side-project-actual"
                  name={getFieldName('is_actual')}
                />{' '}
                In Progress
              </label>
            </div>
          </CheckboxWrapper>
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <Field
            component="textarea"
            className="textarea"
            placeholder="Explain what you did/do there"
            data-cy="side-project-description"
            name={getFieldName('description')}
          />
        </div>
      </div>

      <hr />
      <ActionButton onClick={onDeleteProject} data-cy="side-project-delete" />
    </Wrapper>
  );
};

SideProjectForm.propTypes = {
  index: PropTypes.number,
  input: PropTypes.object,
  is_actual: PropTypes.bool,
  onDeleteProject: PropTypes.func,
  prefix: PropTypes.string,
};

export default SideProjectForm;
