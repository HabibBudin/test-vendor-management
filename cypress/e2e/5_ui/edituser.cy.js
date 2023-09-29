describe('template spec', () => {
  it('Edit User', () => {
    cy.visit('http://localhost:8000')
    cy.get('input[name="email"]').type('accountmanager@gmail.com');
    cy.get('input[name="password"]').type('password')
    cy.get('#remember').should('exist')
    cy.get('#remember').click()
    cy.get('#remember').should('be.checked')
    cy.get('.btn').click()

    //after login
    cy.scrollTo('bottom',{duration:5000})
    cy.get(':nth-child(9) > :nth-child(6) > .flex > a.tooltip > .w-6').click()//untuk klik edit suatu user
    cy.get('[for="5"]').click()
    cy.get('.btn').click()

  })
})