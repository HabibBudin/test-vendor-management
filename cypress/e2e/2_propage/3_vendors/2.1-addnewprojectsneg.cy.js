it('new projects', () => {
   cy.visit('http://localhost:8000/signin')
   cy.get('input[name="email"]').type('accountmanager@gmail.com');
   cy.get('input[name="password"]').type('password');
   cy.get('#remember').should('exist');
   cy.get('#remember').click();
   cy.get('#remember').should('be.checked');
   cy.get('.btn').click();




it('test negative', () => {
  cy.viewport('iphone-6')
  cy.visit('http://localhost:8000/signin')
  cy.get('input[name="email"]').type('accountmanager@gmail.com');
  cy.get('input[name="password"]').type('password');
  cy.get('#remember').should('exist');
  cy.get('#remember').click();
  cy.get('#remember').should('be.checked');
  cy.get('.btn').click();

  cy.get('.justify-end > .tooltip').click()
  cy.wait(5000)

  cy.get('.drawer-button').click()
  cy.get('.p-4 > nav > ul > :nth-child(3) > .flex').click()
  cy.get('.hidden > .btn').click({ force: true });



  cy.get('#name').type('skive projetcs')

  cy.get('#job').type('Chief Executive Officer')
  cy.get('#user_company').type('Skive Corp')
  cy.get('#pic_company').type('Looket, Dian, Federe')
  cy.get('#pic_company_phone_number').type('09saqs8')
  cy.get('#contract_number').type('25s6')
  cy.get('#contract_date').type('2023-08-19')
  cy.get('#contract_rate').type('7493290')
  cy.get('#vendor_deal').type('10000000')
  cy.get('#assign_pic_am').select(1)
  cy.get('.btn').click()
  
})
})
                           