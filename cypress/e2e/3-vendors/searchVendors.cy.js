describe('template spec', () => {
  it('vendor', () => {
    cy.visit('http://localhost:8000')
    cy.get('input[name="email"]').type('accountmanager@gmail.com');
      cy.get('input[name="password"]').type('password')
      cy.get('#remember').should('exist')
      cy.get('#remember').click()
      cy.get('#remember').should('be.checked')
      cy.wait(1000);
      cy.get('.btn').click()
      cy.get('#remember').click()
      cy.get('#searchInput').click()
      cy.get('#searchInput').type('account_manager')
      cy.get('#searchForm > .join > .btn > .w-6').click()
  })
})