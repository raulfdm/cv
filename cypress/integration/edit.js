import mockData from '../fixtures/mock-data';

describe('Edit page', () => {
  before(() => {
    /* TODO: Improve this logic */
    cy.visit('http://localhost:3000/logout');
    cy.wait(1000);
    cy.visit('http://localhost:3000/login');
    cy.get('input[type="email"]').type('cypress-test@gmail.com');
    cy.get('input[type="password"]').type('a5rY&Y2ezMJHaEIZ');
    cy.get('[data-cy="btn-login"]').click();
    cy.wait(6000);
  });

  it('Headers', () => {
    /* Wait firebase data */
    cy.wait(3000);

    cy.get('input[name="headers.name"]')
      .clear()
      .type(mockData.headers.name);

    cy.get('input[name="headers.description"]')
      .clear()
      .type(mockData.headers.description);
  });

  it.only('General Info', () => {
    cy.get('[data-cy="general-info-delete"]').each($el => $el.click());

    // cy.get('[data-cy="general-info-delete"]').should('have.length', 0);
    // mockData.generalInfo.forEach((el, index) => {
    //   cy.get('button[data-cy="new-general-info"]').click();
    //   cy.get('input[data-cy="new-info-name"]')
    //     .clear()
    //     .type(el.name);

    //   cy.get('button[data-cy="single-input-actions-confirm"]').click();

    //   cy.get(`[data-cy="general-info-${index}"] [data-cy="general-info-label"]`)
    //     .clear()
    //     .type(el.label);

    //   cy.get(`[data-cy="general-info-${index}"] [data-cy="general-info-href"]`)
    //     .clear()
    //     .type(el.href);

    //   cy.get(`[data-cy="general-info-${index}"] [data-cy="general-info-position"]`).should(
    //     'have.value',
    //     `${index}`,
    //   );
    // });
  });

  /* TODO: Remove it before publish */
  it.skip('Career Summary', () => {
    cy.get('[data-cy="career-summary-text"]')
      .clear()
      .type(mockData.careerSummary);
  });

  it('Skills', () => {
    mockData.skills.forEach((skillSet, index) => {
      cy.get('button[data-cy="add-new-skill"]').click();

      cy.get('input[data-cy="single-input-actions-input"]')
        .clear()
        .type(skillSet.name);

      cy.get('button[data-cy="single-input-actions-confirm"]').click();

      skillSet.list.forEach(skill => {
        cy.get(`[data-cy="tag-field-${index}"] input[aria-autocomplete="list"]`)
          .type(skill, { force: true })
          .tab();
      });
    });

    /* Todo: implement remove item */
  });

  it('Professional', () => {
    const getSelector = index => selector => `[data-cy="experience-${index}"] ${selector}`;

    cy.get('button[data-cy="add-new-experience"]').click();
    cy.get('button[data-cy="delete-experience"]').click();

    mockData.experiences.forEach((exp, index) => {
      const selectorFn = getSelector(index);

      cy.get('button[data-cy="add-new-experience"]').click();

      cy.get(selectorFn('input[data-cy="experience-company-name"]'))
        .clear()
        .type(exp.companyName);

      cy.get(selectorFn('input[data-cy="experience-role"]'))
        .clear()
        .type(exp.role);

      cy.get(selectorFn('input[data-cy="experience-start-date"]'))
        .clear()
        .type(exp.startDate);

      if (exp.endDate) {
        cy.get(selectorFn('input[data-cy="experience-end-date"]'))
          .clear()
          .type(exp.endDate);
      }

      if (exp.isActual) {
        cy.get(selectorFn('input[data-cy="experience-actual-job"]')).click();
      }

      cy.get(selectorFn('[data-cy="experience-job-description"]'))
        .clear()
        .type(exp.description);
    });
  });

  it('Side Projects', () => {
    const getSelector = index => selector => `[data-cy="side-project-${index}"] ${selector}`;

    cy.get('button[data-cy="add-new-side-project"]').click();
    cy.get('[data-cy="side-project-0"] button[data-cy="side-project-delete"]').click();

    mockData.sideProjects.forEach((proj, index) => {
      const selectorFn = getSelector(index);
      cy.get('button[data-cy="add-new-side-project"]').click();

      cy.get(selectorFn('input[data-cy="side-project-name"]'))
        .clear()
        .type(proj.name);

      cy.get(selectorFn('input[data-cy="side-project-start-date"]'))
        .clear()
        .type(proj.startDate);

      if (proj.endDate) {
        cy.get(selectorFn('input[data-cy="side-project-end-date"]'))
          .clear()
          .type(proj.endDate);
      }

      if (proj.isActual) {
        cy.get(selectorFn('input[data-cy="side-project-actual"]')).click();
      }

      cy.get(selectorFn('[data-cy="side-project-description"]'))
        .clear()
        .type(proj.description);
    });
  });

  it('Formal Education', () => {
    const getSelector = index => selector => `[data-cy="formal-education-${index}"] ${selector}`;

    cy.get('button[data-cy="formal-education-new"]').click();
    cy.get(getSelector(0)('button[data-cy="formal-education-delete"]')).click();

    mockData.formalEducation.forEach((edu, index) => {
      const selectorFn = getSelector(index);

      cy.get('button[data-cy="formal-education-new"]').click();

      cy.get(selectorFn('input[data-cy="formal-education-name"]'))
        .clear()
        .type(edu.courseName);

      cy.get(selectorFn('input[data-cy="formal-education-foundation"]'))
        .clear()
        .type(edu.foundation);

      cy.get(selectorFn('input[data-cy="formal-education-start-date"]'))
        .clear()
        .type(edu.startDate);

      if (edu.endDate) {
        cy.get(selectorFn('input[data-cy="formal-education-end-date"]'))
          .clear()
          .type(edu.endDate);
      }

      if (edu.isActual) {
        cy.get(selectorFn('input[data-cy="formal-education-actual"]')).click();
      }
    });
  });

  it('Languages', () => {
    mockData.languages.forEach(lang => {
      cy.get(`[data-cy="languages"] input[aria-autocomplete="list"]`)
        .type(lang, { force: true })
        .tab();
    });
  });

  it('Interests', () => {
    mockData.interests.forEach(inter => {
      cy.get(`[data-cy="interests"] input[aria-autocomplete="list"]`)
        .type(inter, { force: true })
        .tab();
    });
  });
});
