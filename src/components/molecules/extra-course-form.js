import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FieldSet from 'molecules/fieldset';
import DeleteButton from 'organisms/delete-button';

const ActionControl = styled.p`
  display: flex;
`;

const InputField = styled.div`
  &&& {
    flex-grow: ${props => (props.noGrow ? 0 : 1)};
  }
`;

const NewFieldWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ExtraCourseForm = ({
  platform_name,
  prefix,
  onNewCourse,
  courses,
  onDeleteCourseFromPlatform,
  onPlatformRename,
}) => {
  return (
    <FieldSet label={platform_name} editable onConfirm={onPlatformRename}>
      <div className="columns is-multiline">
        {courses &&
          courses.length > 0 &&
          courses.map((_, index) => {
            const getFieldName = name => `${prefix}.courses[${index}].${name}`;

            return (
              <div className="column is-12" key={index}>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <Field
                      type="text"
                      className="input"
                      placeholder="Course name"
                      name={getFieldName('name')}
                      render={({ input }) => {
                        return (
                          <InputField className="field">
                            <div className="control is-expanded">
                              <input className="input" {...input} />
                            </div>
                          </InputField>
                        );
                      }}
                    />
                    <Field
                      type="number"
                      className="input"
                      placeholder="10"
                      name={getFieldName('hours')}
                      render={({ input }) => {
                        return (
                          <InputField noGrow className="field has-addons">
                            <p className="control">
                              <input className="input" type="text" {...input} />
                            </p>
                            <p className="control">
                              <a className="button is-static">hours</a>
                            </p>
                          </InputField>
                        );
                      }}
                    />
                  </div>
                  <ActionControl className="control">
                    <DeleteButton onClick={() => onDeleteCourseFromPlatform(index)} />
                  </ActionControl>
                </div>
              </div>
            );
          })}

        <NewFieldWrapper className="column is-12">
          <button className="button is-text" onClick={onNewCourse}>
            New course for {platform_name}
          </button>
        </NewFieldWrapper>
      </div>
    </FieldSet>
  );
};

ExtraCourseForm.propTypes = {
  platform_name: PropTypes.string,
  prefix: PropTypes.string,
  onNewCourse: PropTypes.func,
  courses: PropTypes.array,
  onDeleteCourseFromPlatform: PropTypes.func,
  onPlatformRename: PropTypes.func,
};

export default ExtraCourseForm;
