import React from 'react';
import { useForm } from 'react-final-form';
import uuid from 'uuid/v1';

import FormCardGroup from 'molecules/form-card-group';
import NewExtraCourse from 'molecules/new-extra-course';
import ExtraCourseForm from 'molecules/extra-course-form';

const FIELDSET_NAME = 'extra_courses';

const ExtraCoursesContainer = () => {
  const { getState, batch, change } = useForm();

  const fieldsetValues = getState().values[FIELDSET_NAME];

  function removePlatform(platformId) {
    const confirmation = confirm('Are you sure you want to remove this platform?');

    if (confirmation) {
      const updatedPlatforms = { ...fieldsetValues };
      delete updatedPlatforms[platformId];

      batch(() => {
        change(FIELDSET_NAME, updatedPlatforms);
      });
    }
  }

  function onCreateExtraCourse(name) {
    const newExtraCourse = {
      ...fieldsetValues,
      [uuid()]: {
        platform_name: name,
        courses: [{ course_name: '', hours: '' }],
      },
    };

    batch(() => {
      change(FIELDSET_NAME, newExtraCourse);
    });
  }

  function onDeleteCourseFromPlatform(platformId) {
    return courseIndex => {
      const confirmation = confirm('Are you sure you want to remove this course?');
      if (confirmation) {
        const plataform = fieldsetValues[platformId];

        const newCourses = plataform.courses.filter((_, index) => index !== courseIndex);

        const updatedPlatform = { ...plataform, courses: newCourses };

        if (newCourses.length === 0) {
          return removePlatform(platformId);
        }

        batch(() => {
          change(FIELDSET_NAME, { ...fieldsetValues, [platformId]: updatedPlatform });
        });
      }
    };
  }

  function onNewCourse(platformId) {
    return () => {
      const platform = fieldsetValues[platformId];
      platform.courses.push({ course_name: '', hours: '' });

      const updatedCourses = {
        ...fieldsetValues,
        [platformId]: platform,
      };

      batch(() => {
        change(FIELDSET_NAME, updatedCourses);
      });
    };
  }

  function onPlatformRename(platformId) {
    return name => {
      const platform = fieldsetValues[platformId];
      platform.platform_name = name;

      const updatedCourses = {
        ...fieldsetValues,
        [platformId]: platform,
      };

      batch(() => {
        change(FIELDSET_NAME, updatedCourses);
      });
    };
  }

  return (
    <FormCardGroup title="Extra Courses">
      {fieldsetValues &&
        Object.entries(fieldsetValues).map(([platformId, extraCourse]) => (
          <ExtraCourseForm
            key={platformId}
            prefix={`${FIELDSET_NAME}.${platformId}`}
            onNewCourse={onNewCourse(platformId)}
            onDeleteCourseFromPlatform={onDeleteCourseFromPlatform(platformId)}
            onPlatformRename={onPlatformRename(platformId)}
            {...extraCourse}
          />
        ))}
      <NewExtraCourse onCreate={onCreateExtraCourse} />
    </FormCardGroup>
  );
};

export default ExtraCoursesContainer;
