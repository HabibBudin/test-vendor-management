describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000')
    cy.get('input[name="email"]').type('sharvey@example.net');
    cy.get('input[name="password"]').type('password');
    cy.get('#remember').should('exist');
    cy.get('#remember').click();
    cy.get('#remember').should('be.checked');
    cy.get('.btn').click();
    //Setelah pindah pada laman tenders
    
    cy.get('#searchInput').type('skive')
    cy.get('#searchForm > .join > .btn').click()

    // cy.wait(2000)
    // cy.get('.drawer-button').click()
    //Setelah pindah pada laman tenders


  })
})