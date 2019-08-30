import React from 'react';
import { Form } from 'react-final-form';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import classnames from 'classnames';

import { useData } from 'utils/useData';

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

const EditCv = ({ authProps }) => {
  const [isSavingData, setIsSavingData] = React.useState(false);

  const onSubmit = formValue => {
    setIsSavingData(true);
    axios
      .put('https://personal-cv-87ac0.firebaseio.com/new-cv.json', {
        ...formValue,
      })
      .then(() => {
        setIsSavingData(false);
      });
  };

  const { data } = useData('https://personal-cv-87ac0.firebaseio.com/new-cv.json');

  return (
    <main className="container">
      <GlobalStyles />
      <LogoutButtonWrapper>
        <a className="is-primary" onClick={authProps.logout}>
          Logout
        </a>
      </LogoutButtonWrapper>

      <Form
        onSubmit={onSubmit}
        initialValues={{
          languages: [],
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
