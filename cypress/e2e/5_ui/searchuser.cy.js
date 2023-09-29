describe('template spec', () => {
  //it('searcbyname,sort by name', () => {
  //cy.visit('http://localhost:8000')
  //cy.get('input[name="email"]').type('accountmanager@gmail.com');
  //cy.get('input[name="password"]').type('password')
  //cy.get('#remember').should('exist')
  //cy.get('#remember').click()
  //cy.get('#remember').should('be.checked')
  //cy.get('.btn').click()
  //cy.wait(10000)


  //cy.get('#searchInput').type('accountmanager')
  //cy.get('#searchForm > .join > .btn').click()
  //cy.get('div[data-tip="Options"] svg').eq(1).click()
  //cy.get('#phone_number').click()
  //cy.get('#filterForm .btn-primary').click()
  //cy.get('#searchForm > .join > .btn > .w-6').click()
  //})
//})

it('Negcase', () => {
cy.visit('http://localhost:8000')
cy.get('input[name="email"]').type('accountmanager@gmail.com');
cy.get('input[name="password"]').type('password')
cy.get('#remember').should('exist')
cy.get('#remember').click()
cy.get('#remember').should('be.checked')
cy.get('.btn').click()
cy.wait(10000)
cy.get('#searchInput').type('accountmanager')
cy.get('#searchForm > .join > .btn').click()
cy.get('div[data-tip="Options"] svg').eq(1).click()
cy.get('#phone_number').click()
cy.get('#filterForm > .modal-action > [type="button"]').click()
cy.get('#searchForm > .join > .btn > .w-6').click()
})
})