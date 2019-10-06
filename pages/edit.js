import React, { useState, useEffect } from 'react';
import { Form } from 'react-final-form';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import classnames from 'classnames';

// import { useData } from 'utils/useData';
// import { useCvService } from 'src/config/useCvService';
import CvService from 'src/CvService';

import ExtraCoursesContainer from 'containers/change-form/extra-courses';
import HeadersContainer from 'containers/change-form/headers';
import GeneralInfoContainer from 'containers/change-form/general-info';
import CareerContainer from 'containers/change-form/career';
import SideProjectsContainer from 'containers/change-form/side-projects';
import ExperienceContainer from 'containers/change-form/experience';
import InterestsContainer from 'containers/change-form/interests';
import SkillsContainer from 'containers/change-form/skills';
import LanguagesContainer from 'containers/change-form/languages';
import EducationContainer from 'containers/change-form/education';

import bulma from '../node_modules/bulma/css/bulma.css';
import withAuthProtection from 'src/components/organisms/with-auth-protection';

const GlobalStyles = createGlobalStyle`
  ${bulma};
`;

const LogoutButtonWrapper = styled.div`
  padding: 1rem 1rem 0 0;
  text-align: right;
`;

const defaultValues = {
  career_sumary: '',
  experiences: {},
  extra_courses: {},
  formal_education: {},
  general_info: {},
  hard_skills: {},
  headers: {},
  interests: [],
  languages: [],
  projects: {},
};

const EditCv = () => {
  const [isSavingData, setIsSavingData] = useState(false);
  const [data, setData] = useState({});
  const [service, setService] = useState();

  useEffect(() => {
    setService(new CvService());
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await service.getData();
      setData(data);
    }
    if (service) {
      fetchData();
    }
  }, [service]);

  const onSubmit = async formValue => {
    setIsSavingData(true);
    try {
      await service.saveData(formValue);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSavingData(false);
    }
  };

  return (
    <main className="container">
      <GlobalStyles />
      <LogoutButtonWrapper>
        <Link href="/logout">
          <a className="is-primary">Logout</a>
        </Link>
      </LogoutButtonWrapper>

      <Form
        onSubmit={onSubmit}
        initialValues={{
          ...defaultValues,
          ...data,
        }}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className="section">
              <h1 className="title is-1 has-text-centered">Editing CV</h1>

              <HeadersContainer />
              <GeneralInfoContainer />
              <CareerContainer />
              <SkillsContainer />
              <ExperienceContainer />
              <SideProjectsContainer />
              <EducationContainer />
              <ExtraCoursesContainer />
              <LanguagesContainer />
              <InterestsContainer />

              <div className="field is-grouped">
                <div className="control">
                  <button
                    type="submit"
                    className={classnames(
                      'button',
                      'is-primary',
                      isSavingData && 'is-loading',
                      isSavingData && 'is-disabled',
                    )}
                  >
                    Save CV
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      />
    </main>
  );
};

export default withAuthProtection(EditCv);
