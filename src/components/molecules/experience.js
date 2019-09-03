import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import DeleteButton from 'organisms/delete-button';

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

const Sepator = styled.p`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Experience = ({ prefix, is_actual, onDeleteExperience, index }) => {
  const getFieldName = name => `${prefix}.${name}`;
  return (
    <Wrapper className="columns is-multiline" data-cy={`experience-${index}`}>
      <div className="column is-half">
        <Field
          component="input"
          className="input"
          type="text"
          placeholder="Company Name"
          data-cy="experience-company-name"
          name={getFieldName('company')}
          style={{ marginBottom: 10 }}
        />

        <div className="columns is-gapless is-vcentered">
          <div className="column is-5">
            <Field
              component="input"
              className="input"
              type="date"
              placeholder="2018-02-19"
              data-cy="experience-start-date"
              name={getFieldName('start_date')}
            />
          </div>
          <div className="column is-2">
            <Sepator>-</Sepator>
          </div>
          <div className="column is-5">
            <Field type="date" name={getFieldName('end_date')}>
              {({ input }) => (
                <input
                  className="input"
                  disabled={is_actual}
                  placeholder="2018-02-19"
                  data-cy="experience-end-date"
                  {...input}
                  value={is_actual ? '' : input.value}
                />
              )}
            </Field>
          </div>
        </div>
      </div>

      <div className="column is-half">
        <Field
          component="input"
          className="input"
          type="text"
          placeholder="Role name"
          name={getFieldName('role')}
          data-cy="experience-role"
          style={{ marginBottom: 10 }}
        />
        <label className="checkbox">
          <Field
            component="input"
            type="checkbox"
            name={getFieldName('is_actual')}
            data-cy="experience-actual-job"
          />{' '}
          Current Working there
        </label>
      </div>

      <div className="column is-fulll">
        <Field
          component="textarea"
          className="textarea"
          placeholder="Explain what you did/do there"
          data-cy="experience-job-description"
          name={getFieldName('job_description')}
        />
      </div>
      <ActionButton onClick={onDeleteExperience} data-cy="delete-experience" />
    </Wrapper>
  );
};

Experience.propTypes = {
  prefix: PropTypes.string,
  is_actual: PropTypes.boolean,
  onDeleteExperience: PropTypes.func,
  index: PropTypes.number,
};

export default Experience;
