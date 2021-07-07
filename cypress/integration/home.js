it('Home was loaded', () => {
  cy.visit('http://localhost:3000');
  cy.get('[data-cy="main"]')
    .children()
    .its('length')
    .should('be.greaterThan', 0);
});
