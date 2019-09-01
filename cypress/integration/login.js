it('Login', () => {
  cy.visit('http://localhost:3000/login');

  cy.get('input[type="email"]').type('cypress-test@gmail.com');
  cy.get('input[type="password"]').type('a5rY&Y2ezMJHaEIZ');
  cy.get('[data-cy="btn-login"]').click();
  cy.url().should('eq', 'http://localhost:3000/edit');
});

it('Wrong credentials', () => {
  cy.visit('http://localhost:3000/login');

  cy.get('[data-cy="error-message"]').should('not.exist');
  cy.get('input[type="email"]').type('cypress-test@gmail.com');
  cy.get('input[type="password"]').type('cypress-test@gmail.com');
  cy.get('[data-cy="btn-login"]').click();
  cy.get('[data-cy="error-message"]').should('exist');
});

it('Button to go home', () => {
  cy.visit('http://localhost:3000/login');

  cy.get('[data-cy="back-to-home"]').click();
  cy.url().should('eq', 'http://localhost:3000/');
});
