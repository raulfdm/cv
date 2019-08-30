import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';

import FieldSet from 'molecules/fieldset';
import DeleteButton from 'organisms/delete-button';

const ActionControl = styled.p`
  display: flex;
`;

const GeneralInfoForm = props => {
  const { name, getFieldName, onDelete } = props;

  return (
    <FieldSet label={name}>
      <div className="columns is-multiline">
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
                      <div className="control is-expanded">
                        <input className="input" placeholder="Label to be displayed" {...input} />
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
                      <div className="control is-expanded">
                        <input className="input" placeholder="anchor href" {...input} />
                      </div>
                    </div>
                  );
                }}
              />
            </div>
            <ActionControl className="control">
              <DeleteButton onClick={onDelete} />
            </ActionControl>
          </div>
        </div>
      </div>
    </FieldSet>
  );
};

export default GeneralInfoForm;
