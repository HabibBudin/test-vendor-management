describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000/signin')
    cy.get('input[name="email"]').type('accountmanager@gmail.com');
    cy.get('input[name="password"]').type('password');
    cy.get('#remember').should('exist');
    cy.get('#remember').click();
    cy.get('#remember').should('be.checked');
    cy.get('.btn').click();

    cy.get('.justify-end > .tooltip').click()
    cy.wait(1000)
    cy.get('.justify-end > .tooltip').click()
    cy.get('.justify-end > :nth-child(2) > label > .box-content').click()
    cy.get('.justify-end > :nth-child(2) > .dropdown-content > :nth-child(4) > .flex').click()
    cy.get('.mb-8 > .w-full > .flex').click()
    cy.get('.breadcrumbs > ul > :nth-child(1) > a').click()
    cy.get('.justify-end > .tooltip').click()

    
     
  })
})