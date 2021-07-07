import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FieldSet from 'molecules/fieldset';
import DeleteButton from 'organisms/delete-button';

const StyledFieldset = styled(FieldSet)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  .label-title {
    font-size: 1.4rem;
  }
`;

const ActionControl = styled.p`
  display: flex;
`;

const GeneralInfoForm = ({ name, getFieldName, onDelete, position }) => {
  return (
    <StyledFieldset label={name} labelProps={{ className: 'label-title' }}>
      <div className="columns is-multiline" data-cy={`general-info-${position}`}>
        <div className="column is-12">
          <div className="field is-horizontal">
            <div className="field-body">
              <Field
                type="text"
                className="input"
                name={getFieldName('label')}
                render={({ input }) => {
                  return (
                    <div className="field">
                      <label className="label">Label</label>
                      <div className="control is-expanded">
                        <input
                          className="input"
                          placeholder="Label to be displayed"
                          data-cy="general-info-label"
                          {...input}
                        />
                      </div>
                    </div>
                  );
                }}
              />
              <Field
                type="text"
                className="input"
                name={getFieldName('href')}
                render={({ input }) => {
                  return (
                    <div className="field">
                      <label className="label">href</label>
                      <div className="control is-expanded">
                        <input
                          className="input"
                          placeholder="anchor href"
                          data-cy="general-info-href"
                          {...input}
                        />
                      </div>
                    </div>
                  );
                }}
              />
              <Field
                type="number"
                className="input"
                name={getFieldName('position')}
                render={({ input }) => {
                  return (
                    <div className="field" style={{ width: 50, flexGrow: 0 }}>
                      <label className="label">Order</label>
                      <div className="control is-expanded">
                        <input
                          className="input"
                          placeholder="Label to be displayed"
                          data-cy="general-info-position"
                          {...input}
                        />
                      </div>
                    </div>
                  );
                }}
              />
            </div>
            <ActionControl className="control" data-cy="general-info-delete">
              <DeleteButton onClick={onDelete} />
            </ActionControl>
          </div>
        </div>
      </div>
    </StyledFieldset>
  );
};

GeneralInfoForm.propTypes = {
  name: PropTypes.string,
  getFieldName: PropTypes.func,
  onDelete: PropTypes.func,
  position: PropTypes.number,
};

export default GeneralInfoForm;
